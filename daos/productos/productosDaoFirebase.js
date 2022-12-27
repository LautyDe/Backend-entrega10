const config = require("../../controllers/config.js");
const Firebase = require("../../controllers/firebaseController.js");

const products = new Firebase("products");

async function crud() {
    await config.initFirebase();
    await products.save({
        timestamp: 1672156514732,
        codigo: "vGotm6NZk4",
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
