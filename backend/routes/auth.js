const verify_signup  = require("../middlewares/verify_signup");
const controller = require("../controllers/auth");

module.exports = function(app) {
  
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/auth/signup",verify_signup.check_duplicates,controller.signup);
  app.post("/api/auth/signin", controller.signin);

};