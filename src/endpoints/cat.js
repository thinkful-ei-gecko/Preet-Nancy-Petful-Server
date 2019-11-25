const express = require('express')
const catRouter = express.Router()
const adopted = require('../adopted')
const { cats } = require('../animal_data')
const {adoptedQueue} = require('../adopted')
const {adoptorQueue} = require('./adoptor')

const { Queue, display, isEmpty, peek } = require('../queue')
const jsonParser = express.json()


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
    .delete(jsonParser, (req, res, next) => {


        let adoptedCat = catQueue.dequeue()
        catQueue.enqueue(adoptedCat)
        adoptedQueue.enqueue(adoptedCat)

        let adopterDequeue = adoptorQueue.dequeue()

        if(adopterDequeue !== req.body.name) {
            adoptorQueue.enqueue(adopterDequeue)
        }
        
        return res.send({
            adoptedList: display(adoptedQueue)
        })
    }) 
module.exports = catRouter