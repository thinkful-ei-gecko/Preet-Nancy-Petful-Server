const express = require('express')
const dogRouter = express.Router()
const {adoptedQueue} = require('../adopted')
const {adoptorQueue} = require('./adoptor')
const { dogs } = require('../animal_data')
const { Queue, display, isEmpty, peek } = require('../queue')
const jsonParser = express.json()


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
    .delete(jsonParser, (req, res, next) => {

        let adoptedDog = dogQueue.dequeue()
        dogQueue.enqueue(adoptedDog)
        adoptedQueue.enqueue(adoptedDog)

        let adopterDequeue = adoptorQueue.dequeue()
        // console.log('IN DELETE DOG', adopterDequeue, req.body.name)
        
        if(adopterDequeue !== req.body.name) {
            adoptorQueue.enqueue(adopterDequeue)
        }
       
        return res.send({
            adoptedList: display(adoptedQueue)
        })
    }) 
module.exports = dogRouter