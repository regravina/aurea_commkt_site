CREATE TABLE `orders` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`productId` int NOT NULL,
	`mercadopagoOrderId` varchar(255),
	`amount` int NOT NULL,
	`status` enum('pending','approved','failed','refunded') NOT NULL DEFAULT 'pending',
	`paymentMethod` varchar(50),
	`customerEmail` varchar(320),
	`customerName` varchar(255),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `orders_id` PRIMARY KEY(`id`),
	CONSTRAINT `orders_mercadopagoOrderId_unique` UNIQUE(`mercadopagoOrderId`)
);
--> statement-breakpoint
CREATE TABLE `products` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` text,
	`price` int NOT NULL,
	`type` enum('ebook','course') NOT NULL,
	`status` enum('available','coming_soon') NOT NULL DEFAULT 'available',
	`image` varchar(255),
	`downloadUrl` varchar(512),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `products_id` PRIMARY KEY(`id`)
);
