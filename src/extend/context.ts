import jwt from 'jsonwebtoken'

const secret = 'lzc'
export const jwtSign = user => jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    data: user
}, secret)

export const RData = function (data, code, msg) {
    if (typeof data === 'string') {
        msg = data
        code = 2000
        data = null
    }
    this.body = {
        data,
        code: code || 200,
        msg: msg || '成功'
    }
}