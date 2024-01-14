require('dotenv').config()
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');

module.exports = {
	verifyUser: (req, res, next) => {
       try {

			var token 			= req.headers.authorization.split(' ')[1]
			var secret 			= process.env.SECRET;
			var result_verify 	= jwt.verify(token, secret)

			if(result_verify){
				req.user_id = result_verify.user_id
				next()
			} 

	   } catch (error) {
			next(error)
			return res.status(StatusCodes.UNAUTHORIZED).json({ success: false, message: 'Error: Unauthorized!' })
	   }
    },
}