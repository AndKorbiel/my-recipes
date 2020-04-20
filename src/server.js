const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.port || 4000;
const product = require('./routes/product.route');
const recipe = require('./routes/recipe.route');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);
app.use('/recipes', recipe);

const mongoDB = process.env.MONGODB_URI || 'mongodb://localhost:27017/productsList';
const db = mongoose.connection;

mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log('Db is connected!')
});

app.listen(port, ()=>{
    console.log(`App is listening on port: ${port}`)
});
