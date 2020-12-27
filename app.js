// Include express from node_modules and define server related variables
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const userverify = require('./login')
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

// setting the route and corresponding response
app.get('/', (req, res) => {
    res.render('index')
})
app.post('/', (req, res) => {
    // console.log('req.query', req.query)
    const { email, password } = req.body
    const errors = "帳號密碼錯誤"
    const loginName = userverify(email, password).loginUser.firstName

    // console.log(email)
    console.log(userverify(email, password).loginUser)
    if (userverify(email, password).verify) {
        // console.log(loginName)
        res.render('welcome', { name: loginName })

    } else {
        res.render('index', { email, errors })

    }



})


// Listen the server when it started
app.listen(port, () => {
    console.log(`Express is running on http://localhost:${port}`)
})