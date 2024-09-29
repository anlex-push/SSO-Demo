const jwt = require('jsonwebtoken');

/**
 * 生成jwt Token
 * @param {string} secretKey 生成token的密钥
 * @param {object} payload token中存放的信息
 * @param {object} option jwt配置
 * @returns string
 */
function createToken (secretKey,payload,option) {
    return jwt.sign(payload,secretKey,option);
}

module.exports = {
    createToken,
};