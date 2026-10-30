const express = require('express')
const router = express.Router()
const { pool } = require('../config/db')

// POST /api/contact - Submit client inquiry / representation mandate
router.post('/', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      inquiryType,
      channel,
      timeSlot,
      budget,
      location,
      notes,
    } = req.body

    // Validation
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: 'Name and email are required fields.',
      })
    }

    const query = `
      INSERT INTO inquiries 
        (name, email, phone, inquiry_type, channel, time_slot, budget, location, notes)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `
    const values = [
      name.trim(),
      email.trim(),
      phone ? phone.trim() : null,
      inquiryType || 'Private Viewing',
      channel || 'In-Person at Sector F-7 Flagship Salon',
      timeSlot || 'Morning (10:00 – 12:30)',
      budget || null,
      location || null,
      notes ? notes.trim() : null,
    ]

    const [result] = await pool.query(query, values)

    return res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully. Our private client advisors will contact you shortly.',
      inquiryId: result.insertId,
    })
  } catch (error) {
    console.error('Error creating inquiry:', error)
    return res.status(500).json({
      success: false,
      message: 'Failed to submit inquiry. Please try again later.',
      error: error.message,
    })
  }
})

// GET /api/contact - List all inquiries
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM inquiries ORDER BY created_at DESC')
    return res.json({
      success: true,
      count: rows.length,
      data: rows,
    })
  } catch (error) {
    console.error('Error fetching inquiries:', error)
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve inquiries.',
      error: error.message,
    })
  }
})

module.exports = router

