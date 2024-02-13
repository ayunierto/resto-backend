const { response } = require('express');
const { validationResult } = require('express-validator');

const login = (req, res = response) => {

    const errors = validationResult( req );
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    res.json({
        ok: true,
        msg: 'login',
        user: req.body
    });
}

const register = (req, res = response) => {
    
    const errors = validationResult( req );
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }
    
    res.status(201).json({
        ok: true,
        msg: 'register',
        user: req.body
    });
}

const renewToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'renewToken'
    });
}

module.exports = {
    login, 
    register,
    renewToken
}