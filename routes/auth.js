/*
    Users Routes /Auth
    host + /api/auth
*/

const { Router } = require('express');
const { login, register, renewToken } = require('../controllers/auth');
const router = Router();

router.post('/', login);

router.post('/register', register);

router.get('/renewToken', renewToken);


module.exports = router;