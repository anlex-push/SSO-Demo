// 模拟正常的api接口请求获取数据，但需要登录后才能获取
function getListAction(req, res) {
    return res.json({
        code: 0,
        msg: 'ok',
        data: [
            {name: 'asdasd'},
            {name: 'jhghjdgajhsd'}
        ],
    });
}

module.exports = {
    getListAction,
};