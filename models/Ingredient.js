const { Schema, model } = require('mongoose');

const IngredientSchema = Schema({
    name: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    purchasePrice: {
        type: Number,
        required: true
    },
    sellingPrice: {
        type: Number,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    certifications: {
        type: String,
        required: true
    },
    receptionDate: {
        type: Date,
        required: true
    },
    expirationDate: {
        type: Date,
        required: true
    },
    provider: {
        type: String,
        required: true
    }
});

module.exports = model('Ingredient', IngredientSchema );