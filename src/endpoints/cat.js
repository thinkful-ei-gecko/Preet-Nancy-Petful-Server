const express = require('express')
const catRouter = express.Router()
// const adopted = require('../adopted')
const { cats } = require('../animal_data')
const {adoptedQueue} = require('../adopted')
const { Queue, display, isEmpty, peek } = require('../queue')


let catQueue = new Queue();

cats.forEach(cat => catQueue.enqueue(cat))

catRouter
    .route('/api/cat')
    .get((req, res, next) => {

        let firstCat = peek(catQueue)
        return res.status(200).json({
            cat: firstCat
        })
    })
    .delete((req, res, next) => {
        let adoptedCat = catQueue.dequeue()
        adoptedQueue.enqueue({adoptedCat})
        // console.log('adopted--------', adopted)
        return res.send({
            message: `Thank you for adopting ${adoptedCat.name}! We'll be contacting you soon!`
        })
    }) 
module.exports = catRouter