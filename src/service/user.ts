import Parent from './parent'

class LoginService extends Parent {
    table = 'user'
    async findUser(opt) {
        return await this.findOne(opt)
    }
}

export default LoginService