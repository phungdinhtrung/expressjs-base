const express = require('express');
const router = express.Router();
const { StatusCodes } = require('http-status-codes');
const { verifyUser } = require(__path_middleware + '/authorize')
const { createError } = require(__path_middleware + '/error-class-custom')
const asyncWrapper = require(__path_middleware + '/async-wrapper')



router.get('/', asyncWrapper((req, res, next) => {
    res.status(StatusCodes.OK)
    .json({ success: true, message: 'Welcome to API!' })
}));

router.post('/login', asyncWrapper((req, res, next) => {
    if(req.body.username !== 'admin') {
        return next(createError(StatusCodes.BAD_REQUEST, 'Role of user can not create new a user!'))
    }

    if(req.body.username === 'admin') {
        res.status(StatusCodes.OK)
        .json({ success: true, message: 'Created user successful!' })
    }
}))

module.exports = router