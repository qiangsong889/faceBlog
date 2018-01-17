const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const routes = require('./routes')
const db = require('./db/models/sync')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(path.resolve(__dirname, '../client/public')))
app.use('/api/', routes);

const PORT = 3000;

app.listen(PORT, function(){
    console.log('server now is listening on PORT', PORT)
})