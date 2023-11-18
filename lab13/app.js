const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.use("/books", require('./router/book'))

app.use((req, res) => {
    res.status(404).send("page not found")
})
app.use((err,req,res,next)=>{
    res.status(500).send("Server Internal Error")
})
app.listen(300, () => {
    console.log("server started port number 300............")
})