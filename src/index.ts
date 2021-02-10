import Express from 'express';

const app: Express.Application = Express()

app.get('/', (req: Express.Request, res: Express.Response) => {
    res.send('test')
})

app.listen(8080, () => {
    console.log('running new version')
})