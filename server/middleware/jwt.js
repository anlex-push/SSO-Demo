const jwt = require('jsonwebtoken');

module.exports = function verifyToken( secretKey) {
    /**
     * 前端发视请求的时候携带token的地方和格式
     * 
     * 1、地方： headers =》 authorization
     * 2、 Bearer xxxxx
     * 
     */
    return function (req, res, next) {
        const token = req.headers.authorization.split(' ')[1]

        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return res.json({
                    code: 2,
                    meg: 'Invalid token'
                });
            }
            req.tokenInfo = decoded;
            next();
        })
    }
}