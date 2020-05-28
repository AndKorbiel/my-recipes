const UserSchema = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { TOKEN_SECRET_JWT } = require('../config');

function validateEmailAccessibility(email) {
    return UserSchema.findOne({
        email: email
    }).then((result) => {
        return !result;
    });
}

const generateTokens = (req, user) => {
    const ACCESS_TOKEN = jwt.sign({
            sub: user._id,
            rol: user.role,
            type: 'ACCESS_TOKEN'
        },
        TOKEN_SECRET_JWT, {
            expiresIn: 120
        });
    const REFRESH_TOKEN = jwt.sign({
            sub: user._id,
            rol: user.role,
            type: 'REFRESH_TOKEN'
        },
        TOKEN_SECRET_JWT, {
            expiresIn: 480
        });
    return {
        accessToken: ACCESS_TOKEN,
        refreshToken: REFRESH_TOKEN
    }
};

exports.createUser = (req, res, next) => {
    validateEmailAccessibility(req.body.email).then((valid) => {
        if (valid) {
            UserSchema.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                role: req.body.isAdmin
            }, (error, result) => {
                if (error) {
                    result.status(401).send({
                        message: "Invalid email"
                    });
                    next(error);
                }
        else
            res.json({
                message: 'The user was created'
            })
        });
        } else {
            res.status(409).send({
                message: "Email is already registered"
            })
        }
    });
};

exports.loginUser = (req, res, next) => {
    UserSchema.findOne({
        email: req.body.email
    }, function(err, user) {
        if (err || !user) {
        res.status(401).send({
            message: "Invalid email"
        });
        next(err)
    } else {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.json(generateTokens(req, user));
        } else {
            res.status(401).send({
                message: "Invalid password"
            })
        }
    }
}).select('password')
};

exports.accessTokenVerify = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).send({
            error: 'Token is missing'
        });
    }
    const BEARER = 'Bearer';
    const AUTHORIZATION_TOKEN = req.headers.authorization.split(' ');
    if (AUTHORIZATION_TOKEN[0] !== BEARER) {
        return res.status(401).send({
            error: "Token is not complete"
        })
    }
    jwt.verify(AUTHORIZATION_TOKEN[1], TOKEN_SECRET_JWT, function(err) {
        if (err) {
            return res.status(401).send({
                error: "Token is invalid"
            });
        }
        next();
    });
};

exports.refreshTokenVerify = (req, res, next) => {
    if (!req.body.refreshToken) {
        res.status(401).send({
            message: "Token refresh is missing"
        })
    }
    const BEARER = 'Bearer';
    const REFRESH_TOKEN = req.body.refreshToken.split(' ');
    if (REFRESH_TOKEN[0] !== BEARER) {
        return res.status(401).send({
            error: "Token is not complete"
        })
    }
    jwt.verify(REFRESH_TOKEN[1], TOKEN_SECRET_JWT, function(err, payload) {
        if (err) {
            return res.status(401).send({
                error: "Token refresh is invalid"
            });
        }
        UserSchema.findById(payload.sub, function(err, person) {
            if (!person) {
                return res.status(401).send({
                    error: 'Person not found'
                });
            }
            return res.json(generateTokens(req, person));
        });
    });
};