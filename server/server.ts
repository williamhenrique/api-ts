import * as http from "http"
import Api from "./api/api"
//import * as errorHandlerApi from './api/errorHandlerApi';

const config = require('./config/env/config')()

const server = http.createServer(Api)

server.listen(config.serverPort, () => console.log('Server started'))

