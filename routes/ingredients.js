/*
    Ingredients Routes /ingredients
    host + /api/ingredients
*/

const { Router } = require("express");
const validateJWT = require("../middlewares/validateJWT");
const { getAllIngredients, getIngredient, storeIngredient, updateIngredient, deleteIngredient } = require("../controllers/ingredients");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validateFields");
const isDate = require("../helpers/isDate");

const router = Router();

router.use( validateJWT );

router.get('/', getAllIngredients );

router.post(
    '/', 
    [
        check('name', 'Este campo es oblogatorio.').not().isEmpty(),
        check('stock', 'Este campo es oblogatorio.').not().isEmpty(),
        check('purchasePrice', 'Este campo es oblogatorio.').not().isEmpty(),
        check('sellingPrice', 'Este campo es oblogatorio.').not().isEmpty(),
        check('certifications', 'Este campo es oblogatorio.').not().isEmpty(),
        check('receptionDate', 'Este campo es oblogatorio.').custom( isDate ),
        check('expirationDate', 'Este campo es oblogatorio.').custom( isDate ),
        check('provider', 'Este campo es oblogatorio.').not().isEmpty(),
        validateFields
    ],
    storeIngredient 
);

router.get('/:id', getIngredient );

router.put('/:id', updateIngredient );

router.delete('/:id', deleteIngredient );

module.exports = router;
