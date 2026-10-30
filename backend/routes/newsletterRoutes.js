const express = require('express')
const router = express.Router()
const { pool } = require('../config/db')

// POST /api/newsletter - Subscribe an email
router.post('/', async (req, res) => {
  try {
    const { email } = req.body

    if (!email || !email.includes('@')) {
      return res.status(400).json({
        success: false,
        message: 'A valid email address is required.',
      })
    }

    // Check if already subscribed
    const [existing] = await pool.query('SELECT id FROM newsletter_subscribers WHERE email = ?', [email.trim().toLowerCase()])
    if (existing.length > 0) {
      return res.status(200).json({
        success: true,
        message: 'You are already subscribed to the Private Gazette.',
      })
    }

    await pool.query('INSERT INTO newsletter_subscribers (email) VALUES (?)', [email.trim().toLowerCase()])

    return res.status(201).json({
      success: true,
      message: 'Successfully subscribed to the Luxe Estates Private Gazette.',
    })
  } catch (error) {
    console.error('Error subscribing email:', error)
    return res.status(500).json({
      success: false,
      message: 'Failed to subscribe. Please try again.',
      error: error.message,
    })
  }
})

// GET /api/newsletter - Get subscribers list
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM newsletter_subscribers ORDER BY subscribed_at DESC')
    return res.json({
      success: true,
      count: rows.length,
      data: rows,
    })
  } catch (error) {
    console.error('Error fetching subscribers:', error)
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve subscribers.',
      error: error.message,
    })
  }
})

module.exports = router

