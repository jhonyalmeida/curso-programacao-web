const express = require('express')
const app = express();

app.get('/', (req, res, next) => {
    res.json({ name: "Jhony" })
});

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});