import { Controller } from 'egg'

class LoginController extends Controller {
    async index(ctx) {
        const { request: { body: { username, password } }, service } = ctx
        const res = await service.user.findUser({ username })
        if (!res) {
            return ctx.RData('用户不存在')
        }
        if (res.password !== password) {
            return ctx.RData('密码错误')
        }
        delete res.password
        ctx.RData({ ...res, token: ctx.jwtSign(res) })
    }
}

export default LoginController