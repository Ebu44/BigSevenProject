const Book = require("../models/Books");

const getAllBooks = (req, res, next) => {
  const promise = Book.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
};

const getOneBook = (req, res, next) => {
  const promise = Book.findById(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
};

const newBook = (req, res) => {
  const promise = Book.create(req.body);
  res.json(req.body);
};

const updateBook = (req, res) => {
  const { title, author } = req.body;
  const promise = Book.findByIdAndUpdate(
    req.params.id,
    { title, author },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    }
  );
};

const deleteBook = (req, res) => {
  const promise = Book.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Başarıyla Silindi...");
    }
  });
};

module.exports = {
  getAllBooks,
  getOneBook,
  newBook,
  updateBook,
  deleteBook,
};
