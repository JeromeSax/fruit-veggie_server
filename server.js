const express = require('express');
const app = express();
const fruits = require('./models/fruits.js')
const veggies = require('./models/veggies.js')


// setting up engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// MIDDLEWARE
app.use((req, res, next) => {
    console.log('I run for all routes!')
    next();
})

// this allows the body of a post request
app.use(express.urlencoded({extended: false}))


// ROUTES
// Index
app.get('/fruits', (req, res) => {
    res.render('fruits/Index', {
        fruits: fruits
    })
});

// New
app.get('/fruits/new', (req, res) =>{
    res.render('fruits/New')
})

// New
app.get('/veggies/new', (req, res) =>{
    res.render('veggies/New')
})

// CREATE = POST
app.post('/fruits', (req, res) => {
    console.log("this is the created fruit", req.body)
    if(req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    fruits.push(req.body)
    console.log("this is the fruits array", fruits)
    res.redirect('/fruits')
})

// Index
app.get('/veggies', (req, res) => {
    res.render('veggies/Index', {
        veggies: veggies
    })
})

// CREATE = POST
app.post('/veggies', (req, res) => {
    console.log("this is the created veggie", req.body)
    if(req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    fruits.push(req.body)
    console.log("this is the veggies array", fruits)
    res.redirect('/veggies')
})



// SHOW FRUITS
app.get('/fruits/:index', (req, res) =>{
    res.render('fruits/Show', { //second param must be an object
        fruit: fruits[req.params.index] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    })
})

// SHOW VEGGIES
app.get('/veggies/:index', (req, res) => {
    res.render('veggies/Show', {
        veggies: veggies[req.params.index]
    })
})

app.listen(3000, () => {
    console.log('listening');
})