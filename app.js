require('dotenv').config()
const express = require('express')
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')
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

const app = express()
const port = process.env.PORT || 5000;

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
app.all('*', require(__path_middleware + '/not-found'))

app.use((err, req, res, next) => {
	console.error(err)
	res.status(500).json(err)
})

app.listen(port, () => {
	console.log(`Máy chủ đang chạy trên cổng ${port}`)
})