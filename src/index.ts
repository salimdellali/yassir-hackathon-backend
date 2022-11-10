import express from 'express'
import cors from 'cors'
import { ClientRouter } from './modules/client/'
import { JobberRouter } from './modules/jobber'

const app = express()
const PORT = process.env.PORT || 3000
const API_VERSION = '/api/v1'

app.use(cors())
app.use(express.json())

app.use(API_VERSION + '/client', ClientRouter)
app.use(API_VERSION + '/jobber', JobberRouter)

app.get('/ping', (req, res) => {
    res.send('pong')
})

app.listen(PORT, () => {
    console.log('Web server running on port: ' + PORT)
})
