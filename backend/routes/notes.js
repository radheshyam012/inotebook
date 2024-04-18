const express = require("express");
const Fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

//ROUTE 1:Get all the notes Get  /api/auth/fetchallnotes. login required
router.get("/fetchallnotes", Fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

//ROUTE 2:Add  notes Post  /api/auth/addnote. login required
router.post(
  "/addnote",
  Fetchuser,
  [
    body("title", "Enter a valid name").isLength({ min: 3 }),
    body("description", "Password must be atleast 6 chracters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const { title, description, tag } = req.body;
    try {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        res.status(400).json({ errors: error.array() });
      }

      const note = new Notes({ title, description, tag, user: req.user.id });
      const saveNotes = await note.save();
      res.json(saveNotes);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

//ROUTE 3:Update the  notes Put  /api/auth/updatenote. login required

router.put("/updatenote/:id", Fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
    const newNotes = {};
    if (title) {
      newNotes.title = title;
    }
    if (description) {
      newNotes.description = description;
    }
    if (tag) {
      newNotes.tag = tag;
    }

    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNotes },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

//ROUTE 4:Delete the  notes Delete  /api/auth/deletenote. login required

router.delete("/deletenote/:id", Fetchuser, async (req, res) => {
  try {
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
