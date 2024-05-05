const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Hey it is user route");
});


//update user
//delete user
//get a user
//follow a user
//unfollow a user

module.exports = router;

