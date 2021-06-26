const auth_jwt = require("../middlewares/auth_jwt");
const Photos = require('../models/photos');
const { v1: uuidv1 } = require('uuid');

module.exports = function (app, blob_client) {

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get('/api/data/get_by_user', [auth_jwt.verifyToken], (req, res) => {

        var user = req.user_id;

        Photos.find({
            "user": user
        }, (err, docs) => {

            if (!err) {
                console.log(docs);
                return res.status(200).send(docs);
            }
            else {
                return res.status(400).send({message: "An error occured"});
            }

        });

    });
    
    app.get('/api/data/get_all', [auth_jwt.verifyToken], (req, res) => {
        

        Photos.find({            
        }, (err, docs) => {

            if (!err) {
                console.log(docs);
                return res.status(200).send(docs);
            }
            else {
                return res.status(400).send({message: "An error occured"});
            }

        });

    });

    app.post("/api/data/upload", [auth_jwt.verifyToken], (req, res) => {

        if (!req.body.image_data) {
            return res.status(400).send({ message: "Image data not provided." });
        }

        else {

            var image_data = req.body.image_data;
            const image_data2 = req.body.image_data2;

            // Create a unique name for the blob
            const blobName = uuidv1() + '.png';
            // Get a block blob client
            const blockBlobClient = blob_client.getBlockBlobClient(blobName);

            var new_data = image_data.replace(/^data:image\/(png|jpg);base64,/, "");
            let buff = Buffer.from(new_data, 'base64');

            const uploadBlobResponse = blockBlobClient.upload(buff, buff.length).then((a, b) => {

                console.log(blockBlobClient);

                const data = new Photos({
                    data: req.body.data,
                    user: req.user,
                    imagePath: image_data,
                    imagePath2: image_data2,
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