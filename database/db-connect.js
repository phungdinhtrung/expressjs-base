// Tự động đọc các biến môi trường .env vào và thiết lập kết nối với database khi khởi tạo new Pool()
require('dotenv').config()
const { Pool } = require('pg')

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
})

module.exports = {
    query: (text, params) => pool.query(text, params)
};