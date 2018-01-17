const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const routes = require('./routes')
const db = require('./db/models/sync')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.statc(path.resolve(__dirname, '../client/public')))
app.use('/api/', routes);

app.listen(3000, function(){
    console.log('server now is listening on PORT 3000')
})