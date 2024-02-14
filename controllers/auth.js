const { response } = require('express');
const User = require('../models/User');

const login = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'login',
        user: req.body
    });
}

const register = async (req, res = response) => {

    try {
        const user = new User( req.body );
        await user.save();

        res.status(201).json({
            ok: true,
            msg: 'register',
            user: req.body
        });
    } catch (error) {
        console.log(error)
        res.json({
            ok: false,
            msg: "El correo ya esta registrado."
        });
    }
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