const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({data:'aaaaa'})
})

app.listen(1000, () => {
    console.log('Running...')
})