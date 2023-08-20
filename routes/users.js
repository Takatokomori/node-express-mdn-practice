var express = require('express');
var router = express.Router();
const {
  getHomePage,
  getCool
} = require("../controllers/user")

/* GET users listing. */
router.get('/', getHomePage);

/* GET users cool page*/
router.get("/cool", getCool)

module.exports = router;
