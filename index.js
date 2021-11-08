const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const routes = require('./routes')

const app = express()
app.set('port', process.env.PORT || 3000)
const dbOptions = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    database: 'escuela'
};

////middlewares----------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())


// routes------------------
app.get('/', (req, res) => {
    res.send('WELCOME TO MY DATABASE')
})
app.use('/api', routes)

//////////////////SERVER RUNNING/////
app.listen(app.get('port'), () => {
    console.log('Server running on port', app.get('port'))
})