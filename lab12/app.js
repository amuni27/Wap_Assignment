const express = require('express');
const path = require('path')


const app = express();

app.use(express.urlencoded({extended: true}))


app.use(express.static('public'))


app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})
app.use('/users', require('./router/user'))
app.use('/product', require('./router/product'))

app.use((req,res,next)=>{
    res.status(400).send("<!DOCTYPE html>\n" +
        "<html style='height: 100%' lang=\"en\">\n" +
        "<head>\n" +
        "    <meta charset=\"UTF-8\">\n" +
        "    <title>Title</title>\n" +
        "</head>\n" +
        "<body style='margin: 0; padding: 0; width: 100%; height: 100%'>\n" +
        "<div style=\"width: 100%; height: 100%; background: #415025; display: flex; align-content: center; align-items: center; justify-content: center\">\n" +
        "    <p style='color: white; font-size: 50px;'>404</p>\n" +
        "    <p style='color: white; font-size: 35px;'>Page not found</p>\n" +
        "</div>\n" +
        "</body>\n" +
        "</html>")
})

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send("Internal Server Error");
})
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'),()=>{
    console.log(`Server Start port listen ${app.get('port')}`)
})