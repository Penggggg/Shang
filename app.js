import express from 'express';
import path from 'path';
const port = 3000;
const app = express();

app.use(express.static(__dirname, + 'static/build'));

app.get( "*" , (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
console.log(`app is listening at localhost 3000`);
