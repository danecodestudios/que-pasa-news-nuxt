<template>
  <div class="blog-post bb">
    <div class="container imagen-caja">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-12 col-md-10">
          <img class="img_posts" :src="imagen" alt="" />
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12 col-md-3"></div>

        <div class="col-12 col-md-6">
          <div class="container tarjeta">
            <div class="card-head">
              <div class="cat">{{ categoria }}</div>
              <h1 class="title">{{ titulo }}</h1>
            </div>

            <div class="card-body">
              <div v-html="contenido"></div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-3">

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import moment from 'moment'
require('moment/locale/es-mx')

export default {
  data() {
    return {
      posts: {},
      imagen: '',
      titulo: '',
      contenido: '',
      categoria:'',
      moment: moment,
    }
  },

  head() {
    return {
      title: this.titulo,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Que Pasa news',
        },
      ],
    }
  },

  computed: {},

  

  async mounted() {
        try {
       // ================= PETICION LISTA DE TODOS LOS POSTS  ==================================
        const url = 'https://losmaster.xyz/wp-json/wp/v2/posts?slug='
        const res = await axios.get(`${url}${this.$route.params.slug}`)
        this.posts = res.data

      // =======================================================================
        this.imagen = res.data[0].one_call.featured_list.source_url
        this.titulo = res.data[0].title.rendered
        this.contenido = res.data[0].content.rendered

    // ================= PETICION CATEGORIA  ==================================
      let _id = res.data[0].categories[0];
      const resCategorias = await axios.get( `${'https://losmaster.xyz/wp-json/wp/v2/categories/'}${_id}`)
      this.categoria = resCategorias.data.name

        console.log(this.categoria)
      } catch (error) {}
  },
}
</script>

<style scoped="true" lang="css">
@import url('https://fonts.googleapis.com/css2?family=Bitter:wght@400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

/* STYLOS RELACIONADOS */

.relacionado {
  padding: 10px;
  display: flex;
  justify-content: center;
}

.card-relacionado {
  margin: 10px;
  display: flex;
  flex-wrap: nowrap;
  min-width: 200px;
  justify-content: center;
}

.card-imagen {
  width: 100%;
  height: 120px;
  object-fit: cover;
  filter: saturate(120%);
  position: relative;
  display: block;
  margin-top: auto;
  margin-bottom: auto;
}

/* ============================= */

.title {
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 2.8rem;
  font-weight: 900;
  margin-bottom: 50px;
  padding-top: 60px;
  text-align: initial;
  width: 100%;
}
.imagen-caja {
  margin-top: 25px;
}
.tarjeta {
  background-color: rgb(255, 255, 255);
  border-radius: 13px;
  position: relative;
  bottom: 70px;
  box-shadow: -8px 4px 17px 6px rgba(193, 193, 193, 0.082);
}
.blog-post {
  margin-top: 100px;
}
.img_posts {
  width: 100% !important;
  max-height: 800px;
  border-radius: 2px;
}
.cat {
  background-color: #250167;
  text-transform: uppercase;
  top: -18px;
  position: absolute;
  color: white;
  padding: 5px 20px;
  border-radius: 5px;
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: 400;
}
/* MEDIDA CELULAR PEQUEÑO (XS)  */
@media screen and (min-width: 240px) and (max-width: 575.98px) {
  .title {
    font-size: 25px;
    font-weight: 900;
  }
  img {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  .tarjeta {
    background-color: rgb(255, 255, 255);
    border-radius: 13px;
    position: relative;
    bottom: 5px;
    box-shadow: rgba(255, 255, 255, 0.15) 1.95px 1.95px 2.6px;
  }
  .cat {
    background-color: #250167;
    text-transform: uppercase;
    top: -18px;
    position: absolute;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
  }
}
/* MEDIDA CELULAR  MEDIANO (M Y L)  */
@media screen and (min-width: 576px) and (max-width: 767.98px) {
}
/* MEDIDA CELULAR  TABLET (S)  */
@media screen and (min-width: 768px) and (max-width: 991.98px) {
}
@media (min-width: 992px) and (max-width: 1199.98px) {
}
@media (min-width: 1200px) and (max-width: 1399.98px) {
}
</style>