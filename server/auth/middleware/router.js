const  verifyToken = require('../../middleware/jwt');
const { REFRESH_TOKEN_KEY } = require('../../config');
const { refreshToken, loginAction } = require('../handler');

module.exports = function router(app) {
    return function (req, res, next) {
        app.post('/auth/login', loginAction);
        app.post('/auth/refresh', verifyToken(REFRESH_TOKEN_KEY), refreshToken);


        next();
    }
}