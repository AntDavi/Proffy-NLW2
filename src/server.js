const proffys = [
    {
        name: "Anthony Davi", 
        avatar: "https://avatars2.githubusercontent.com/u/69051403?s=460&u=374e5e51ecc3b742364e5210d0d6c1ce1c064b23&v=4", 
        whatsapp: "85 999999999", 
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus, est auctor feugiat convallis, risus felis accumsan mi, quis tincidunt arcu mi at elit.", subject: "História", 
        cost: "20", 
        weekday: [ 0 ], 
        time_from: [720], 
        time_to: [1220]
    },
    {
        name: "Ana Livia", 
        avatar: "https://avatars2.githubusercontent.com/u/69051403?s=460&u=374e5e51ecc3b742364e5210d0d6c1ce1c064b23&v=4", 
        whatsapp: "85 999999999", 
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus, est auctor feugiat convallis, risus felis accumsan mi, quis tincidunt arcu mi at elit.", subject: "Geografia", 
        cost: "40", 
        weekday: [ 1 ], 
        time_from: [720], 
        time_to: [1220]
    }
]

function pageLanding (req, res) {
    return res.render("index.html")
}

function pageStudy (req, res) {
    return res.render("study.html", { proffys })
}

function pageGiveClasses (req, res) {
    return res.render("give-classes.html")
}

const express = require('express')
const server = express()

//configurar nunjuncks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server

//Configurando arquivos estatico
.use(express.static('public'))

//rotas da aplicação
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
.listen(5500)