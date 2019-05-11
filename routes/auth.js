const router = require("express").Router();
const cognito =  require("../cognitoConfig");

router.route("/register").post(cognito.RegisterUser);
router.route("/login").post(function (req,res) {
    if (req.body && req.body.code) {
        cognito.confirmUser(req, res);
    }
    else {
        cognito.Login(req, res);
    }
})
router.route("/logout").get(cognito.Logout);
module.exports = router;