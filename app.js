const express = require('express');
const morgan = require('morgan');
const { db, Page, User } = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/users');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended:false}));
app.get('/', (req,res) => {
    res.send('<h1> Hello Joyce! </h1>');
})
app.use('/wiki', wikiRouter);

let PORT = 3000;

db.authenticate()
    .then(() => {
        console.log('connected to the database');
    });

const init = async() => {
    await db.sync({force: true});
    app.listen(PORT, () => {
        console.log(`Listening on ${PORT}`);
    });
}

init();

// app.listen(PORT, () => {
//     console.log(`Listening on ${PORT}`);
//     db.sync({force: true})
//     .then(() => {
//         console.log('connected to the database');
//     });
// });
