const mysql = require('mysql2')
require('dotenv').config()

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  port: Number(process.env.DB_PORT) || 3306,
}

const dbName = process.env.DB_NAME || 'luxe_estates_db'

// Helper function to auto-create database & tables on startup
async function initDatabase() {
  const rootConnection = mysql.createConnection(dbConfig).promise()

  try {
    // 1. Create database if not exists
    await rootConnection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`)
    await rootConnection.end()

    // 2. Connect to the created database to setup tables
    const dbConnection = mysql.createConnection({ ...dbConfig, database: dbName }).promise()

    // Table 1: Bookings (Private viewings)
    await dbConnection.query(`
      CREATE TABLE IF NOT EXISTS bookings (
        id INT AUTO_INCREMENT PRIMARY KEY,
        residence_name VARCHAR(255) NOT NULL,
        booking_date VARCHAR(50) NOT NULL,
        time_slot VARCHAR(50) NOT NULL,
        client_name VARCHAR(255) NOT NULL,
        phone VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL,
        notes TEXT,
        status ENUM('Pending', 'Confirmed', 'Cancelled') DEFAULT 'Pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB;
    `)

    // Table 2: Inquiries (Contact mandates)
    await dbConnection.query(`
      CREATE TABLE IF NOT EXISTS inquiries (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(100),
        inquiry_type VARCHAR(150),
        channel VARCHAR(150),
        time_slot VARCHAR(150),
        budget VARCHAR(100),
        location VARCHAR(150),
        notes TEXT,
        status ENUM('New', 'In Progress', 'Closed') DEFAULT 'New',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB;
    `)

    // Table 3: Newsletter Subscribers
    await dbConnection.query(`
      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB;
    `)

    await dbConnection.end()
    console.log(`[MySQL] Database "${dbName}" and tables verified successfully.`)
  } catch (error) {
    console.error('[MySQL] Initialization Error:', error.message)
    throw error
  }
}

// Pool for handling regular application queries
const pool = mysql.createPool({
  ...dbConfig,
  database: dbName,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

module.exports = {
  pool: pool.promise(),
  initDatabase,
}

