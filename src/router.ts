export default app => {
    const { router, controller } = app
    router.get('/', controller.home.index)
    router.post('/api/login', controller.login.index)
    router.post('/api/addrecord', controller.betInfo.addRecord)
    router.get('/api/recordlist', controller.betInfo.recordList)
    router.post('/api/delrecord', controller.betInfo.delRecord)
}