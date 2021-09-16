const Note = require("../models/noteModel");
const asyncHandler = require("express-async-handler");

const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find(req.user._id);
  res.json(notes);
});

const createNote = asyncHandler(async (req, res) => {
  const notes = await Note.find();
  const { title, content, category } = req.body;
  if (!title || !content || !category) {
    throw new Error("Please fill all the fields");
  } else {
    const note = new Note({
      user: req.user._id,
      title,
      content,
      category,
      sharedUserId: null,
    });
    const createdNote = await note.save();
    res.status(201).json({ createdNote });
  }
});

const getNoteById = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (note) {
    res.json(note);
  } else {
    res.status(400).json({ message: "Not not found" });
  }
});

const updateNote = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;
  const note = await Note.findById(req.params.id);
  if (note.user.toString() !== req.user._id.toString()) {
    throw new Error("You cannot permorm this action");
  }
  if (note) {
    note.title = title;
    note.content = content;
    note.category = category;

    const updatedNote = await note.save();
    res.json(updatedNote);
  } else {
    throw new Error("Note not found");
  }
});

const deleteNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (note.user.toString() !== req.user._id.toString()) {
    throw new Error("You cannot permorm this action");
  }
  if (note) {
    await note.remove();
    res.json({ msg: "Note removed" });
  } else {
    throw new Error("Note not found");
  }
});

const shareNote = asyncHandler(async (req, res) => {
  const { noteId, userIds } = req.body;
  const note = await Note.findById(noteId);
  if (note.user.toString() !== req.user._id.toString()) {
    throw new Error("You cannot permorm this action");
  }

  let users = userIds.map((user) => {
    return {
      id: user,
    };
  });

  if (note) {
    note.sharedUserId = userIds;

    const sharedNote = await note.save();
    res.json(sharedNote);
  } else {
    throw new Error("Note not found");
  }
});

module.exports = {
  getNotes,
  createNote,
  getNoteById,
  updateNote,
  deleteNote,
  shareNote,
};
