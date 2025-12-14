const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// HOME ROUTE
app.get('/', function (req, res) {
    fs.readdir('./files', function (err, files) {
        res.render("index", { files: files });
    });
});

// READ SINGLE FILE
app.get('/file/:filename', function (req, res) {
    fs.readFile(`./files/${req.params.filename}`, "utf8", function (err, filedata) {
        res.render('show', { filename: req.params.filename,filedata: filedata });
    });
});

// CREATE NOTE
app.post('/create', function (req, res) {
    fs.writeFile(
        `./files/${req.body.title.split(' ').join('')}.txt`,
        req.body.details,
        function (err) {
            res.redirect('/');
        }
    );
});
app.post('/delete/:filename', function(req, res) {
    const filePath = path.join(__dirname, 'files', req.params.filename);

    fs.unlink(filePath, function(err) {
        if(err) {
            console.error("Error deleting file:", err);
        }
        res.redirect('/');
    });
});
app.post('/edit/:filename', function(req, res) {
    res.render('edit',{filename:req.params.filename});
});
// app.post('/edit', function(req, res) {

//     fs.rename(`./files/${req.body.previous}`,`.files/${req.body.new}`,function(err){
//         res.redirect("/");
//     })
//     // console.log(req.body);
// });

app.post('/edit', function (req, res) {
    const oldPath = path.join(__dirname, 'files', req.body.oldFilename);

    const newFilename =
        req.body.newTitle.split(' ').join('') + '.txt';

    const newPath = path.join(__dirname, 'files', newFilename);

    fs.rename(oldPath, newPath, function (err) {
        if (err) {
            console.error("Rename failed:", err);
        }
        res.redirect('/');
    });
});


// START SERVER
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
