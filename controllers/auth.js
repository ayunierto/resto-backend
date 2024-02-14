const { response } = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const login = async (req, res = response) => {

    const { email, password } = req.body;

    try {

        let user = await User.findOne({ email });
        if ( user ) {
            return res.status(400).json({
                ok: false,
                msg: "Un usuario ya existe con ese correo."
            });
        }

        user = new User( req.body );
        // Password encrypt
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);
        await user.save();

        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor."
        });
    }
}

const register = async (req, res = response) => {

    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email });
        if ( !user ) {
            return res.status(400).json({
                ok: false,
                msg: "El usuario no existe."
            });
        }

        // Verify password
        const validPassword = bcrypt.compareSync( password, user.password );
         if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: "La contraseña es incorrecta."
            });
        }

        res.status(200).json({
            ok: true,
            uid: user.id,
            name: user.name
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor."
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