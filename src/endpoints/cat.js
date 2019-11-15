const express = require('express')
const catRouter = express.Router()
const cats = require('../animal_data')


catRouter
    .route('/api/cat')
    .get((req, res, next) => {
        return res.status(200).json({
            cat: cats
        })
    })
module.exports = catRouter