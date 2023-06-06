
const { createApp } = Vue

// se creo una constante con el valor Card aca se encuentro todos los datos de la card agregada en el html

const Card = {

// en props se le da el valor de cada instancia que sea texto numero etc... las que estan instanciadas en Data

    props: {
        titulo: String,
        identificador: Number,
        portada: String,
        valor: Number
    },

// en template son los valores que se muestran o llevana html y trae entre corchetes los datos que estan instanciados en Data

    template: `
        <div class="central" align="center">
            <div class="caja">
            <img class="imagen" :src="portada" :alt="titulo">
                <p>{{identificador}}</p>
                <h3>{{titulo}}</h3>
                <p>$ {{valor}}</p>
                <button>Comprar</button>
            </div>
        </div>
    `
}


//  app Vue

  createApp({

// componente Etiqueta que se agrega en html la constante card seria en html card-component

    components: {
        'card-component': Card
    },

    data() {
      return {
        zapatillas: [
            {
                identificador: 01,
                portada: "./img/zapatillas/adidas-zapatillas-running-adizero-sl.jpg",
                titulo: "Adizero SL",
                valor: 16000
            },
            {
                identificador: 02,
                portada: "./img/zapatillas/adidas-zapatillas-running-anchas-runfalcon-3.0.jpg",
                titulo: "RunFalcon 3.0",
                valor: 24000
            },
            {
                identificador: 03,
                portada: "./img/zapatillas/adidas-zapatillas-running-duramo-10.jpg",
                titulo: "Duramo 10",
                valor: 25000
            },
            {
                identificador: 04,
                portada: "./img/zapatillas/adidas-zapatillas-running-duramo-protect.jpg",
                titulo: "Duramo Protect",
                valor: 28000
            },
            {
                identificador: 05,
                portada: "./img/zapatillas/adidas-zapatillas-running-galaxy-6.jpg",
                titulo: "Galaxy 6",
                valor: 26000
            },
            {
                identificador: 06,
                portada: "./img/zapatillas/adidas-zapatillas-running-response.jpg",
                titulo: "Response",
                valor: 24000
            },
            {
                identificador: 07,
                portada: "./img/zapatillas/adidas-zapatillas-running-runfalcon-3.0.jpg",
                titulo: "Run Falcon 3.0",
                valor: 18000
            },
            {
                identificador: 08,
                portada: "./img/zapatillas/adidas-zapatillas-running-supernova--.jpg",
                titulo: "Supernova",
                valor: 22000
            }
        ]
      }
    }
  }).mount('#app')