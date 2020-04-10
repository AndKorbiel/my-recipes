const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const products = require('./db/products');

const app = express();
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res)=> {
    res.json({
        msg: "Message from server!"
    })
});

app.get('/products', (req, res)=> {
    products.getAll().then(products => {
        res.json(products)
    })
});

app.post('/products', (req, res)=> {
    console.log(req.body);
    products.create(req.body)
        .then(product => {
            res.json(product)
        })
        .catch(err => res.status(500).send(err))
})

const port = process.env.port || 4000;
app.listen(port, ()=>{
    console.log(`App is listening on port: ${port}`)
});
