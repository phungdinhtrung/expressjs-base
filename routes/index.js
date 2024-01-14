const express = require('express');
const router = express.Router();
const { StatusCodes } = require('http-status-codes');
const { verifyUser } = require(__path_middleware + '/authorize')
const asyncWrapper = require(__path_middleware + '/async-wrapper')


router.get('/', asyncWrapper((req, res, next) => {
    res.status(StatusCodes.OK)
       .json({ success: true, message: 'Welcome to API!' })
}));

module.exports = router