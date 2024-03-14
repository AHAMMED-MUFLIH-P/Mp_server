//importing json server package
const JSONserver = require('json-server')

//creating server using create() method from jso-server
const Mpserver=JSONserver.create()

//generating path/route to server resource
const router=JSONserver.router('db.json')
//initiating json-server middileware

const middileware=JSONserver.defaults()

//creating a port number for server

const PORT=3000| process.env.PORT

//implimenting middleware to server
Mpserver.use(middileware)

//implimenting route to resource to server
Mpserver.use(router)


//run command to server
Mpserver.listen(PORT,()=>{
    console.log(`server is running at:${PORT}`)
})