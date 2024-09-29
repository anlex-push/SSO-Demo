const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { CORS_OPTION } = require('./config');
const router = require('./middleware/router');


const app = express();
app.use(bodyParser.json());
app.use(cors(CORS_OPTION));
app.use(router(app));


app.listen(5050, () => {
    console.log('server is runing on 5050...');
})


