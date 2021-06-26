const User = require('../models/user');

check_duplicates = (req, res, next) => {
    
    // Email
    User.findOne({
        email: req.body.email
    }).exec((err, user) => {
        
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        else if (user) {
            res.status(400).send({ message: "Failed! Email is already in use!" });
            return;
        }
        next();
    });

};


const verify_signup = {
    check_duplicates
};

module.exports = verify_signup;