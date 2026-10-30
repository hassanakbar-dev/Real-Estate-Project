const express = require('express')
const router = express.Router()
const { pool } = require('../config/db')

// POST /api/bookings - Create a private viewing booking
router.post('/', async (req, res) => {
  try {
    const {
      residenceName,
      date,
      time,
      name,
      phone,
      email,
      notes,
    } = req.body

    // Validation
    if (!name || !email || !phone || !date || !time) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, phone, date, and time slot are required.',
      })
    }

    const query = `
      INSERT INTO bookings 
        (residence_name, booking_date, time_slot, client_name, phone, email, notes) 
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `
    const values = [
      residenceName || 'General Viewing',
      date,
      time,
      name.trim(),
      phone.trim(),
      email.trim(),
      notes ? notes.trim() : null,
    ]

    const [result] = await pool.query(query, values)

    return res.status(201).json({
      success: true,
      message: 'Viewing request received successfully.',
      bookingId: result.insertId,
    })
  } catch (error) {
    console.error('Error creating booking:', error)
    return res.status(500).json({
      success: false,
      message: 'Failed to create booking. Please try again later.',
      error: error.message,
    })
  }
})

// GET /api/bookings - Get all bookings
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM bookings ORDER BY created_at DESC')
    return res.json({
      success: true,
      count: rows.length,
      data: rows,
    })
  } catch (error) {
    console.error('Error fetching bookings:', error)
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve bookings.',
      error: error.message,
    })
  }
})

module.exports = router

