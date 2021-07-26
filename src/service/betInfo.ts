import Parent from './parent'

class BetInfo extends Parent {
    table = 'bet_info'
    async addRecord(opt) {
        return await this.insert(opt)
    }
    async recordList(opt) {
        return await this.find(opt)
    }
    async delRecord(opt) {
        return await this.delete(opt)
    }
}

export default BetInfo