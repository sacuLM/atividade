import http from 'node:http'
import fs from 'node:fs/promises'
import {roteador} from "./src/routes"
const port = 3000;

const server = http.createServer(roteador);

server.listen(port, () => console.log('Servidor rodando na porta ' + port));