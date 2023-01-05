const mongoose = require("mongoose");
const productsCollection = "products";
const Schema = mongoose.Schema;

const productsSchema = new Schema("products", {
    timestamp: { type: String, require: true, max: 15 },
    code: { type: String, require: true, max: 10 },
    title: { type: String, require: true, max: 100 },
    description: { type: String, require: true },
    price: { type: Number, require: true },
    thumbnail: { type: String, require: true },
    stock: { type: Number, require: true },
});

export const products = mongoose.model(productsCollection, productsSchema);
