const express = require('express');
const router = express.Router();

router.use('/', require('./user'));
router.use('/', require('./person'));
router.use('/', require('./role'));
router.use('/', require('./property'));
router.use('/', require('./unit'));
router.use('/', require('./block'));
router.use('/', require('./address'));
router.use('/', require('./visitor'));
router.use('/', require('./vehicle'));
router.use('/', require('./activity'));
router.use('/', require('./activityComment'));
router.use('/', require('./unitMember'));
router.use('/', require('./image'));
router.use('/', require('./image1'));
module.exports = router;
