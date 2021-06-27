const auth_jwt = require("../middlewares/auth_jwt");
const Party = require('../models/party');

module.exports = function (app) {

    app.get('/api/party/list', [auth_jwt.verifyToken], (req, res) => { 
        Party.find({}, (err,docs) => {
            if (err){
                res.status(400).send({message:err});
            }
            else {
                res.status(200).send(docs);
            }
        });
    });

    // input is a party's _id
    app.get("/api/party/join", [auth_jwt.verifyToken], (req, res) => {          
        const party_id = req.body.party_id;
        
        if (!party_id) {
            return res.status(400).send({message:"Party ID not provided."});
        }
        else {
            // console.log(party_id);
            Party.findOne({'_id':party_id}, (err, result) => {
                if (err){
                    return res.status(400).send({message:"Party ID not found."});
                }                
                const found = result.users.find(element => element == req.user_id);
                if (found == undefined) {
                    result.users.push(req.user_id);
                    result.save();
                    return res.status(200).send({message:"Party joined successfully."});
                }
                else {
                    return res.status(400).send({message:"User has already joined the party."});
                }
            });            
        }        
    });

};