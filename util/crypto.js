const crypto = require('crypto');


/**
 * 明文字符加密
 * @param {string} str 明文字符
 */
function createCryptoHash(str) {
    const hash = crypto.createHash('sha256');
    hash.update(str);
    return hash.digest('hex');
}

/**
 * 验证登录账户密码
 * @param {string} inputPwd 登录时提交的密码
 * @param {string} dbPwd 数据库中的密码
 */
function verifyPassword(inputPwd, dbPwd) {
    const hashPwd = createCryptoHash(inputPwd);
    return hashPwd === dbPwd;
}

module.exports = {
    verifyPassword,
    createCryptoHash,
};