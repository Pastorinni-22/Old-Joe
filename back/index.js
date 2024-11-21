const express = require("express")
const app = express()
const cors = require("cors")
const conn = require("./db/conn")

const controllerCliente = require("./controller/controllerCliente")
const controllerProduto = require("./controller/controllerProduto")


const PORT = 3000
const hostname = 'localhost'

/*------------------------------------------------*/

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

/*------------------------------------------------*/

app.post('/cliente', controllerCliente.cadastrarCliente)

/*------------------------------------------------*/

app.post('/produto', controllerProduto.cadastrarProduto)

/*------------------------------------------------*/

app.get('/', (req, res)=>{
    res.status(200).json({message: 'Aplicação rodando'})
})

/*------------------------------------------------*/

conn.sync().then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor Rodando em ${hostname}:${PORT}`)
    })
}).catch((err)=>{
    console.error('Erro de conexão com o Banco de Dados', err)
})