const express = require('express')
const { Queue, display, isEmpty, peek } = require('./queue')
const adoptedRouter = express.Router()

let adoptedQueue = new Queue()

adoptedRouter
    .route('/api/adopted')
    .get((req, res, next) => {
        //console.log(display(adoptedQueue))
        return res.status(200).json({
            message: 'adopted queue will send'
        })
    })
module.exports = {
    adoptedQueue: adoptedQueue,
    adoptedRouter: adoptedRouter
}