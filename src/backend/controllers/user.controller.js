const UserSchema = require('../models/user.model');

exports.getUserList = (req, res, next) => {
    UserSchema.find({}, {}, (err, users) => {
        if (err || !users) {
        res.status(401).send({message: "Unauthorized"});
        next(err)
    } else {
        res.json({status: "success", users: users});
    }
})
};