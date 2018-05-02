import express from 'express'
import opn from 'opn'
import api from './api'
import middlewares from './middlewares'
import config from './config'
import helper from './utils'

const app = express()
const port = process.env.port || config.port

helper.connectToDatabase(config.db)

app.use(express.static(__dirname + '/../client/build'))
app.use(middlewares.reqParser())
app.use('/api', api)

app.listen(port, () => {
  opn(`http://localhost:${port}`)
  console.log(`The server is working on port ${port}`)
})
