import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, products, orders, InsertOrder, Order, newsletterSubscribers, InsertNewsletterSubscriber, NewsletterSubscriber } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Product queries
export async function getProducts() {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get products: database not available");
    return [];
  }
  return await db.select().from(products);
}

export async function getProductById(id: number) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get product: database not available");
    return undefined;
  }
  const result = await db.select().from(products).where(eq(products.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

// Order queries
export async function createOrder(order: InsertOrder): Promise<Order | null> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create order: database not available");
    return null;
  }
  try {
    await db.insert(orders).values(order);
    const result = await db.select().from(orders)
      .where(eq(orders.mercadopagoOrderId, order.mercadopagoOrderId || ""))
      .limit(1);
    return result.length > 0 ? result[0] : null;
  } catch (error) {
    console.error("[Database] Failed to create order:", error);
    return null;
  }
}

export async function getOrderByMercadopagoId(mercadopagoOrderId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get order: database not available");
    return undefined;
  }
  const result = await db.select().from(orders)
    .where(eq(orders.mercadopagoOrderId, mercadopagoOrderId))
    .limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function updateOrderStatus(mercadopagoOrderId: string, status: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot update order: database not available");
    return null;
  }
  try {
    await db.update(orders)
      .set({ status: status as any })
      .where(eq(orders.mercadopagoOrderId, mercadopagoOrderId));
    return await getOrderByMercadopagoId(mercadopagoOrderId);
  } catch (error) {
    console.error("[Database] Failed to update order:", error);
    return null;
  }
}

export async function getUserOrders(userId: number) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user orders: database not available");
    return [];
  }
  return await db.select().from(orders).where(eq(orders.userId, userId));
}

// Newsletter queries
export async function subscribeToNewsletter(email: string, name?: string): Promise<NewsletterSubscriber | null> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot subscribe to newsletter: database not available");
    return null;
  }
  try {
    const subscriber: InsertNewsletterSubscriber = {
      email,
      name: name || undefined,
      status: "active",
    };
    await db.insert(newsletterSubscribers).values(subscriber).onDuplicateKeyUpdate({
      set: { status: "active" },
    });
    const result = await db.select().from(newsletterSubscribers).where(eq(newsletterSubscribers.email, email)).limit(1);
    return result.length > 0 ? result[0] : null;
  } catch (error) {
    console.error("[Database] Failed to subscribe to newsletter:", error);
    return null;
  }
}

export async function getNewsletterSubscriber(email: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get newsletter subscriber: database not available");
    return undefined;
  }
  const result = await db.select().from(newsletterSubscribers).where(eq(newsletterSubscribers.email, email)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function unsubscribeFromNewsletter(email: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot unsubscribe from newsletter: database not available");
    return null;
  }
  try {
    await db.update(newsletterSubscribers)
      .set({ status: "unsubscribed", unsubscribedAt: new Date() })
      .where(eq(newsletterSubscribers.email, email));
    const result = await db.select().from(newsletterSubscribers).where(eq(newsletterSubscribers.email, email)).limit(1);
    return result.length > 0 ? result[0] : null;
  } catch (error) {
    console.error("[Database] Failed to unsubscribe from newsletter:", error);
    return null;
  }
}


