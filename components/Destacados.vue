<template>
  <div class="padre">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-7 col-lg-8 col-xl-8">
          <NuxtLink :to="'/noticias/' ">
            <img
              class="fila-0"
              :src="imagenCero"
              alt="QUE PASA NOTICIAS || NEWS BARRANQUILLA, ATLANTICO, CARTAGENA, BOLIVAR, CARIBE, COLOMBIA Y EL MUNDO NEWS |"
            />
            <h1 class="primicia-titulo">{{ primicia.titulo }}</h1>
          </NuxtLink>
        </div>

        <div class="col-12 col-md-5 col-lg-4 col-xl-4">
          <div class="row">
            <NuxtLink :to="'/noticias/' ">
              <img
                class="fila-1"
                :src="imagenUno"
                alt="QUE PASA NOTICIAS || NEWS BARRANQUILLA, ATLANTICO, CARTAGENA, BOLIVAR, CARIBE, COLOMBIA Y EL MUNDO NEWS"
              />
              <div class="primicias-titulo">
                <h1 class="prim-titulo-1">{{ primicias.titulo }}</h1>
              </div>
            </NuxtLink>
          </div>

          <div class="row">
            <NuxtLink :to="'/noticias/' ">
              <img
                class="fila-2"
                :src="imagenDos"
                alt="QUE PASA NOTICIAS || NEWS BARRANQUILLA, ATLANTICO, CARTAGENA, BOLIVAR, CARIBE, COLOMBIA Y EL MUNDO NEWS"
              />
              <div class="primicias-titulo">
                <h1 class="prim-titulo-2">{{ primicias.titulo }}</h1>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

.padre {
  padding: 10px 200px;
  margin-bottom: 50px;
  border-radius: 20px;
}
.fila-0 {
  height: 510px;
  box-shadow: 2px 5px 10px 5px #31015821;
  border-radius: 10px;

}

.primicia-titulo {
  position: relative;
  top: -100px;
  font-size: 2rem;
  padding: 0px 20px;
  color: white;
  font-family: 'Ubuntu', sans-serif;
  filter: saturate(250%);

  letter-spacing: 0.1rem;
}

.fila-1 {
  display: block;
  height: 250px;
  width: 100%;
  margin: 0px;
  border-radius: 10px;
}

.prim-titulo-1 {
  position: relative;
  top: -75px;
  width: auto;
  padding: 0px 10px;
  font-size: 1rem;
  color: white;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 57%);
  font: 500 20px/22px 'Ubuntu', sans-serif;
  text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.7);
  letter-spacing: 0.1rem;
}

.prim-titulo-2 {
  position: relative;
  top: -110px;
  width: auto;
  padding: 0px 10px;
  font-size: 1rem;
  color: white;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 57%);
  font: 500 20px/22px 'Ubuntu', sans-serif;
  text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.7);
  letter-spacing: 0.1rem;
}

.fila-2 {
  display: block;
  width: 100%;
  height: 250px;
  position: relative;
  top: -42px;
  margin: 0;
  border-radius: 10px;
}

.prim-titulo-2 {
  position: relative;
  top: -110px;
  width: auto;
  padding: 0px 10px;
  font-size: 1rem;
  color: white;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 57%);
  font: 500 20px/22px 'Ubuntu', sans-serif;
  text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.7);
  letter-spacing: 0.1rem;
}

/* MEDIDA CELULAR PEQUEÑO (XS)  */
@media screen and (min-width: 140px) and (max-width: 320.98px) {
  .padre {
    padding: 5px;
  }

  .col-12 {
    height: auto;
  }

  .fila-0 {
    height: 250px;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    margin-bottom: 50px;
  }

  .primicia-titulo {
    position: absolute;
    top: 270px;
    bottom: 100%;
    font-size: 1.3rem;
    padding: 0px 20px;
    color: white;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 57%);
    font-family: 'Ubuntu', sans-serif;
  }

  .fila-1 {
    display: block;
    height: 250px;
    width: 100%;
    margin: 0px;
    border-radius: 10px;
  }

  .primicias-titulo-1 {
    width: 100%;
    height: auto;
    text-align: center;
  }

  .prim-titulo-1 {
    position: relative;
    top: -100px;
    width: auto;
  }

  .primicias-titulo-2 {
    width: 100%;
    height: auto;
    text-align: center;
    text-align: center;
  }

  .prim-titulo-2 {
    position: relative;
    top: -100px;
    width: 100%;
  }

  .fila-2 {
    display: block;
    width: 100%;
    height: 250px;
    position: relative;
    top: 0;
    margin: 0;
    border-radius: 10px;
  }
}

/* MEDIDA CELULAR MEDIANO (M)  */
@media screen and (min-width: 321px) and (max-width: 575.98px) {
  .padre {
    padding: 5px;
  }

  .col-12 {
    height: auto;
  }

  .fila-0 {
    height: 250px;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    margin-bottom: 50px;
  }

  .primicia-titulo {
    position: absolute;
    top: 270px;
    bottom: 100%;
    font-size: 1.2rem;
    padding: 0px 20px;
    color: white;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 57%);
    font-family: 'Ubuntu', sans-serif;
  }

  .fila-1 {
    display: block;
    height: 250px;
    width: 100%;
    margin: 0px;
    border-radius: 10px;
  }

  .primicias-titulo-1 {
    width: 100%;
    height: auto;
    text-align: center;
  }

  .prim-titulo-1 {
    position: relative;
    top: -100px;
    width: auto;
  }

  .primicias-titulo-2 {
    width: 100%;
    height: auto;
    text-align: center;
    text-align: center;
  }

  .prim-titulo-2 {
    position: relative;
    top: -100px;
    width: 100%;
  }

  .fila-2 {
    display: block;
    width: 100%;
    height: 250px;
    position: relative;
    top: 0;
    margin: 0;
    border-radius: 10px;
  }
}
/* MEDIDA CELULAR  GRANDE ( L)  */
@media screen and (min-width: 576px) and (max-width: 767.98px) {
  .padre {
    padding: 5px;
  }

  .col-12 {
    height: auto;
  }

  .fila-0 {
    height: 500px;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    margin-bottom: 50px;
  }

  .primicia-titulo {
    position: relative;
    top: 270px;
    bottom: 100%;
    font-size: 1.3rem;
    padding: 0px 20px;
    color: white;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 57%);
    font-family: 'Ubuntu', sans-serif;
  }

  .fila-1 {
    display: block;
    height: 250px;
    width: 100%;
    margin: 0px;
    border-radius: 10px;
  }

  .primicias-titulo-1 {
    width: 100%;
    height: auto;
    text-align: center;
  }

  .prim-titulo-1 {
    position: relative;
    top: -100px;
    width: auto;
  }

  .primicias-titulo-2 {
    width: 100%;
    height: auto;
    text-align: center;
    text-align: center;
  }

  .prim-titulo-2 {
    position: relative;
    top: -100px;
    width: 100%;
  }

  .fila-2 {
    display: block;
    width: 100%;
    height: 250px;
    position: relative;
    top: 0;
    margin: 0;
    border-radius: 10px;
  }
}
/* MEDIDA CELULAR  TABLET (S)  */
@media screen and (min-width: 768px) and (max-width: 991.98px) {
  .padre {
    padding: 5px;
  }

  .fila-0 {
    height: 300px;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    margin-bottom: 0px;
  }

  .primicia-titulo {
    position: relative;
    top: -5rem;
    bottom: 100%;
    font-size: 1.3rem;
    padding: 0px 20px;
    color: white;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 57%);
    font-family: 'Ubuntu', sans-serif;
  }

  .fila-1 {
    display: block;
    height: 140px;
    width: 100%;
    margin: 0px;
    border-radius: 10px;
  }

  .primicias-titulo-1 {
    width: 100%;
    height: auto;
    text-align: center;
  }

  .prim-titulo-1 {
    position: relative;
    top: -65px;
    width: auto;
    font-size: 0.8rem;
  }

  .fila-2 {
    display: block;
    width: 100%;
    height: 140px;
    position: relative;
    top: -2rem;
    margin: 0;
  }

  .primicias-titulo-2 {
    width: 100%;
    height: auto;
    text-align: center;
    text-align: center;
    position: relative;
  }

  .prim-titulo-2 {
    position: relative;
    top: -90px;
    width: 100%;
    font-size: 0.8rem;
  }
}
@media screen and (min-width: 992px) and (max-width: 1199.98px) {
  .padre {
    padding: 10px 20px;
    margin-bottom: 50px;
    border-radius: 20px;
  }

  .fila-0 {
    height: 450px;
    box-shadow: 2px 5px 10px 5px #31015821;
    border-radius: 5px;
  }

  .primicia-titulo {
    position: relative;
    top: -110px;
    font-size: 1.8rem;
    padding: 0px 20px;
    color: white;
    font-family: 'Ubuntu', sans-serif;
    filter: saturate(250%);
    text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
      -1px 1px 0 #000, 1px 1px 0 #000;
    -webkit-text-stroke: 1px rgba(0, 0, 0, 0.7);
    letter-spacing: 0.1rem;
  }

  .fila-1 {
    display: block;
    height: 210px;
    width: 100%;
    margin: 0px;
    border-radius: 10px;
  }

  .prim-titulo-1 {
    position: relative;
    top: -90px;
    width: auto;
    padding: 0px 10px;
    font-size: 1rem;
    color: white;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 57%);
    font-family: 'Ubuntu', sans-serif;
    text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
      -1px 1px 0 #000, 1px 1px 0 #000;
    -webkit-text-stroke: 1px rgba(0, 0, 0, 0.7);
    letter-spacing: 0;
  }

  .fila-2 {
    display: block;
    width: 100%;
    height: 210px;
    position: relative;
    top: -45px;
    margin: 0;
    border-radius: 10px;
  }

  .prim-titulo-2 {
    position: relative;
    top: -135px;
    width: auto;
    padding: 0px 10px;
    font-size: 1rem;
    color: white;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 57%);
    font-family: 'Ubuntu', sans-serif;
    text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
      -1px 1px 0 #000, 1px 1px 0 #000;
    -webkit-text-stroke: 1px rgba(0, 0, 0, 0.7);
    letter-spacing: 0;
  }
}
@media screen and (min-width: 1200px) and (max-width: 1399.98px) {
  .padre {
    padding: 10px 20px;
    margin-bottom: 50px;
    border-radius: 20px;
  }

  .fila-0 {
    height: 450px;
    box-shadow: 2px 5px 10px 5px #31015821;
    border-radius: 5px;
  }

  .primicia-titulo {
    position: relative;
    top: -110px;
    font-size: 1.8rem;
    padding: 0px 20px;
    color: white;
    font-family: 'Ubuntu', sans-serif;
    filter: saturate(250%);
    text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
      -1px 1px 0 #000, 1px 1px 0 #000;
    -webkit-text-stroke: 1px rgba(0, 0, 0, 0.7);
    letter-spacing: 0.1rem;
  }

  .fila-1 {
    display: block;
    height: 210px;
    width: 100%;
    margin: 0px;
    border-radius: 10px;
  }

  .prim-titulo-1 {
    position: relative;
    top: -70px;
    width: auto;
    padding: 0px 10px;
    font-size: 1rem;
    color: white;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 57%);
    font-family: 'Ubuntu', sans-serif;
    text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
      -1px 1px 0 #000, 1px 1px 0 #000;
    -webkit-text-stroke: 1px rgba(0, 0, 0, 0.7);
    letter-spacing: 0;
  }

  .fila-2 {
    display: block;
    width: 100%;
    height: 210px;
    position: relative;
    top: -25px;
    margin: 0;
    border-radius: 10px;
  }

  .prim-titulo-2 {
    position: relative;
    top: -90px;
    width: auto;
    padding: 0px 10px;
    font-size: 1rem;
    color: white;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 57%);
    font-family: 'Ubuntu', sans-serif;
    text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
      -1px 1px 0 #000, 1px 1px 0 #000;
    -webkit-text-stroke: 1px rgba(0, 0, 0, 0.7);
    letter-spacing: 0;
  }
}

@media (min-width: 1400px) and (max-width: 1919.98px) {
  .padre {
    padding: 10px 30px;
    margin-bottom: 50px;
    border-radius: 20px;
  }

  .fila-0 {
    height: 450px;
    box-shadow: 2px 5px 10px 5px #31015821;
    border-radius: 5px;
  }

  .primicia-titulo {
    position: relative;
    top: -110px;
    font-size: 1.8rem;
    padding: 0px 20px;
    color: white;
    font-family: 'Ubuntu', sans-serif;
    filter: saturate(250%);
    text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
      -1px 1px 0 #000, 1px 1px 0 #000;
    -webkit-text-stroke: 1px rgba(0, 0, 0, 0.7);
    letter-spacing: 0.1rem;
  }

  .fila-1 {
    display: block;
    height: 210px;
    width: 100%;
    margin: 0px;
    border-radius: 10px;
  }

  .prim-titulo-1 {
    position: relative;
    top: -70px;
    width: auto;
    padding: 0px 10px;
    font-size: 1rem;
    color: white;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 57%);
    font-family: 'Ubuntu', sans-serif;
    text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
      -1px 1px 0 #000, 1px 1px 0 #000;
    -webkit-text-stroke: 1px rgba(0, 0, 0, 0.7);
    letter-spacing: 0;
  }

  .fila-2 {
    display: block;
    width: 100%;
    height: 210px;
    position: relative;
    top: -25px;
    margin: 0;
    border-radius: 10px;
  }

  .prim-titulo-2 {
    position: relative;
    top: -90px;
    width: auto;
    padding: 0px 10px;
    font-size: 1rem;
    color: white;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 57%);
    font-family: 'Ubuntu', sans-serif;
    text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
      -1px 1px 0 #000, 1px 1px 0 #000;
    -webkit-text-stroke: 1px rgba(0, 0, 0, 0.7);
    letter-spacing: 0;
  }
}
</style>

<script>
import axios from 'axios'
import moment from 'moment'
require('moment/locale/es-mx')

export default {
  name: 'Destacados',

  data() {
    return {
      primicia: {},
      primicias: {},
      imagenCero: {},
      imagenUno: {},
      imagenDos: {},
      moment: moment,
    }
  },

  async mounted() {
    try {
      const res = await axios.get(
        'https://que-pasa-strapi.herokuapp.com/primicias'
      )
      this.primicia = res.data.destacado
      this.primicias = res.data.destacados[0]
      this.imagenCero = res.data.destacado.imagen[0].url
      this.imagenUno = res.data.destacados[0].imagen[0].url
      this.imagenDos = res.data.destacados[1].imagen[0].url
    } catch (error) {
      err = error
    }
  },
}
</script>