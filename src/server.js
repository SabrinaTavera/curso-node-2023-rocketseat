/*
    Chama modulo de HTTP

    Serve para construir Aplicações HTTP => APIs para criar rotas GET, POST, PUT, DELETE e etc...

    //Estes são os dois tipos de importação
    CommonJS  => require          - tem suporte pelo node 
    ESModules => import/export    - Não tem suporte pelo node é necessario add "type": "module" no arquivo package.jsonlll 
    
    Exemplos de importação
    CommonJS  => const http = require('http')
    ESModules => impoort http from 'http'
    
    OBS: Uma forma de diferenciar como o node sabe se é uma biblioteca de terceiros ou 
    uma biblioteca interna é add "node:" em frente ao nome da biblioteca de importação 
    exemplo: import http from 'node:http' 
    
    */ 

import http from 'node:http' 
import { json } from './middlewares/json.js'

// - HTTP
//   - Método HTTP
//   - URL

// GET / POST / PUT / PATCH / DELETE

//obs: recurso é a mesma coisa que informação
// recurso => URL

// GET      => Buscar uma recurso  do back-end 
// POST     => Criar um recurso do back-end
// PUT      => Atualiza um recurso do back-end 
// PATH     => Atualizar uma informação específica de um recurso no back-end
// DELETE   => Deletar um recurso do back-end 

// Stateful   -  Stateless 

// JSON  - Javascript Object Notation 

// Cabeçalho (Requisição / Resposta) => Metadados
//  -> console.log(req.headers)

//HTTP STATUS CODE - Pesquisa no Google mdn http status code  

// Informação               (100 - 199)
// Sucesso                  (200 - 299)
// Redirecionamento de msg  (300 - 399)
// Client Error             (400 - 499)
// Server Error             (500 - 599)


const users  = []


const server = http.createServer( async (req, res)=>{

    const {method, url} = req 

    await json(req, res)

 

    if(method === "GET" && url === "/users"){


        return res
            .setHeader("Content-Type", "application/json") // Fala o tipo de conteudo que estou usando
            .end(JSON.stringify(users))
    }
    
    if(method === "POST" && url === "/users"){
     
        
        
        users.push({
            id: 1,
            name: "John Doe",
            email: "johndoe@example.com"
        })
                        
        // return res.end("Criação de usuários")
        return res.writeHead(201).end()
    }

    return res.writeHead(404).end("Not Found")
})

server.listen(3333)


