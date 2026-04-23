import fs from "node:fs/promises"
import * as controller from './modules/cadastro/cadastro.controller'
import * as controller from './modules/login/login.controller'

export const roteador = async (resquest, response) => {
    const {url, method} = request;

    if (url === '/' && method === 'GET'){

        const template = await fs.readFile('./index.html', 'utf-8')
        
    }

}