<template>
  <div>


    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div
          class="col-12 col-md-4 col-lg-3"
          v-for="( post , index) of posts.slice(0,20)"
          :key="post.id + '_' + index"
        >
          <Post
            :id="post.id"
            :imagen="post.imagen[0].url"
            :titulo="post.titulo"
            :categoria="post.categorias[0].titulo"
            :hyf="moment(post.published_at).fromNow('es-us')"
            :slug="post.slug"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Post from '@/components/Post.vue'
import axios from 'axios'
import moment from 'moment'
require('moment/locale/es-mx')

export default {
//  head() {
//     return {
//       title: this.posts.titulo,
//       meta:[
//         {
//           hid:'description',
//           name: 'description',
//           content:this.posts.titulo,
          
//         },
//         { 
     
//         hid: 'og:url', 
//         property: 'og:url', 
//         content: `https://quepasanews.info/${this.posts.id}` 
        
//       },

//       {
//         hid: 'og:title',
//         property: 'og:title',
//         content: this.posts.titulo
//       },

//           {
//         hid: 'og:description',
//         property: 'og:description',
//         content: this.posts.titulo
//       },

//       {
//         hid: 'og:image',
//         property: 'og:image',
//         content: this.imagen
//       },
        
//       ]
//     }
//   },

  components: {
    Post,
  },

  data() {
    return {
      posts: [],
      moment: moment,
    }
  },

  async mounted() {
    try {
      const res = await axios.get(
        'https://que-pasa-strapi.herokuapp.com/noticias'
      )
      this.posts = res.data.reverse()
    } catch (error) {
      err = error
    }
  },
}
</script>