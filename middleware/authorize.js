require('dotenv').config()
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
			// console.error('error:=====', error);
			return res.status(401).json({ success: false, message: 'Error: Unauthorize!' })
	   }
    },
}