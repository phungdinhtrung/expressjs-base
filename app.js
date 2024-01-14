require('dotenv').config()
const express = require('express')
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')
const moment = require('moment')
const fileUpload = require('express-fileupload');

const pathConfig = require('./config/path')
global.__base              = __dirname + '/';                                        
global.__path_config       = __base + pathConfig.folder_config;                      
global.__path_model        = __base + pathConfig.folder_model;                       
global.__path_middleware   = __base + pathConfig.folder_middleware;                  
global.__path_routes       = __base + pathConfig.folder_routes;                      
global.__path_public       = __base + pathConfig.folder_public;                      
global.__path_function     = __base + pathConfig.folder_function;                    
global.__path_database     = __base + pathConfig.folder_database;                    
global.__path_email        = __base + pathConfig.folder_email;                       
global.__path_upload       = __base + pathConfig.folder_uploads

// Global function
global.__function          = require(__path_function + '/global')
// require(__path_function + '/checkLate')

const app = express()
const port = process.env.PORT || 1111;

app.locals.moment = moment;

app.use(morgan('dev'))
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/',
	defCharset: 'utf8',
    defParamCharset: 'utf8'
}));

app.use('/', require(__path_routes + '/index'))

app.all('*', (req, res) => {
    res.status(404).json({ error: 'E_NOT_FOUND', message: `Không tìm thấy ${req.originalUrl}` })
})

app.use((err, req, res, next) => {
	console.error(err)
	
	if (err.status) {
		// Lỗi không phải do node-postgres
		return res.sendStatus(err.status)
	}

	let errObj = { error: null }

	switch (err.code) {
		case '23505':
			errObj.error = "E_DUPLICATE_RECORD"
			break

		case '23503':
			errObj.error = "E_FOREIGN_KEY_INVALID"
			break

		case '22P02':
			errObj.error = "E_INVALID_ARGUMENT"
			break
		
		case '42883':
			errObj.error = "E_INVALID_ARGUMENT"
			break

		default:
			errObj.error = "E_UNDEFINED_ERROR"
	}

	console.error(err)

	res.status(500).json(errObj)
})

app.listen(port, () => {
	console.log(`Máy chủ đang chạy trên cổng ${port}`)
})