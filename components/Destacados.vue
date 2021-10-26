<template>
  <div class="padre">
    <div class="container-fluid">
      <div class="row content-0">
        <div class="col-12 col-md-7 col-lg-8 col-xl-8" >
          <NuxtLink class="a" :to="'/primicia/' ">
            <img
              class="fila-0"
              :src="imagenUno "
              alt="QUE PASA NOTICIAS || NEWS BARRANQUILLA, ATLANTICO, CARTAGENA, BOLIVAR, CARIBE, COLOMBIA Y EL MUNDO NEWS "
            />

            <div class="box-titulo">
              <span class="hour-0">
                <i class="fas fa-history"></i> &nbsp; Hace :
                {{ moment(destacados.date_gmt).fromNow('es-us') }}</span
              >
              <h1 class="primicia-titulo">{{tituloUno}}</h1>
            </div>
          </NuxtLink>
        </div>

        <div class="col-12 col-md-5 col-lg-4 col-xl-4">
          <div class="row content-1">
            <NuxtLink :to="'/primicia/primicias/destacado/' ">
              <div class="cal">
                <img
                  class="fila-1"
                  :src="imagenDos"
                  alt="QUE PASA NOTICIAS || NEWS BARRANQUILLA, ATLANTICO, CARTAGENA, BOLIVAR, CARIBE, COLOMBIA Y EL MUNDO NEWS"
                />
              </div>
              <div class="box-titulo-1">
                <span class="hour-1">
                  <i class="fas fa-history"></i> &nbsp; Hace :{{
                    moment(destacados.date_gmt).fromNow('es-us')
                  }}</span
                >
                <h1 class="prim-titulo-1">{{  tituloDos }}</h1>
              </div>
            </NuxtLink>
          </div>

          <div class="row">
            <NuxtLink :to="'/primicia/primicias/destacados/' ">
              <img
                class="fila-2"
                :src="imagenTres"
                alt="QUE PASA NOTICIAS || NEWS BARRANQUILLA, ATLANTICO, CARTAGENA, BOLIVAR, CARIBE, COLOMBIA Y EL MUNDO NEWS"
              />

              <div class="box-titulo-2">
                <span class="hour-2">
                  <i class="fas fa-history"></i> &nbsp; Hace :
                  {{ moment(destacados.date_gmt).fromNow('es-us') }}</span
                >
                <h1 class="prim-titulo-2">{{  tituloTres }}</h1>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

.padre {
  padding: 10px 250px;
}

.fa-history {
  color: rgb(59, 0, 136);
}

.fila-0 {
  display: block;
  max-height: 510px;
  filter: saturate(150%);
  background: rgba(0, 0, 0, 0.9) none !important;
  background: none, linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0)) !important;
  z-index: 0;
}

.box-titulo {
  padding: 20px 20px;
  position: relative;
  top: -149px;
  background: rgba(0, 0, 0, 0.829) none !important;
  background: none,
    linear-gradient(180deg, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.801)) !important;
}

.hour-0 {
  color: rgb(255, 255, 255);
  font-family: 'Merriweather Sans', sans-serif;
  text-shadow: 2px 2px 4px rgb(0, 0, 0);
  font-weight: 300;
  position: relative;
  right: 8px;
  top: -10px;
  text-align: center;
}

.primicia-titulo {
  font-size: 2rem;
  color: #f4f4f4;
  font-family: 'Merriweather Sans', sans-serif;
  letter-spacing: 0.1rem;
  text-shadow: 2px 2px 4px rgb(0, 0, 0);
}

.fila-1 {
  display: block;
  height: 248px;
  width: 100%;
  margin: 0px;
  background: rgba(0, 0, 0, 0.9) none !important;
  background: none, linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0)) !important;
}

.box-titulo-1 {
  position: relative;
  top: -115px;
  width: auto;
  padding: 20px 10px;
  background: rgba(0, 0, 0, 0.9) none !important;
  background: none, linear-gradient(180deg, rgba(0, 0, 0, 0) 5%, rgb(0, 0, 0)) !important;
}

.hour-1 {
  color: rgb(255, 255, 255);
  font-family: 'Merriweather Sans', sans-serif;
  text-shadow: 2px 2px 4px rgb(0, 0, 0);
  font-weight: 300;
  position: relative;
  right: 8px;
  top: -10px;
  text-align: center;
}

.prim-titulo-1 {
  font-size: 1.3rem;
  color: white;
  text-shadow: 2px 2px 4px rgb(0, 0, 0);
  font-family: 'Merriweather Sans', sans-serif;
  letter-spacing: 0.1rem;
}

.fila-2 {
  display: block;
  width: 100%;
  height: 248px;
  position: relative;
  top: -110px;
  margin: 0;
  background: rgba(0, 0, 0, 0.9) none !important;
  background: none, linear-gradient(180deg, rgba(0, 0, 0, 0) 90%, rgb(0, 0, 0)) !important;
}

.box-titulo-2 {
  position: relative;
  background: rgba(0, 0, 0, 0.9) none !important;
  background: none, linear-gradient(180deg, rgba(0, 0, 0, 0) 5%, rgb(0, 0, 0)) !important;
  top: -228px;
  padding: 20px 10px;
}

.hour-2 {
  color: rgb(255, 255, 255);
  font-family: 'Merriweather Sans', sans-serif;
  text-shadow: 2px 2px 4px rgb(0, 0, 0);
  font-weight: 300;
  position: relative;
  right: 8px;
  top: -10px;
  text-align: center;
}

.prim-titulo-2 {
  width: auto;
  font-size: 1.3rem;
  color: white;
  text-shadow: 2px 2px 4px rgb(0, 0, 0);
  font-family: 'Merriweather Sans', sans-serif;
  letter-spacing: 0.1rem;
}

/* MEDIDA CELULAR PEQUEÑO (XS)  */
@media screen and (min-width: 140px) and (max-width: 320.98px) and (orientation: portrait) {
  .padre {
    padding: 5px;
  }

  .col-12 {
    height: auto;
  }

  .fila-0 {
    height: 250px;
    box-shadow: none;
    width: 100%;
    margin-bottom: 50px;
  }

  .box-titulo {
    padding: 10px 10px;
    position: relative;
    top: -178px;
    bottom: 100%;
    background: rgba(0, 0, 0, 0.829) none !important;
    background: none,
      linear-gradient(180deg, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.801)) !important;
  }

  .hour-0 {
    color: rgb(255, 255, 255);
    font-family: 'Merriweather Sans', sans-serif;
    text-shadow: 2px 2px 4px rgb(0, 0, 0);
    font-weight: 300;
    position: relative;
    right: -5px;
    top: -10px;
    text-align: center;
  }

  .primicia-titulo {
    font-size: 1rem;
    font-weight: 500;
    padding: 0px 20px;
    color: white;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 57%);
    font-family: 'Merriweather Sans', sans-serif;
  }

  .fila-1 {
    display: block;
    height: 250px;
    width: 100%;
    margin: 0px;
    position: relative;
    top: -100px;
  }

  .box-titulo-1 {
    padding: 10px 20px;
    position: relative;
    top: -210px;
    background: rgba(0, 0, 0, 0.829) none !important;
    background: none,
      linear-gradient(180deg, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.801)) !important;
  }

  .hour-1 {
    color: rgb(255, 255, 255);
    font-family: 'Merriweather Sans', sans-serif;
    text-shadow: 2px 2px 4px rgb(0, 0, 0);
    font-weight: 300;
    position: relative;
    right: 8px;
    top: -10px;
    text-align: center;
  }

  .prim-titulo-1 {
    width: auto;
    font-family: 'Merriweather Sans', sans-serif;
    font-weight: 400;
    text-align: start;
    font-size: 1rem;
  }

  .fila-2 {
    display: block;
    width: 100%;
    height: 250px;
    position: relative;
    top: -150px;
    margin: 0;
  }

  .box-titulo-2 {
    padding: 10px 20px;
    position: relative;
    top: -258px;
    background: rgba(0, 0, 0, 0.829) none !important;
    background: none,
      linear-gradient(180deg, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.801)) !important;
  }

  .hour-2 {
    color: rgb(255, 255, 255);
    font-family: 'Merriweather Sans', sans-serif;
    text-shadow: 2px 2px 4px rgb(0, 0, 0);
    font-weight: 300;
    position: relative;
    right: 8px;
    top: -10px;
    text-align: center;
  }

  .prim-titulo-2 {
    font-size: 1rem;
    width: 100%;
    font-family: 'Merriweather Sans', sans-serif;
    font-weight: 400;
  }
}

/* MEDIDA CELULAR MEDIANO (M)  */
@media (min-width: 321px) and (max-width: 378.98px) and (orientation: portrait) {
  .padre {
    padding: 5px;
  }

  .col-12 {
    height: auto;
  }

  .fila-0 {
    height: 250px;
    box-shadow: none;
    width: 100%;
    margin-bottom: 50px;
  }

  .box-titulo {
    padding: 10px 10px;
    position: relative;
    top: -160px;
    bottom: 100%;
    background: rgba(0, 0, 0, 0.829) none !important;
    background: none,
      linear-gradient(180deg, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.801)) !important;
  }

  .hour-0 {
    color: rgb(255, 255, 255);
    font-family: 'Merriweather Sans', sans-serif;
    text-shadow: 2px 2px 4px rgb(0, 0, 0);
    font-weight: 300;
    position: relative;
    right: -5px;
    top: -10px;
    text-align: center;
  }

  .primicia-titulo {
    font-size: 1rem;
    font-weight: 500;
    padding: 0px 20px;
    color: white;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 57%);
    font-family: 'Merriweather Sans', sans-serif;
  }

  .fila-1 {
    display: block;
    height: 250px;
    width: 100%;
    margin: 0px;
    position: relative;
    top: -100px;
  }

  .box-titulo-1 {
    padding: 10px 20px;
    position: relative;
    top: -210px;
    background: rgba(0, 0, 0, 0.829) none !important;
    background: none,
      linear-gradient(180deg, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.801)) !important;
  }

  .hour-1 {
    color: rgb(255, 255, 255);
    font-family: 'Merriweather Sans', sans-serif;
    text-shadow: 2px 2px 4px rgb(0, 0, 0);
    font-weight: 300;
    position: relative;
    right: 8px;
    top: -10px;
    text-align: center;
  }

  .prim-titulo-1 {
    width: auto;
    font-family: 'Merriweather Sans', sans-serif;
    font-weight: 400;
    text-align: start;
    font-size: 1rem;
  }

  .fila-2 {
    display: block;
    width: 100%;
    height: 250px;
    position: relative;
    top: -150px;
    margin: 0;
  }

  .box-titulo-2 {
    padding: 10px 20px;
    position: relative;
    top: -258px;
    background: rgba(0, 0, 0, 0.829) none !important;
    background: none,
    linear-gradient(180deg, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.801)) !important;
  }

  .hour-2 {
    color: rgb(255, 255, 255);
    font-family: 'Merriweather Sans', sans-serif;
    text-shadow: 2px 2px 4px rgb(0, 0, 0);
    font-weight: 300;
    position: relative;
    right: 8px;
    top: -10px;
    text-align: center;
  }

  .prim-titulo-2 {
    font-size: 1rem;
    width: 100%;
    font-family: 'Merriweather Sans', sans-serif;
    font-weight: 400;
  }
}
/* MEDIDA CELULAR  GRANDE ( L)  */
@media (min-width: 379px) and (max-width: 575.98px) and (orientation: portrait) {
  .padre {
    padding: 5px;
  }

  .col-12 {
    height: auto;
  }

  .fila-0 {
    height: 250px;
    box-shadow: none;
    width: 100%;
    margin-bottom: 50px;
  }

  .box-titulo {
    padding: 10px 10px;
    position: relative;
    top: -160px;
    bottom: 100%;
    background: rgba(0, 0, 0, 0.829) none !important;
    background: none,
      linear-gradient(180deg, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.801)) !important;
  }

  .hour-0 {
    color: rgb(255, 255, 255);
    font-family: 'Merriweather Sans', sans-serif;
    text-shadow: 2px 2px 4px rgb(0, 0, 0);
    font-weight: 300;
    position: relative;
    right: -5px;
    top: -10px;
    text-align: center;
  }

  .primicia-titulo {
    font-size: 1rem;
    font-weight: 500;
    padding: 0px 20px;
    color: white;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 57%);
    font-family: 'Merriweather Sans', sans-serif;
  }

  .fila-1 {
    display: block;
    height: 250px;
    width: 100%;
    margin: 0px;
    position: relative;
    top: -100px;
  }

  .box-titulo-1 {
    padding: 10px 20px;
    position: relative;
    top: -190px;
    background: rgba(0, 0, 0, 0.829) none !important;
    background: none,
      linear-gradient(180deg, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.801)) !important;
  }

  .hour-1 {
    color: rgb(255, 255, 255);
    font-family: 'Merriweather Sans', sans-serif;
    text-shadow: 2px 2px 4px rgb(0, 0, 0);
    font-weight: 300;
    position: relative;
    right: 8px;
    top: -10px;
    text-align: center;
  }

  .prim-titulo-1 {
    width: auto;
    font-family: 'Merriweather Sans', sans-serif;
    font-weight: 400;
    text-align: start;
    font-size: 1rem;
  }

  .fila-2 {
    display: block;
    width: 100%;
    height: 250px;
    position: relative;
    top: -150px;
    margin: 0;
  }

  .box-titulo-2 {
    padding: 10px 20px;
    position: relative;
    top: -240px;
    background: rgba(0, 0, 0, 0.829) none !important;
    background: none,
      linear-gradient(180deg, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.801)) !important;
  }

  .hour-2 {
    color: rgb(255, 255, 255);
    font-family: 'Merriweather Sans', sans-serif;
    text-shadow: 2px 2px 4px rgb(0, 0, 0);
    font-weight: 300;
    position: relative;
    right: 8px;
    top: -10px;
    text-align: center;
  }

  .prim-titulo-2 {
    font-size: 1rem;
    width: 100%;
    font-family: 'Merriweather Sans', sans-serif;
    font-weight: 400;
  }
}
/* MEDIDA CELULAR  TABLET (S) 
/* @media screen and (min-width: 768px) and (max-width: 991.98px) {
  .padre {
    padding: 5px;
  }

  .fila-0 {
    height: 300px;
    box-shadow: none;
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
  }

  .fila-1 {
    display: block;
    height: 140px;
    width: 100%;
    margin: 0px;
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
} */
/* @media screen and (min-width: 992px) and (max-width: 1199.98px) {
  .padre {
    padding: 10px 20px;
    margin-bottom: 50px;
  }

  .fila-0 {
    height: 450px;
    box-shadow: 2px 5px 10px 5px #31015821;
  }

  .primicia-titulo {
    position: relative;
    top: -110px;
    font-size: 1.8rem;
    padding: 0px 20px;
    color: white;
    font-family: 'Ubuntu', sans-serif;
    filter: saturate(250%);
    letter-spacing: 0.1rem;
  }

  .fila-1 {
    display: block;
    height: 210px;
    width: 100%;
    margin: 0px;
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
    letter-spacing: 0;
  }

  .fila-2 {
    display: block;
    width: 100%;
    height: 210px;
    position: relative;
    top: -45px;
    margin: 0;
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
    letter-spacing: 0;
  }
} */
/* @media screen and (min-width: 1200px) and (max-width: 1399.98px) {
  .padre {
    padding: 10px 20px;
    margin-bottom: 50px;
  }

  .fila-0 {
    height: 450px;
    box-shadow: 2px 5px 10px 5px #31015821;
  }

  .primicia-titulo {
    position: relative;
    top: -110px;
    font-size: 1.8rem;
    padding: 0px 20px;
    color: white;
    font-family: 'Ubuntu', sans-serif;
    filter: saturate(250%);
    letter-spacing: 0.1rem;
  }

  .fila-1 {
    display: block;
    height: 210px;
    width: 100%;
    margin: 0px;
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
    letter-spacing: 0;
  }

  .fila-2 {
    display: block;
    width: 100%;
    height: 210px;
    position: relative;
    top: -25px;
    margin: 0;
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
    letter-spacing: 0;
  }
} */

/* @media (min-width: 1400px) and (max-width: 1919.98px) {
  .padre {
    padding: 10px 30px;
    margin-bottom: 50px;
  }

  .fila-0 {
    height: 450px;
    box-shadow: 2px 5px 10px 5px #31015821;
  }

  .primicia-titulo {
    position: relative;
    top: -110px;
    font-size: 1.8rem;
    padding: 0px 20px;
    color: white;
    font-family: 'Ubuntu', sans-serif;
    filter: saturate(250%);
    letter-spacing: 0.1rem;
  }

  .fila-1 {
    display: block;
    height: 210px;
    width: 100%;
    margin: 0px;
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
    letter-spacing: 0;
  }

  .fila-2 {
    display: block;
    width: 100%;
    height: 210px;
    position: relative;
    top: -18px;
    margin: 0;
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
    letter-spacing: 0;
  }
} */
</style>

<script>
import axios from 'axios'
import moment from 'moment'
require('moment/locale/es-mx')

export default {
  name: 'Destacados',

  data() {
    return {

      destacados:[],  
    
      tituloUno:'',
      tituloDos:'',
      tituloTres:'',


      imagenUno:'',
      imagenDos:'',
      imagenTres:'',
      moment: moment,
    }
  },

  async mounted() {
    try {
      const res = await axios.get(
        'https://losmaster.xyz/wp-json/wp/v2/destacados'
      )

      this.destacados = res.data

      this.tituloUno = res.data[0].title.rendered
      this.tituloDos = res.data[1].title.rendered
      this.tituloTres = res.data[2].title.rendered

      this.imagenUno = res.data[0].one_call.featured_list.source_url
      this.imagenDos = res.data[1].one_call.featured_list.source_url
      this.imagenTres = res.data[2].one_call.featured_list.source_url
      console.log(this.destacadoUno)
  

    } catch (error) {
      err = error
    }
  },
}
</script>