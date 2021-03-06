exports.keys = 'lzccheng'

exports.security = {
    csrf: {
        enable: false
    }
}

exports.mysql = {
    // 单数据库信息配置
    client: {
        // host
        host: 'localhost',
        // 端口号
        port: '3306',
        // 用户名
        user: 'test',
        // 密码
        password: 'test123',
        // 数据库名
        database: 'test',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
}