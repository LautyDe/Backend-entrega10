const config = require("../../controllers/config.js");
const Firebase = require("../../controllers/firebaseController.js");

const cart = new Firebase("carts");

async function crud() {
    await config.initFirebase();
    await cart.save({
        timestamp: 1669243905284,
        code: "udk6L1zaZv",
        products: [
            {
                id: 1,
                timestamp: 1669243422458,
                code: "wwFCtn264M",
                title: "Silla Gamer",
                description:
                    "Silla ergonomica ideal para jugar o trabajar en la computadora",
                price: 60000,
                thumbnail:
                    "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/720/526/products/diseno-sin-titulo-5121-bd311cff4d158548d516372654110148-1024-1024.jpg",
                stock: 23,
            },
            {
                id: 2,
                timestamp: 1669243433692,
                code: "ZYtYEhAj3P",
                title: "Joystick PS5",
                description: "Joystick original para PS5",
                price: 25000,
                thumbnail:
                    "https://images.fravega.com/f1000/a23c2e9cbe114eca833fc5f7288457fc.jpg",
                stock: 16,
            },
        ],
    });
    /*await cart.getAll();
     await cart.getById("Xux8kHQdEYE6dICmioqF");
    await cart.deleteById("Xux8kHQdEYE6dICmioqF");
    await cart.deleteAll(); */
}

crud();
