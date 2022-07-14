const express = require("express")
const app = express()
const cors = require("cors")
const routes = require("./routes")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname + '/public'))

app.use(routes)

app.listen(3000, ()=>console.log("The server listens...."))