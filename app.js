const express = require('express')
const mongoose = require('mongoose')
const path = require('path');
const exphbs = require('express-handlebars');
const url = 'mongodb://localhost/problem'

const app = express()

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true,useCreateIndex :true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const Router = require('./routes/model')
app.use('/',Router)
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');
app.listen(3020, () => {
    console.log('Server started at port 3020')
})