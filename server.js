require('dotenv').config();
const express = require('express');
const app = express();
const fruits = require('./models/fruits.js');
const veggies = require('./models/veggies.js');
const Fruit = require('./models/fruit.js');
const Veggie = require('./models/veggie.js');
const mongoose = require('mongoose');

// CONNECT WITH MONGOOSE
mongoose.connect(process.env.MONGO_URI_VEGGIES, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
});

// mongoose.connect(process.env.MONGO_URI_VEGGIES, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // useCreateIndex: true,
// });

// Connecting to mongoDB 
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoDB')
})

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
// Index FRUITS
app.get('/fruits', async function (req, res) {
    const foundFruits = await Fruit.find({})
        res.render('fruits/Index', {
            fruits: foundFruits,
        });
    });

// Index VEGGIES
app.get('/veggies', async function (req, res) {
    const foundVeggies = await Veggie.find({})
        res.render('veggies/Index', {
            veggies: foundVeggies,
        });
    });


// New FRUITS
app.get('/fruits/new', (req, res) =>{
    res.render('fruits/New')
})

// New VEGGIES
app.get('/veggies/new', (req, res) =>{
    res.render('veggies/New')
})

// CREATE = POST
app.post('/fruits', async (req, res) => {
    if(req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    // console.log("this is the fruits array", fruits)
   const createdFruit = await Fruit.create(req.body)
   console.log(createdFruit)
   res.redirect('./fruits')
});
   



// CREATE = POST
app.post('/veggies', async (req, res) => {
    if(req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
   // console.log("this is the veggies array", fruits)
   const createdVeggie = await Veggie.create(req.body)
   console.log(createdVeggie)
   res.redirect('./veggies')
});



// SHOW FRUITS
app.get('/fruits/:id', async (req, res) =>{
    const oneFruit = await Fruit.findById(req.params.id)
    res.render('fruits/Show', {
        fruit: oneFruit
    })
})

// SHOW VEGGIES
app.get('/veggies/:id', async (req, res) =>{
    const oneVeggie = await Veggie.findById(req.params.id)
    res.render('veggies/Show', {
        veggies: oneVeggie
    })
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})