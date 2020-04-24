const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { APP_PORT, URI_MONGO } = require('./config');
const product = require('./routes/product.route');
const recipe = require('./routes/recipe.route');
const user = require('./routes/user.route');
const mongoose = require('mongoose');
const initializeData = require('./seed/user.seeder');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);
app.use('/recipes', recipe);
app.use('/users', user);

const db = mongoose.connection;

mongoose.connect(URI_MONGO, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

db.on('connected', () => {
    initializeData();
});

db.once('open', function() {
    console.log('Db is connected!')
});

db.on('error', (err) => {
    console.log('Error: Could not connect to MongoDB.', err);
});

app.listen(APP_PORT, ()=>{
    console.log(`App is listening on port: ${APP_PORT}`)
});
