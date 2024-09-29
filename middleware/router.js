const { loginAction, refreshAction, getListAction } = require('../handler');
const { verifyToken } = require('./jwt');
const { REFRESH_TOKEN_KEY, ACCESS_TOKEN_KEY } = require('../config');

module.exports = function router(app) {
    return function (req, res, next) {
        app.post('/auth/login', loginAction);
        app.post('/auth/refresh', verifyToken(REFRESH_TOKEN_KEY), refreshAction);
        app.get('/api/list', verifyToken(ACCESS_TOKEN_KEY), getListAction);

        next();
    }
}