const express = require('express')
const cors = require('cors')
require('dotenv').config()

const { initDatabase } = require('./config/db')
const bookingRoutes = require('./routes/bookingRoutes')
const contactRoutes = require('./routes/contactRoutes')
const newsletterRoutes = require('./routes/newsletterRoutes')

const app = express()
const PORT = process.env.PORT || 5000

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Health Check Route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'Luxe Estates API Server',
    database: 'MySQL (XAMPP)',
  })
})

// API Routes
app.use('/api/bookings', bookingRoutes)
app.use('/api/contact', contactRoutes)
app.use('/api/newsletter', newsletterRoutes)

// 404 Route Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found.`,
  })
})

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('[Server Error]:', err.stack)
  res.status(500).json({
    success: false,
    message: 'Internal server error occurred.',
    error: process.env.NODE_ENV === 'production' ? null : err.message,
  })
})

// Initialize DB and start server
async function startServer() {
  try {
    await initDatabase()
    app.listen(PORT, () => {
      console.log(`\n=================================================`)
      console.log(`  Luxe Estates Backend Server is running!`)
      console.log(`  URL: http://localhost:${PORT}`)
      console.log(`  Health Check: http://localhost:${PORT}/api/health`)
      console.log(`  MySQL DB: Connected via XAMPP`)
      console.log(`=================================================\n`)
    })
  } catch (error) {
    console.error('Failed to start server due to database error:', error.message)
    console.error('Please make sure MySQL is running in your XAMPP Control Panel.')
  }
}

startServer()

