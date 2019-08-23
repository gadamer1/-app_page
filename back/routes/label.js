const express = require('express');
const router = express.Router();

const labelList = [{
    lat: 59.955413,
    lng: 30.337844,
    name: 'T1',
}, {
    lat: 59.965413,
    lng: 30.337944,
    name: 'T2',
}, {
    lat: 59.975413,
    lng: 30.338144,
    name: 'T3',
}, {
    lat: 59.985413,
    lng: 30.338244,
    name: 'T4'
}]


router.get('/list', (req, res, next) => {
    res.json(labelList);
});

router.post('/list', (req, res, next) => {
    labelList.push(req.body.label);
    res.json(labelList);
});


module.exports = router;