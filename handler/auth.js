const { verifyPassword, createToken } = require('../util');
const {
    ACCESS_TOKEN_KEY,
    ACCESS_TOKEN_OPTION,
    REFRESH_TOKEN_KEY,
    REFRESH_TOKEN_OPTION,
} = require('../config');

// 模拟数据库登录用户信息
const user = {
    id: 1,
    username: 'admin',
    password: '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918',
};
function loginAction(req, res) {
    const {
        username,
        password,
    } = req.body;
    if (username !== user.username || !verifyPassword(password, user.password)) {
        return res.json({
            code: 1,
            msg: '账户或密码不正确'
        });
    }
    const payload = {
        id: user.id,
        username: user.username,
    };
    return res.json({
        code: 0,
        msg: 'ok',
        data: {
            access_token: createToken(ACCESS_TOKEN_KEY,payload,ACCESS_TOKEN_OPTION),
            refresh_token: createToken(REFRESH_TOKEN_KEY,payload,REFRESH_TOKEN_OPTION),
        },
    });

}

function refreshAction(req, res) {
    // 能走到这里，说明refresh_token还没有过期，需要刷新最新token
    const tokenInfo = req.tokenInfo;
    const payload = {
        id: tokenInfo.id,
        username: tokenInfo.username,
    };
    return res.json({
        code: 0,
        msg: 'ok',
        data: {
            access_token: createToken(ACCESS_TOKEN_KEY,payload,ACCESS_TOKEN_OPTION),
            refresh_token: createToken(REFRESH_TOKEN_KEY,payload,REFRESH_TOKEN_OPTION),
        }
    });
}

module.exports = {
    loginAction,
    refreshAction,
};