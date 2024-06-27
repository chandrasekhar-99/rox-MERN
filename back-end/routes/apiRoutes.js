const router = require('express').Router();
const {initialize,transactions,search, statistics,barChart,pieChart,roxCombined} = require('../controller/controller');

router.get('/api/initializeDatabase',initialize);
router.get('/transactions',transactions);
router.get('/transactions/search',search);
router.get('/statistics',statistics);
router.get('/bar-chart',barChart);
router.get('/pie-chart',pieChart);
router.get('/rox-api',roxCombined);

module.exports= router;
