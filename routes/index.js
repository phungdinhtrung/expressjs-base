const express = require('express');
const router = express.Router();
const { verifyUser } = require(__path_middleware + '/authorize')


router.get('/', (req, res, next) => {
    res.status(200).json({ success: true, message: 'Welcome to API!' })
})

module.exports = router