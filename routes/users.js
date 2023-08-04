const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  res.send("users list");
});

router
  .route("/:id")
  .get((req, res) => {
    res.send(`GET USER WITH ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`PUT USER WITH ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`DELETE USER WITH ID ${req.params.id}`);
  });


module.exports = router;
