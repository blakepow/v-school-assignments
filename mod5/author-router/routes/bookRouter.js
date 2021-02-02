const express = require('express')
const bookRouter = express.Router()
const Book = require('../models/book.js')

//Get All
bookRouter.get('/', (req, res, next) => {
    Book.find((err, books) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})

//Get One
bookRouter.get('/:bookId', (req, res, next) => {
    Book.findById({ _id: req.params.bookId}, (err, foundBook) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundBook)
    })
})

//Get by Author
//NEEDS ATTENTION, NO WORKIE FOR SOME REASON
bookRouter.get("/:authorID", (req, res, next) => {
    Book.find({ author: req.params.authorId }, (err, books) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})

//Post One
bookRouter.post('/:authorID', (req, res, next) => {
    req.body.author = req.params.authorID
    const newBook = new Book(req.body)
    newBook.save((err, savedBook) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBook)
    })
})

// //Delete One
// bookRouter.delete('/:bookId', (req, res, next) => {
//     Book.findOneAndDelete({ _id: req.params.bookId}, (err, deletedBook) => {
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(`Book named ${deletedBook.name} has been deleted`)
//     })
// })

// //Update One
// bookRouter.put('/:bookId', (req, res, next) => {
//     Book.findOneAndUpdate(
//         { _id: req.params.bookId }, //find this specific one to update
//         req.body, //update the object with this information
//         { new: true }, //send back the updated version
//         (err, updatedBook) => {
//             if(err) {
//                 res.status(500)
//                 return next(err)
//             }
//             return res.status(201).send(updatedBook)
//         }
//     )
// })


//like a book
bookRouter.put('/like/:bookID', (req, res, next) => {
    Book.findOneAndUpdate(
        { _id: req.params.bookID },
        { $inc: { likes: 1 }},
        {new: true },
        (err, updatedBook) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBook)
        }
    )
})

//Find books by like range
bookRouter.get("/search/bylikes", (req, res, next) => {
    Book.where('likes').gte(5).exec((err, books) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})

module.exports = bookRouter