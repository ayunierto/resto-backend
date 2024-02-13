const { response } = require('express');

const login = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'login',
        user: req.body
    });
}

const register = (req, res = response) => {
    res.json({
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