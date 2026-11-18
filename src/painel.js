const mqtt = require('mqtt')
const bro = require('./config.js')

const trabalho = mqtt.connect('mqtt://localhost:1883')

trabalho.on('connect',()=>{
    console.log('Conectado ao MQTT')

    trabalho.subscribe(
        bro.topico,
        {qos:0},
        (erro, concedidos)  =>{
            if(erro){
                console.log('Erro ao assinar',erro)
                return
            }
            console.log('Assinatura Realizada',concedidos)
        }
    )
})

trabalho.on('message',(topico,mensagem)=>{
    console.log('topico',topico)
    console.log('mensagem',mensagem.toString())
})

trabalho.on('error',(erro)=>{
    console.log('Erro mqtt',erro.message)
})

trabalho.on('reconnect',() =>{
    console.log('tentando reconectar...')   
})