const express = require('express')
const adoptorsRouter = express.Router()
const { adoptors } = require('../animal_data')
const { Queue, display, isEmpty, peek } = require('../queue')
const jsonParser = express.json()

let adoptorQueue = new Queue() 

adoptors.forEach(adoptor => adoptorQueue.enqueue(adoptor))

adoptorsRouter
    .route('/api/adoptor')
    //getting ALL adopters 
    .get((req, res, next) => {
        let adoptorsLine = display(adoptorQueue)
        return res.status(200).json({
            adoptorsLine: adoptorsLine
        })
    })

    //placing adopter in queue
    .post(jsonParser, (req, res, next) => {
        const { name } = req.body
        adoptorQueue.enqueue(name)
        console.log(display(adoptorQueue))
        return res.status(200).json({
            message: `you've been queued`
        })
    })

    //dequeueing adopter after adopting a dog or cat
    .delete((req, res, next) => {
        let adopterDequeue = adoptorQueue.dequeue()
        adopterDequeue.enqueue(adopterDequeue)
        console.log(display(adoptorQueue))
        return res.send({
            message: `${adopterDequeue} has been dequeued`
        })
    })

module.exports = {
    adoptorsRouter: adoptorsRouter,
    adoptorQueue: adoptorQueue

}