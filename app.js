require('dotenv').config()
const express = require('express')
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')
const fileUpload = require('express-fileupload');

// Global
global.__base = __dirname; 
require(__base + '/config/global-path')
require(__path_function + '/global-function')
require(__path_config + '/global-config')

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
app.use(require(__path_middleware + '/error-handler'))

require('./design-partterns/mixin-pattern')



app.listen(port, () => {
	console.log(`Máy chủ đang chạy trên cổng ${port}`)
})