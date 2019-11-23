import express from 'express'
import path from 'path'
import { registerServer } from './router'

const server = express()

server.use(express.static(path.resolve(__dirname, '../../../static')))

registerServer(server)

server.listen(3001)
