const express = require('express')
const dogRouter = express.Router()
const adopted = require('../adopted')
const { dogs } = require('../animal_data')
const { Queue, display, isEmpty, peek } = require('../queue')


let dogQueue = new Queue();

dogs.forEach(dog => dogQueue.enqueue(dog))

dogRouter
    .route('/api/dog')
    .get((req, res, next) => {

        let firstDog = peek(dogQueue)
        return res.status(200).json({
            dog: firstDog
        })
    })
    .delete((req, res, next) => {
        let adoptedDog = dogQueue.dequeue()
        adopted.push(adoptedDog)
        // console.log('adopted--------', adopted)
        return res.send({
            message: `Thank you for adopting ${adoptedDog.name}! We'll be contacting you soon!`
        })
    }) 
module.exports = dogRouter