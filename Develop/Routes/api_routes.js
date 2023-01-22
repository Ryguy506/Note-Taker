
const path = require('path');
const fs = require('fs');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../db/db.json'));
    }
    );
    app.post('/api/notes', (req, res) => {
        const newNote = req.body;
        const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json')));
        notes.push(newNote);
        fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes));
        res.json(newNote);
    }
    );

}