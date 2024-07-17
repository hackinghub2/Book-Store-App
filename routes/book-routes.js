import express from "express";
const router = express.Router();
import { getAllBooks, addBooks, deleteBooks, updateBooks, getById } from "../controllers/books-controllers.js";

router.get("/", getAllBooks);
router.post("/", addBooks);
router.get("/:id",getById);
router.put("/:id", updateBooks);
router.delete("/:id", deleteBooks);

export default router;
























// router.get("/", async (req, res, next) => {
//     let books;
//     try {
//         books = await Book.find();
//     }catch (err) {
//         console.log(err);
//     }
    
//     if(!books){
//         res.status(404).json({message:"Books not found"});
//     }
//     return res.status(200).json({books});
// })