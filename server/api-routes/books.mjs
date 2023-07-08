import express from "express";
import Book from "../models/books.mjs";

const router = express.Router();

// api/books
router.get('/', async function (req, res) {
  const books = await Book.find();
  res.json(books);
})

export default router;