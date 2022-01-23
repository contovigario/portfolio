const express = require('express');
const router = express.Router();

router.get('/tweet', (req, res) => {
    const str = [{
        "name": "SVI",
        "msg": "I hate tweeter",
        "username": "lyn_morte"
    }];
    res.end(JSON.stringify(str));
});

router.post('/newtweet', (req, res) => {
    res.end('NIM');
});

module.exports = router;