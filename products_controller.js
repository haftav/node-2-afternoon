module.exports = {
    create: (req, res, next) => {
        console.log(req.body);
        let { name, description, price, imageurl } = req.body;
        const db = req.app.get('db');
        db.create_product([name, description, price, imageurl]).then(() => {
            res.status(200).send();
        }).catch(() => res.status(500).send())
        
    },
    getOne: (req, res, next) => {
        let id = req.params.id;
        console.log('params', req.params);
        const db = req.app.get('db');
        db.read_product([id]).then((product) => {
            res.status(200).send(product);
        }).catch((err) => res.status(500).send(console.log(err)));
           
    },
    getAll: (req, res, next) => {
        const db = req.app.get('db');
        db.read_products().then((products) => {
            res.status(200).send(products);
        }).catch(() => res.status(500).send())
    },
    update: (req, res, next) => {
        let id = req.params.id;
        let desc = req.query.desc;
        const db = req.app.get('db');
        db.update_product([id, desc]).then(() => {
            res.status(200).send();
        }).catch(() => res.status(500).send());
        
    },
    delete: (req, res, next) => {
        let id = req.params.id;
        const db = req.app.get('db');
        db.delete_product([id]).then(() => {
            res.status(200).send();
        }).catch(() => res.status(500).send());
        
    }
}