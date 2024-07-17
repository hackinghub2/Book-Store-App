import { response } from "express";
import Book from "../model/BookModel.js";

const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    res.status(200).json({ books });
  } catch (err) {
    res.status(404).json({ err });
  }
};

const addBooks = async (req, res, next) => {
  const { name, author, description, price, available, image } = req.body;
  try {
    const book = await Book.create({
      name,
      author,
      description,
      price,
      available,
      image,
    });
    res.status(201).json({ book });
  } catch (err) {
    res.status(404).json({ err });
  }
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const book = await Book.findById(id);
    res.status(200).json({ book });
  } catch (err) {
    res.status(404).json({ err });
  }
};

const deleteBooks = async (req, res, next) => {
  const id = req.params.id;
  try {
    const book = await Book.findByIdAndDelete(id);
    res.status(200).json({ book });
  } catch (err) {
    res.status(404).json({ err });
  }
};
const updateBooks = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;
  try {
    const book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image,
    });
    res.status(200).json({ book });
  } catch (err) {
    res.status(404).json({ err });
  }
};

export { getAllBooks, addBooks, getById, deleteBooks, updateBooks };
