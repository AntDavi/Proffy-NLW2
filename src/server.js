//Ddos

const proffys = [
    {
        name: "Anthony Davi", 
        avatar: "https://avatars2.githubusercontent.com/u/69051403?s=460&u=374e5e51ecc3b742364e5210d0d6c1ce1c064b23&v=4", 
        whatsapp: "85 999999999", 
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus, est auctor feugiat convallis, risus felis accumsan mi, quis tincidunt arcu mi at elit.", subject: "História", 
        cost: "40", 
        weekday: [ 0 ], 
        time_from: [720], 
        time_to: [1220]
    },
    {
        name: "Ana Livia", 
        avatar: "https://avatars3.githubusercontent.com/u/11712178?s=400&u=ca94c2b41198d8828f8b972facf612b8102f15b6&v=4", 
        whatsapp: "85 999999999", 
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus, est auctor feugiat convallis, risus felis accumsan mi, quis tincidunt arcu mi at elit.", subject: "Geografia", 
        cost: "40", 
        weekday: [ 1 ], 
        time_from: [720], 
        time_to: [1220]
    },
    {
        name: "Carlos Eduardo", 
        avatar: "https://avatars2.githubusercontent.com/u/438936?s=460&u=65310293ba27b80f817680d9079cfe9328892ed2&v=4", 
        whatsapp: "85 999999999", 
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus, est auctor feugiat convallis, risus felis accumsan mi, quis tincidunt arcu mi at elit.", subject: "Matematica", 
        cost: "65", 
        weekday: [ 5 ], 
        time_from: [720], 
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matematica",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-Feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

//Funcionalidades

function getSubject(subjectNumber) {
    const position = + subjectNumber - 1
    return subjects[position]
}

function pageLanding (req, res) {
    return res.render("index.html")
}

function pageStudy (req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses (req, res) {
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0

    if (isNotEmpty) {

        data.subject = getSubject(data.subject)
        //Adicionar data do proffys
        proffys.push(data)

        return res.redirect("/study")
    }
    
    //se não mostrar a página
    return res.render("give-classes.html", {subjects, weekdays})
}

//Servidor

const express = require('express')
const server = express()

//configurar nunjuncks (template engine)
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

//Start do servidor
.listen(5500)