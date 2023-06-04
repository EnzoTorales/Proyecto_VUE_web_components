
const { createApp } = Vue

// se creo una constante con el valor Card aca se encuentro todos los datos de la card agregada en el html

const Card = {

// en props se le da el valor de cada instancia que sea texto numero etc... las que estan instanciadas en Data

    props: {
        titulo: String,
        imagen: String,
        parrafo: String,
        valor: Number
    },

// en template son los valores que se muestran o llevana html y trae entre corchetes los datos que estan intanciados en Data

    template: `
        <div align="center">
            <div>
                <img src="" alt="">
                <h3>{{titulo}}</h3>
                <p>{{parrafo}}</p>
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
        titulo: "Titulo de Data",
        parrafo: "Info de GifCard de Data",
        valor: 3000
      }
    }
  }).mount('#app')