const auth_jwt = require("../middlewares/auth_jwt");
const Photos = require('../models/photos');
const { v1: uuidv1} = require('uuid');

module.exports = function (app, blob_client) {

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/data/upload", [auth_jwt.verifyToken], (req, res) => {

        if (!req.body.image_data) {
            return res.status(400).send({ message: "Image data not provided." });
        }

        else {

            const image_data = req.body.image_data;            

            // Create a unique name for the blob
            const blobName = 'image' + uuidv1() + '.png';
            // Get a block blob client
            const blockBlobClient = blob_client.getBlockBlobClient(blobName);
            
            const uploadBlobResponse = blockBlobClient.upload(image_data, image_data.length).then((a,b)=>{
                
                console.log(a);
                console.log(b);

                const data = new Photos({
                    data: req.body.data,
                    user: req.user,
                    imagePath: "imagePath",
                    latitude: req.body.latitude,
                    longitude: req.body.longitude,
                    user: req.user_id
                });
    
                data.save((err, data) => {
                    if (err) {
                        return res.status(500).send({ message: err });
                    }
                    else {
                        return res.status(200).send({ message: "Data uploaded successfully." });
                    }
                });

            });
            console.log("Blob was uploaded successfully. requestId: ", uploadBlobResponse);

            
        }

    });

};