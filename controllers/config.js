const { default: mongoose } = require("mongoose");
const admin = require("firebase-admin");
const serviceAccount = require("../segundaentregaproyectofinal-firebase-adminsdk-uhe53-3e1574fe72.json");

async function initMongoDB() {
    try {
        const url = "mongodb://localhost:27017/ecommerce";
        mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Server started with MongoDB");
    } catch (error) {
        console.log(error);
    }
}

async function initFirebase() {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });
        console.log("Server started with Firebase");
    } catch (error) {
        console.log(error);
    }
}

module.exports = { initMongoDB, initFirebase };
