const { createError } = require(__path_middleware + '/error-class-custom')
const { StatusCodes } = require('http-status-codes')
const asyncWrapper    = require(__path_middleware + '/async-wrapper')

global.createError  = createError
global.StatusCodes  = StatusCodes
global.asyncWrapper = asyncWrapper