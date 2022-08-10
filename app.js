const express = require('express');
const morgan = require('morgan');
const { db } = require('./models');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended:false}));
app.get('/', (req,res) => {
    res.send('<h1> Hello Joyce! </h1>');
})

let PORT = 3000;

db.authenticate()
    .then(() => {
        console.log('connected to the database');
    });

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
    db.sync({force: true})
    .then(() => {
        console.log('connected to the database');
    });
});
