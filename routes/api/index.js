const CognitoExpress = require("cognito-express");
const router = require("express").Router();
const teacherRoutes = require("./teacher");
const adminRoutes = require("./admin");
const studentRoutes = require("./student");
const pageRoutes = require("./pageroutes");

const cognitoExpress = new CognitoExpress({
    region: "us-east-1",
    cognitoUserPoolId: "us-east-1_RX3L5Cy35",
    tokenUse: "access", //Possible Values: access | id
    tokenExpiration: 3600000 //Up to default expiration of 1 hour (3600000 ms)
});
// api routes
router.use(function(req, res, next) {
    
    //I'm passing in the access token in header under key accessToken
    //sticky!
    let accessTokenFromClient = req.headers.accesstoken;
 
    //Fail if token not present in header. 
    if (!accessTokenFromClient) return res.status(401).send("Access Token missing from header");
 
    cognitoExpress.validate(accessTokenFromClient, function(err, response) {
        
        //If API is not authenticated, Return 401 with error message. 
        if (err) return res.status(401).send(err);
        
        //Else API has been authenticated. Proceed.
        res.locals.user = response;
        next();
    });
});

router.use("/teacher", teacherRoutes);
router.use("/admin", adminRoutes);
router.use("/student", studentRoutes);
router.use("/pageroutes", pageRoutes);

module.exports = router;
