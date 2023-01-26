
const path = require('path');
const fs = require('fs');
const router = require('express').Router();

// returns all saved notes as JSON.
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
});

// receives a new note to save on the request body and adds it to the db.json file
router.post('/notes', (req, res) => {
            const newNote = req.body;
            const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json')));
            newNote.id = notes.length.toString();
            notes.push(newNote);
            fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes));
            res.json(newNote);
            console.log(newNote);
        }
        );

// receives a query parameter containing the id of a note to delete.
router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json')));
    const newNotes = notes.filter(note => note.id !== id);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(newNotes));
    res.json(newNotes);
});

module.exports = router;

