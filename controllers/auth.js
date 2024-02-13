const { response } = require('express');

const login = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'login'
    });
}

const register = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'register'
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