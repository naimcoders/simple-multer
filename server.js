import express from 'express'
import { config } from 'dotenv'
config()
import router from './routes/UserRoute.js'

const server = express()
const port = process.env.PORT

server.set('view engine', 'ejs')

server.use(express.static('public'))

server.use(router)

server.use('/', (req, res) => {
    res.status(400)
    res.send('<h1>Not Found!</h1>')
})

server.listen(port, () => console.log(`Server is listening on port ${port}`))