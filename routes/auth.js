/*
    Users Routes /Auth
    host + /api/auth
*/

const { Router } = require('express');
const { login, register, renewToken } = require('../controllers/auth');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validateFields');
const validateJWT = require('../middlewares/validateJWT');
const router = Router();

router.post(
    '/',
    [
        check('email', 'El correo es obligatorio.').isEmail(),
        check('password', 'La contraseña debe contener al menos 6 caracteres.').isLength({ min: 6 }),
        validateFields
    ], 
    login
);

router.post(
    '/register', 
    [
        check('name', 'El nombre es obligatorio.').not().isEmpty(),
        check('email', 'El correo es obligatorio.').isEmail(),
        check('password', 'La contraseña debe contener al menos 6 caracteres.').isLength({ min: 6 }),
        validateFields
    ],
    register
);

router.get('/renewToken', validateJWT, renewToken);


module.exports = router;