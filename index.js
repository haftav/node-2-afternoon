const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const ctrl = require('./products_controller.js')
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/api/products', ctrl.getAll);
app.get('/api/product/:id', ctrl.getOne);
app.put('/api/product/:id', ctrl.update);
app.post('/api/product', ctrl.create);
app.delete('/api/product/:id', ctrl.delete)

const port = process.env.PORT || 3000;

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(port, () => console.log(`Listening on port ${port}`))
})


