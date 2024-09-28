const { ACCESS_TOKEN_KEY, ACCESS_TOEKN_OPTIONS, REFRESH_TOKEN_KEY, REFRESH_TOKEN_OPTIONS } = require("../../config");
const { createToken } = require("../util");
const user = require('../database/user');
const { checkCryptoHash } = require('../../util/crypto');

exports.loginAction = function (req, res) {
    const {
        username,
        password,
    } = req.body;
    const userData = user[username];
    if (!userData) {
        return res.json({
            code: 1,
            msg: 'Invalid username'
        });
    }
    const isRightPassword = checkCryptoHash(password, userData.password);
    if (!isRightPassword) {
        return res.json({
            code: 1,
            msg: 'Invalid password'
        });
    }
    const {accessToken, refreshToken } = createDoubleToken(userData);
    return res.json({
        code: 0,
        msg: 'ok',
        data: {
            access_token: accessToken,
            refersh_token: refreshToken,
        },
    });
}

exports.refreshToken = function (req, res) {
    

}


function createDoubleToken(userData) {
    const accessToken = createToken(
        ACCESS_TOKEN_KEY,
        {
            userId: userData.id,
            username: userData.username,
        },
        ACCESS_TOEKN_OPTIONS,
    );
    const refreshToken = createToken(
        REFRESH_TOKEN_KEY,
        {
            userId: userData.id,
            username: userData.username,
        },
        REFRESH_TOKEN_OPTIONS,
    );
    return {
        accessToken,
        refreshToken,
    };
}