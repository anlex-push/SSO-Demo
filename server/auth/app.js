const express = require('express');
const bodyParser = require('body-parser');
const cors = require('../middleware/cors');
const { ALLOW_OPTIONS } = require('../config');
const router = require('./middleware/router');

const app = express();
app.use(bodyParser.json());
app.use(cors(ALLOW_OPTIONS));
app.use(router(app));

app.listen(5050, () =>{
    console.log('server is runing on 5050..');
});