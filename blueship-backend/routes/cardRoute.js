const express = require('express')

const router = express.Router()

router.get('/card/:id', (req, res)=> { 
    res.send(req.query.qty)
})

module.exports = router