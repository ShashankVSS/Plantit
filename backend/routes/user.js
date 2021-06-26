const auth_jwt = require("../middlewares/auth_jwt");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/test/user", [auth_jwt.verifyToken], (req, res) => {
        res.status(200).send(req.user_id);                
    });
   
};