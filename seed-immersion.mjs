import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error('DATABASE_URL not set');
  process.exit(1);
}

async function seedImmersion() {
  let connection;
  try {
    // Parse connection string
    const url = new URL(DATABASE_URL);
    const config = {
      host: url.hostname,
      user: url.username,
      password: url.password,
      database: url.pathname.slice(1),
      port: url.port || 3306,
      ssl: url.searchParams.get('ssl') === 'true' ? { rejectUnauthorized: false } : undefined,
    };

    connection = await mysql.createConnection(config);
    console.log('✓ Connected to database');

    // Check if immersion product already exists
    const [existing] = await connection.execute(
      'SELECT id FROM products WHERE title = ?',
      ['Imersão IA - 5 Dias de Transformação']
    );

    if (existing.length > 0) {
      console.log('✓ Immersion product already exists (ID: ' + existing[0].id + ')');
      await connection.end();
      return;
    }

    // Insert immersion product
    const [result] = await connection.execute(
      `INSERT INTO products (title, description, price, type, status, image, createdAt, updatedAt) 
       VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW())`,
      [
        'Imersão IA - 5 Dias de Transformação',
        'Aprenda tudo sobre Inteligência Artificial em 5 dias intensivos com conteúdo prático e aplicável ao seu negócio. Inclui 5 vídeos em alta qualidade, 5 e-books completos, acesso a apresentações em Prezi e certificado de conclusão.',
        29700, // R$ 297.00 in cents
        'immersion',
        'available',
        '/aurea_dia1_fundamentos.png'
      ]
    );

    console.log('✓ Immersion product created with ID:', result.insertId);
    console.log('✓ Product details:');
    console.log('  - Title: Imersão IA - 5 Dias de Transformação');
    console.log('  - Price: R$ 297.00');
    console.log('  - Type: immersion');
    console.log('  - Status: available');

    await connection.end();
    console.log('✓ Database seed completed successfully!');
  } catch (error) {
    console.error('✗ Error seeding database:', error.message);
    process.exit(1);
  }
}

seedImmersion();
