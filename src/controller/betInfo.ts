import { Controller } from 'egg'

class BetInfo extends Controller{
    async addRecord(ctx) {
        const { request: { body }, service } = ctx
        const res = await service.betInfo.addRecord(body)
        if (res) {
            ctx.RData({})
        } else {
            ctx.RData('操作失败')
        }
    }
    async delRecord(ctx) {
        const { request: { body }, service } = ctx
        const res = await service.betInfo.delRecord(body)
        if (res) {
            ctx.RData({})
        } else {
            ctx.RData('操作失败')
        }
    }
    async recordList(ctx) {
        const { service } = ctx
        const list = await service.betInfo.recordList()
        ctx.RData({ list })
    }
}

export default BetInfo