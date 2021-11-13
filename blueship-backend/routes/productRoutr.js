const express = require('express')
const router = express.Router()
const products = require('../productsdata') 

router.get('/api/products', (req, res)=> { 
    res.send(products)
})

router.get('/api/products/:id', (req, res)=> { 
    const id = req.params.id
    const product = products.find(p => p._id === id)
    if(product) { 
        res.send(product)
    }
    else{
        res.status(404).send({message : 'product Not Found'})
    }
})

module.exports = router