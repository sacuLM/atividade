import fs from "node:fs/promises"
import * as c_controller from './modules/cadastro/cadastro.controller.js'
import * as l_controller from './modules/login/login.controller.js'

export const roteador = async (request, response) => {
    const { url, method } = request;

    if (url === '/' && method === 'GET') {

        const template_home = await fs.readFile('./home.html', 'utf-8')
        response.end(template_home,)
    }

    else if (url === '/style.css' && method === 'GET') {
        const css_home = await fs.readFile('./style.css', 'utf-8')
        response.end(css_home)
    }

    else if (url === '/cadastro' && method === 'GET') {
        const template_cadastro = await fs.readFile('./cadastro.html', 'utf-8')
        response.end(template_cadastro)
    }
    else if (url === '/login' && method === 'GET') {
        const template_login = await fs.readFile('./login.html', 'utf-8')
        response.end(template_login)
    }


}