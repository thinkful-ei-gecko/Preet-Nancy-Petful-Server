const express = require('express')
const adopteesRouter = express.Router()
const { adoptees } = require('../animal_data')
const { Queue, display, isEmpty, peek } = require('../queue')
const jsonParser = express.json()

let adopteeQueue = new Queue() 

adoptees.forEach(adoptee => adopteeQueue.enqueue(adoptee))

adopteesRouter
    .route('/api/adoptee')
    .get((req, res, next) => {
        let adopteesLine = display(adopteeQueue)
        return res.status(200).json({
            adopteesLine: adopteesLine
        })
    })
    .post(jsonParser, (req, res, next) => {
        const { name } = req.body
        adopteeQueue.enqueue(name)
        console.log(display(adopteeQueue))
        return res.status(200).json({
            message: `you've been queued`
        })
        
    })

module.exports = adopteesRouter