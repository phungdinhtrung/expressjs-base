const { StatusCodes } = require('http-status-codes')
const { CustomError } = require('./error-class-custom')

const errorHandler = (err, req, res, next) => {
    console.error(err)
    if(err instanceof CustomError) {
        return res.status(err.statusCode).json(err.message)
    }
	res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err.message)
}

module.exports = errorHandler