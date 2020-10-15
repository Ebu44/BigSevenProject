const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId
    },
    title: {
        type: String,
        require:[true,"Please provide a Book title"]
    },
    author: {
        type: String,
    },
    path: {
        type: String,
        require:true
    }
})

module.exports = mongoose.model("bookSchema",bookSchema)