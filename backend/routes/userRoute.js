const express = require("express");
const { getAllUser, getFilteredUser1 , getFilteredUser2 , getFilteredUser3, getFilteredUser4} = require("../controller.js/userController");

const router = express.Router();

router
  .route("/users")
  .get(getAllUser);

  router
  .route("/filteredusers1")
  .get(getFilteredUser1);

  router
  .route("/filteredusers2")
  .get(getFilteredUser2);

  router
  .route("/filteredusers3")
  .get(getFilteredUser3);

  router
  .route("/filteredusers4")
  .get(getFilteredUser4);


module.exports = router