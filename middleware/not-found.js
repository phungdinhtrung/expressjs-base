const { StatusCodes } = require('http-status-codes')

const notFound = (req, res) => {
    res.status(StatusCodes.NOT_FOUND).json({ error: 'E_NOT_FOUND', message: `Không tồn tại đường dẫn truy cập đến url ${req.originalUrl}` })
}

module.exports = notFound