<template>
  <div class="blog-post bb">
    <div class="container imagen-caja">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-12 col-md-8">
          <img class="img_posts" :src="imagen" alt="" />
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12 col-md-3"></div>

        <div class="col-12 col-md-6">
          <div class="container tarjeta">
            <div class="card-head">
              <div class="cat">{{ categoria }}</div>
            </div>

            <div class="card-body">
              <h1 class="card-title title">{{ posts.titulo }}</h1>

              <div v-html="contenido"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import moment from 'moment'
import marked from 'marked'
require('moment/locale/es-mx')

export default {
  head() {
    return {
      title: this.posts.titulo,
      meta:[
        {
          hid:this.contenido,
          name :this.posts.slug,
          content:this.slug,
          description:this.slug 
        }
      ]
    }
  },


  data() {
    return {
      posts: {},
      contenido: {},
      imagen: {},
      categoria: {},
      slug:{},
      moment: moment,
    }
  },

  async mounted() {
    try {
      const res = await axios.get(
        'https://que-pasa-strapi.herokuapp.com/noticias/' +
          this.$route.params.id
      )
      this.posts = res.data
      this.contenido = marked(res.data.descripcion)
      this.imagen = res.data.imagen[0].url
      this.categoria = res.data.categorias[0].titulo
      this.slug = res.data.slug
    } catch (error) {
      err = error
    }
  },
}
</script>

<style scoped="true" lang="css">
@import url('https://fonts.googleapis.com/css2?family=Bitter:wght@400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

.title {
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 50px;
  margin-top: 30px;
  text-align: center;
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
  height: 100%;
  border-radius: 20px;
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