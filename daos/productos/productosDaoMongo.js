const config = require("../../controllers/config.js");
const MongoDb = require("../../controllers/mongoController.js");

const products = new MongoDb("products", {
    timestamp: { type: String, require: true, max: 15 },
    code: { type: String, require: true, max: 10 },
    title: { type: String, require: true, max: 100 },
    description: { type: String, require: true },
    price: { type: Number, require: true },
    thumbnail: { type: String, require: true },
    stock: { type: Number, require: true },
});

async function crud() {
    await config.initMongoDB();
    await products.save({
        timestamp: 1672156514732,
        code: "vGotm6NZk4",
        title: "Macbook Air 13",
        description: "Mejor computadora del mercado",
        price: 600000,
        thumbnail:
            "https://www.notebookcheck.info/uploads/tx_nbc2/air13teaser.jpg",
        stock: 3,
    });
    /* await products.getAll();
    await products.getById("5N9P9YZ34pBIKIzvLOUn");
    await products.deleteById("5N9P9YZ34pBIKIzvLOUn");
    await products.deleteAll(); */
}

crud();
