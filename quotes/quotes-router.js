const Quotes = require('../quotes/quotes-model');
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    Quotes.getAll()
        .then(quote => {
            res.status(200).json(quotes)
        })
        .catch(err => {
            res.status(500).json({message: 'server error'})
        })
})

router.post('/', (req, res) => {
    Quotes.insert(req.body)
    .then(quote => {
        res.status(201).json(quote)
    })
    .catch(err => {
        res.status(500).json({message: 'Server error on POST'})
    })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    Quotes.remove(id)
        .then(dleetedd => {
            if(deleted) {
                res.status(200).json({message: `Quote + ${id} was deleted`, deleted})
            } else {
                res.status(400).json({message: 'The post with the specified ID does not exist'})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'delete server error'})
        })
    })

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;
    Quotes.update(changes, id)
    .then(updated => {
        if(updated) {
        res.status(200).end().json({message: 'Successfully updated'})
    } else { 
        res.status(404).json({message: 'Quote with the specified id does not exist'})
    }
    })
    .catch(err => {
        res.status(500).json({message: 'Quote info could not be modified'})
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Quotes.findById(id)
    .then(quote => {
        res.status(200).json(quote)
    })
    .catch(err => {
        res.status(500).json({message: 'Success'})
    })
})
modules.export = router;

