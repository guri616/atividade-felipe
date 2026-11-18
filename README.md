🌡️ Sistema de Monitoramento de Temperatura com MQTT
📌 Sobre o projeto

Este projeto consiste em um sistema de monitoramento de temperatura utilizando Node.js e o protocolo de comunicação MQTT.

O sistema simula a leitura de temperatura de um ambiente, classifica os valores de acordo com sua intensidade e utiliza o protocolo MQTT para publicar e receber mensagens por meio de um broker.

O objetivo é demonstrar a comunicação entre dispositivos IoT utilizando o modelo Publish/Subscribe (Publicador/Assinante).

🚀 Funcionalidades
🌡️ Simulação de leitura de temperatura.
📊 Classificação da temperatura em três estados:
NORMAL: temperatura entre 18 °C e 28 °C.
BAIXA: temperatura abaixo de 18 °C.
ALTA: temperatura acima de 28 °C.
📡 Comunicação utilizando o protocolo MQTT.
📤 Publicação de mensagens no broker MQTT.
📥 Recebimento de mensagens por meio de inscrição em um tópico.
🔄 Reconexão automática do cliente MQTT.
🛠️ Tecnologias utilizadas
Node.js — Ambiente de execução JavaScript.
MQTT — Protocolo de comunicação utilizado em aplicações IoT.
MQTT.js — Biblioteca para comunicação MQTT no Node.js.
JavaScript — Linguagem utilizada no desenvolvimento.
📁 Estrutura do projeto
text
projeto-mqtt/
│
├── config.js
├── temperatura.js
├── assinante.js
├── publicador.js
├── package.json
└── README.md

⚙️ Configuração
1. Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

Node.js
npm
Um broker MQTT, como o Mosquitto.
2. Instalação das dependências

No terminal, execute:

bash
npm init -y
npm install mqtt

3. Configuração do broker

O projeto utiliza o seguinte endereço para conexão:

javascript
mqtt://localhost:1883


O broker MQTT deve estar em execução na porta 1883.

4. Tópico MQTT

O tópico utilizado para comunicação é:

text
laboratorio/sala1/temperatura

▶️ Funcionamento do projeto

O sistema possui três etapas principais:

1. Leitura da temperatura

O módulo de temperatura simula valores aleatórios entre 10 °C e 40 °C.

A cada leitura, o sistema classifica a temperatura como:

Temperatura ALTA.
Temperatura BAIXA.
Temperatura NORMAL.

A leitura é realizada utilizando Promise, setTimeout e funções assíncronas com async/await.

2. Publicação MQTT

O publicador estabelece conexão com o broker MQTT e envia uma mensagem contendo informações do sensor.

Exemplo de mensagem enviada:

json
{
  "sensorID": "sensor-sala-01",
  "temperatura": 26.4,
  "unidade": "C",
  "timestamp": "2026-11-10T13:00:00.000Z",
  "status": "NORMAL"
}


Os dados são convertidos para JSON utilizando JSON.stringify() antes da publicação.

3. Recebimento MQTT

O assinante conecta-se ao broker e realiza a inscrição no tópico:

text
laboratorio/sala1/temperatura


Quando uma mensagem é publicada nesse tópico, o assinante recebe os dados e exibe no terminal:

Nome do tópico.
Conteúdo da mensagem.
🔄 Fluxo de comunicação
text
       SENSOR DE TEMPERATURA
                 |
                 v
        LEITURA DOS DADOS
                 |
                 v
         CLASSIFICAÇÃO
                 |
                 v
          PUBLICADOR MQTT
                 |
                 v
           BROKER MQTT
                 |
                 v
          ASSINANTE MQTT
                 |
                 v
        EXIBIÇÃO NO TERMINAL

💻 Como executar

Abra três terminais na pasta do projeto.

Terminal 1 — Iniciar o broker MQTT

bash
mosquitto -v


Terminal 2 — Executar o publicador

bash
node publicador.js


Terminal 3 — Executar o assinante

bash
node assinante.js

📚 Conceitos aplicados

Durante o desenvolvimento foram utilizados os seguintes conceitos:

Programação assíncrona com async/await.
Promises.
Temporizadores com setTimeout e setInterval.
Módulos e exportação com module.exports.
Comunicação entre dispositivos utilizando MQTT.
Modelo Publish/Subscribe.
Manipulação de objetos JSON.
Eventos de conexão, mensagens e erros MQTT.
🎯 Objetivo acadêmico

Este projeto tem como objetivo colocar em prática conceitos de programação em Node.js e comunicação IoT utilizando MQTT, simulando um ambiente de monitoramento de temperatura.

A aplicação demonstra como sensores podem enviar informações para um broker MQTT e como outros dispositivos podem receber essas informações por meio de tópicos.

Desenvolvido para fins educacionais e de aprendizado em IoT, Node.js e MQTT.