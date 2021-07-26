import { Service } from 'egg'

class ParentService extends Service {
    table = ''
    // @ts-ignore
    mysql = this.app.mysql
    async find(opt) {
        return await this.mysql.select(this.table, opt)
    }
    async findOne(opt) {
        return await this.mysql.get(this.table, opt)
    }
    async insert(opt) {
        return await this.mysql.insert(this.table, opt)
    }
    async delete(opt) {
        return await this.mysql.delete(this.table, opt)
    }
}

export default ParentService