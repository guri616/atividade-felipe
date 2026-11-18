function lertemperatura(){

    return new Promise((resolve,erro)=>{
    setTimeout(()=>{
        let temperatura = Number((Math.random()*30 +10).toFixed(1))
        if(temperatura > 28 ){
           resolve("Temperatura ALTA")
        }
        else if(temperatura < 18){
          resolve ("Temperatura BAIXA")
        }
        else{
           resolve ("Temperatura NORMAL")
        }

    },1500)
    })
}

module.exports = {lertemperatura}




async function iniciarLeitura() {

    try {

        const resultado = await lertemperatura();

        console.log(resultado);

    }
    catch (erro) {

        console.error("Erro na leitura:", erro);

    }

}

const intervalo =setInterval(iniciarLeitura,3000)

iniciarLeitura();


