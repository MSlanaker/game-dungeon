const router = require('express').Router();
const externalRoute = require('./apiRoutes');


router.use('/', externalRoute);






module.exports = router;