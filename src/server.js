const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const product = require('./routes/product.route')
// const recipes = require('./db/recipes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

const mongoose = require('mongoose');
const mongoDB = process.env.MONGODB_URI || 'mongodb://localhost:27017/productsList';
mongoose.connect(mongoDB, {useNewUrlParser: true});

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log('coneccted!')
});

app.use('/products', product);

// app.get('/', (req, res)=> {
//     res.json({
//         msg: "Message from server!"
//     })
// });
//
// app.get('/products', (req, res)=> {
//     products.getAll().then(products => {
//         res.json(products)
//     })
// });
//
// app.get('/recipes', (req, res)=> {
//     recipes.getAll().then(products => {
//         res.json(products)
//     })
// });
//
// app.post('/recipes', (req, res)=> {
//     console.log(req.body);
//     recipes.create(req.body)
//         .then(recipe => {
//             res.json(recipe)
//         })
//         .catch(err => {
//             res.status(500);
//             res.json(err);
//         })
// });
//
// app.post('/products', (req, res)=> {
//     console.log(req.body);
//     products.create(req.body)
//         .then(product => {
//             res.json(product)
//         })
//         .catch(err => {
//             res.status(500);
//             res.json(err);
//         })
// });

const port = process.env.port || 4000;
app.listen(port, ()=>{
    console.log(`App is listening on port: ${port}`)
});
