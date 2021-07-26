import { Controller } from 'egg'

class HomrController extends Controller {
    async index(ctx) {
        ctx.body = 'egg.js is running'
    }
}

export default HomrController