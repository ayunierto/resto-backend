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

    const { email } = req.body;

    try {

        let user = await User.findOne({ email });
        if ( user ) {
            return res.status(400).json({
                ok: false,
                msg: "Un usuario ya existe con ese correo."
            });
        }

        user = new User( req.body );
        await user.save();

        res.status(201).json({
            ok: true,
            uid: user.id,
            nama: user.name
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: "Error en registro."
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