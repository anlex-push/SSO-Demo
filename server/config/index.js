/**
 * 生成两个TOKEN
 * access_token 访问API的TOKEN
 * refresh_toekn: 刷新访问Toekn的token
 */

const ACCESS_TOKEN_KEY = 'kajsdhasdahsdjhsad';
const REFRESH_TOKEN_KEY = 'kjhasdjsd';

const ALLOW_OPTIONS = [
    'http://localhost:5173',
    'http://localhost:3000'
]

const ACCESS_TOEKN_OPTIONS = {
    expiresIn: 60,
};

const REFRESH_TOKEN_OPTIONS = {
    expiresIn: 60 * 2,
};

module.exports = {
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
    ALLOW_OPTIONS,
    ACCESS_TOEKN_OPTIONS,
    REFRESH_TOKEN_OPTIONS,
};
