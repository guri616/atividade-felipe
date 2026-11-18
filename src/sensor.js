const mqtt = require('mqtt')
const ler = require('./temperatura');
const bro = require('./config.js')


const trabalho = mqtt.connect('mqtt://localhost:1883');

trabalho.on('connect',()=>{
    
    const temp ={
        
        sensorID: "sensor-sala-01",
        temperatura: 26.4,
        unidade: "C",
        timestamp: "2026-11-10T13:00:00.000z",
        status: "NORMAL"
    }
    const playload = JSON.stringify(temp)
    trabalho.publish(
    bro.topico,
    playload,
    (erro)=>{
        if(erro){
            console.error('erro ao publicar',erro)
        }
        else{
            console.log('publicação publicada',playload)
        } 
         
    }
)

})

