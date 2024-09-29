const jwt = require('jsonwebtoken');

function verifyToken(secretKey) {
    return function (req, res, next) {
        const token = req.headers.authorization?.split(' ')[1];
        if (token) {
            jwt.verify(token,secretKey,(err, decoded) => {
                if (err) {
                    return res.json({
                        code: 1,
                        msg: 'token 失效'
                    })
                }
                req.tokenInfo = decoded;
                next();
            })
        } else {
            return res.json({
                code: 1,
                msg: 'token 失效'
            })
        }
    }
}

module.exports = {
    verifyToken,
};