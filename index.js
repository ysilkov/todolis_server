import express from "express";
import path  from "path";
import createServer from "./routes/servers.js"

const PORT = 3000
const app = express()
const __dirname = path.resolve()

//app.use(express.static(path.resolve(__dirname, 'path')))
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))
app.get('/', (res, req)=>{
    req.render('index', {title: "Mian Pages", active: "main"})
})
app.get('/features', (res, req)=>{
    req.render('features', {title: "Features Pages", active: "features"})
})
app.get('/downoload', (res, req)=>{
    res.download(path.resolve(__dirname, 'path', 'index.html'))
}) 
app.listen( PORT, ()=>{
    console.log("Server work")
})
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(createServer)
