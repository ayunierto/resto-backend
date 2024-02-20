const { response } = require("express");
const Ingredient = require("../models/Ingredient");

const getAllIngredients = async ( req, res = response ) => {

    const ingredients = await Ingredient.find().populate('user');

    res.json({
        ok: true,
        ingredients
    });
} 

const getIngredient = ( req, res = response ) => {
    res.json({
        ok: true,
        msg: 'Get one Ingredient by id.'
    });
}

const storeIngredient = async ( req, res = response ) => {

    console.log(req.body);

    const ingredient = new Ingredient( req.body );
    
    try {
        
        ingredient.user = req.uid;

        const ingredientSaved = await ingredient.save();
        
        res.status(201).json({
            ok: true,
            ingredient: ingredientSaved
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error en el servidor.'
        });
    }

}

const updateIngredient = async ( req, res = response ) => {

    const id = req.params.id;

    try {
        
        const ingredient = await Ingredient.findById( id );

        if ( !ingredient ) {
            return res.status(404).json({
                ok: false,
                msg: 'El ingrediente no existe.'
            });
        }

        if ( ingredient.user.toString() !== req.uid ) {
            return res.status(401).json({
                ok: false,
                msg: "No tiene autorización para realizar esta operación."
            });
        }

        const newIngredient = {
            ...req.body,
            user: req.uid
        }

        const updatedIngredient = await Ingredient.findByIdAndUpdate( id, newIngredient, { new: true });

        res.json({
            ok: true,
            ingredient: updatedIngredient
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error en el servidor.'
        });
    }

}

const deleteIngredient = async ( req, res = response ) => {
    
    const id = req.params.id;

    try {

        const ingredient = await Ingredient.findById( id );

        if ( !ingredient ) {
            return res.status(404).json({
                ok: false,
                msg: 'El ingrediente no existe.'
            });
        }

        if ( ingredient.user.toString() !== req.uid ) {
            return res.status(401).json({
                ok: false,
                msg: "No tiene autorización para realizar esta operación."
            });
        }

        const deletedIngredient = await Ingredient.findByIdAndDelete( id );

        res.json({
            ok: true,
            ingredient: deletedIngredient
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error en el servidor.'
        });
    }

    res.json({
        ok:true,
        msg: 'Delete Ingredient'
    });
}

module.exports = {
    getAllIngredients,
    getIngredient,
    storeIngredient,
    updateIngredient,
    deleteIngredient

}