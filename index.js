const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const userRoute = require('./routes/userRoutes')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended:false }))
app.set('view engine', 'ejs')

app.set('views', path.resolve(__dirname + '/views'))
userRoute(app)

app.get('/', (req, res)=>{
    res.render('home', {title: 'Home'})
})
app.get('/about', (req, res)=> {
    res.render('about', {title: 'About'})
})
app.get('/contact', (req, res) => {
    res.render('contact', {title: 'Contact'})
})

app.listen(process.env.PORT || port, ()=>{
    console.log(`api rodando na porta ${port}`)
})