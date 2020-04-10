const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.json({
        msg: "Message from server!"
    })
});

const port = process.env.port || 4000;
app.listen(port, ()=>{
    console.log(`App is listening on port: ${port}`)
});
