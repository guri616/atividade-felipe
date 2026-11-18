const mqtt = require('mqtt')

const broker =('mqtt://localhost:1883')
const topico = "laboratorio/sala1/temperatura"

module.exports = {broker,topico}