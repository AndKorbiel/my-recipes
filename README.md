# my-list-of-products

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### To setup MongoDB
- download and install MongoDb
- add mongo to path
- install monk
- steup a MongoDb server by:
mongod --dbpath=/data --port 27017
- steup config connection by:
const monk = require('monk')
const url = 'localhost:27017/myproject';
const db = monk(url);
- to check db structure use Mongo Compass and connect by:
mongodb://127.0.0.1:27017/