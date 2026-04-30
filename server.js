import http from 'node:http'
import fs from 'node:fs/promises'
import {roteador} from "./src/routes.js"
const port = 3000;

const server = http.createServer(roteador);

server.listen(port, () => console.log('Servidor rodando na porta ' + port));