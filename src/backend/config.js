const TOKEN_SECRET_JWT = process.env.TOKEN_SECRET_JWT || 'jWt9982_s!tokenSecreTqQrtw';
const URI_MONGO = process.env.MONGODB_URI || 'mongodb://localhost:27017/productsList';
const APP_PORT = process.env.port || 4000;

module.exports = { TOKEN_SECRET_JWT, URI_MONGO, APP_PORT };