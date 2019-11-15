const express = require('express')
const dogRouter = express.Router()
const {adoptedQueue} = require('../adopted')
const {adoptorQueue} = require('./adoptor')
const { dogs } = require('../animal_data')
const { Queue, display, isEmpty, peek } = require('../queue')


let dogQueue = new Queue();

dogs.forEach(dog => dogQueue.enqueue(dog))

dogRouter
    .route('/api/dog')
    //getting first dog
    .get((req, res, next) => {

        let firstDog = peek(dogQueue)
        return res.status(200).json({
            dog: firstDog
        })
    })


    //adopting a dog
    .delete((req, res, next) => {
        console.log('in dog.js this is the adoptor queue:',display(adoptorQueue))
        let adoptedDog = dogQueue.dequeue()
        adoptedQueue.enqueue({adoptedDog})
        return res.send({
            message: `Thank you for adopting ${adoptedDog.name}! We'll be contacting you soon!`
        })
    }) 
module.exports = dogRouter