const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended:false}));

app.get('/', (req,res) => {
    res.send('<h1> Hello Joyce! </h1>');
})

let PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});