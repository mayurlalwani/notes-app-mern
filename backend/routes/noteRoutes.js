const express = require("express");
const {
  getNotes,
  createNote,
  getNoteById,
  updateNote,
  deleteNote,
  shareNote,
  getSharedNotes,
} = require("../controllers/noteController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getNotes);
router.route("/getSharedNotes").get(protect, getSharedNotes);
router.route("/create").post(protect, createNote);
router
  .route("/:id")
  .get(getNoteById)
  .delete(protect, deleteNote)
  .put(protect, updateNote);
router.route("/share").post(protect, shareNote);
module.exports = router;
