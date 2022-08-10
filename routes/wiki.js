const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.send('got to GET /wiki');
});

router.post('/', (req, res, next) => {
    res.send('got to POST /wiki');
});

router.get('/add', (req, res, next) => {
    res.send('got to GET /wiki/add');
});