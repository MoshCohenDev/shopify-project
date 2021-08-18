'use strict';

const router = require('express-promise-router')({
    mergeParams : true
});

router.use('/items', require('./items'));

module.exports = router;