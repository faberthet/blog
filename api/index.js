const express = require('express');
const app = express();

app.listen(3000, () => console.log("serveur running on port sdsfdfs"));

app.get('/', (req,res) => {
    res.send("eee");
});