const express = require('express')
const catRouter = express.Router()
// const adopted = require('../adopted')
const { cats } = require('../animal_data')
const {adoptedQueue} = require('../adopted')
const { Queue, display, isEmpty, peek } = require('../queue')
const jsonParser = express.json()


let catQueue = new Queue();

cats.forEach(cat => catQueue.enqueue(cat))

// function autoAdopt() {
//     let adoptedCat = catQueue.dequeue()
//     catQueue.enqueue({adoptedCat})
//     console.log('in autoadopt--------',display(catQueue))
// }

catRouter
    .route('/api/cat')
    .get((req, res, next) => {
        let firstCat = peek(catQueue)
        if(firstCat.name !== 'Missy') {
            //console.log('its not misssy')
        }

        
        // else clearTimeout(autoAdopt)
        // let firstCat = peek(catQueue)
        console.log('in cat',firstCat.name)
        return res.status(200).json({
            cat: firstCat
        })
    })
    .delete((req, res, next) => {
        // const { name } = req.body
        // console.log(name)

        let adoptedCat = catQueue.dequeue()
        catQueue.enqueue({adoptedCat})
        console.log('cat queue--------', display(catQueue))
        return res.send({
            message: `Thank you for adopting ${adoptedCat.name}! We'll be contacting you soon!`
        })
    }) 
module.exports = catRouter