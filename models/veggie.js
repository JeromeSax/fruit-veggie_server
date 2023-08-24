const mongoose = require('mongoose')

const veggieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    readyToEat: Boolean
})

const Veggie = mongoose.model('veggie', veggieSchema)

module.exports = Veggie;