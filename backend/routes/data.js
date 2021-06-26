const auth_jwt = require("../middlewares/auth_jwt");
const Photos = require('../models/photos');

module.exports = function (app, blob_client) {
    
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/data/upload", [auth_jwt.verifyToken], (req, res) => {                


        
        const imagePath = "123";
        const data = new Photos({
            data: req.body.data,
            user: req.user,
            imagePath: imagePath,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            user: req.user_id           
        });        

        data.save((err, data) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
        });

        res.status(200).send({message: "Data uploaded successfully."});

    });
   
};