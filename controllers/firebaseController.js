const admin = require("firebase-admin");
const { all } = require("../routers");

class Firebase {
    constructor(collection) {
        this.collection = collection;
    }

    async save(object) {
        const db = admin.firestore();
        const query = db.collection(this.collection);
        await query.add(object);
    }

    async getById(id) {
        const db = admin.firestore();
        const query = db.collection(this.collection);
        const doc = query.doc(id);
        const item = await doc.get();
        console.log(item.data());
    }

    async getAll() {
        const db = admin.firestore();
        const query = db.collection(this.collection);
        const allDocs = await query.get();
        allDocs.forEach(doc => {
            console.log({
                id: doc.id,
                ...doc.data(),
            });
        });
    }

    async deleteById(id) {
        const db = admin.firestore();
        const query = db.collection(this.collection);
        const doc = query.doc(id);
        const item = await doc.delete();
        console.log("Archivo eliminado");
    }

    async deleteAll() {
        const db = admin.firestore();
        const query = db.collection(this.collection);
        const allDocs = await query.get();
        allDocs.forEach(doc => {
            this.deleteById(doc.id);
        });
    }
}

module.exports = Firebase;
