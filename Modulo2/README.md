import { createServer, plugins } from 'restify'
import corsMiddleware from 'restify-cors-middleware2'

const server = createServer()

//setings

server.use(plugins.acceptParser(server.acceptable))
server.use(plugins.queryParser())
server.use(plugins.bodyParser())

const users = {
  1:{
    name: "Erick",
    lastName: "Bustamante"
  }
}

//routes

server.get('/user', (req, res, next) =>{
  res.setHeader('Content-Type', 'application/json')
  res.writeHead(200)
  res.end(JSON.stringify(users))
})

let usersCount = 2;

server.get('/user/:id',(req, res, next) =>{
  res.setHeader('Content-Type', 'application/json')
	res.writeHead(200);
	res.end(JSON.stringify(users[parseInt(req.params.id)]))
})

server.post('/user', (req, res, next) => {
  let user = req.body
  usersCount++
  user.id= usersCount
  users[user.id] = user
  res.setHeader('Content-Type', 'application/json')
  res.writeHead(200)
  res.end(JSON.stringify(user))
})

//start server

server.listen(3000, () => {
  console.log('%s listening at %s', server.name, server.url)
})
