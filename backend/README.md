# Luxe Estates — Backend API & Database

Node.js + Express.js backend with MySQL (XAMPP) integration for the Luxe Estates Real Estate Platform.

## 🛠 Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MySQL (via XAMPP on port `3306`)
- **Driver**: `mysql2` (Connection Pool + Promises)
- **Utilities**: `dotenv`, `cors`, `nodemon`

---

## ⚡ Quick Start

### 1. Start MySQL in XAMPP
Open your **XAMPP Control Panel** and click **Start** next to **MySQL**.

### 2. Start Backend Server
Navigate to the `backend` folder and run:
```bash
npm run dev
# or: npm start
```

*Note: The server will automatically connect to your MySQL instance, create the database (`luxe_estates_db`), and generate all necessary tables if they do not already exist.*

---

## 🗄️ Database Schema (`luxe_estates_db`)

### 1. `bookings` Table (Private Residence Viewings)
- `id` (INT, Primary Key, Auto Increment)
- `residence_name` (VARCHAR)
- `booking_date` (VARCHAR)
- `time_slot` (VARCHAR)
- `client_name` (VARCHAR)
- `phone` (VARCHAR)
- `email` (VARCHAR)
- `notes` (TEXT)
- `status` (`Pending`, `Confirmed`, `Cancelled`)
- `created_at` (TIMESTAMP)

### 2. `inquiries` Table (Contact & Advisory Mandates)
- `id` (INT, Primary Key, Auto Increment)
- `name` (VARCHAR)
- `email` (VARCHAR)
- `phone` (VARCHAR)
- `inquiry_type` (VARCHAR)
- `channel` (VARCHAR)
- `time_slot` (VARCHAR)
- `budget` (VARCHAR)
- `location` (VARCHAR)
- `notes` (TEXT)
- `status` (`New`, `In Progress`, `Closed`)
- `created_at` (TIMESTAMP)

### 3. `newsletter_subscribers` Table
- `id` (INT, Primary Key, Auto Increment)
- `email` (VARCHAR, UNIQUE)
- `subscribed_at` (TIMESTAMP)

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Health check & service status |
| `POST` | `/api/bookings` | Submit a private viewing request |
| `GET` | `/api/bookings` | Retrieve all viewing bookings |
| `POST` | `/api/contact` | Submit client inquiry / representation mandate |
| `GET` | `/api/contact` | Retrieve all inquiries |
| `POST` | `/api/newsletter` | Subscribe email to the Private Gazette |
| `GET` | `/api/newsletter` | Retrieve all subscribers |

