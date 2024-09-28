module.exports = function cors (allowOrigins) {
    return function (req, res, next) {
        const {
            origin
        } = req.headers;

        if (!Array.isArray(allowOrigins)) {
            return;
        }
        if (allowOrigins.includes(origin)) {
            res.header('Access-Control-Allow-Origin', origin);
            res.header('Acess-Control-Allow-Methods', 'GET,POST');
            res.header('Acess-Control-Allow-Header', 'Origin,X-Requested-With,content-Type,Authorization,Accept')
            res.header('Acess-Control-Allow-Credentials', 'true');
        }
        next();
    }
}