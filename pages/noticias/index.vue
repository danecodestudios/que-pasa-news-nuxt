<template>
  <div>


    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div
          class="col-12 col-md-4 col-lg-3"
          v-for="( post , index) of posts"
          :key="post.id + '_' + index"
        >
          <Post
            :id="post.id"
            :imagen="post.one_call.featured_list.source_url"
            :titulo="post.title.rendered"
            :categoria="post.one_call.categories_list[0].name"
            :hyf="moment(post.date).fromNow('es-us')"
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
// ================= PETICION LISTA DE TODOS LOS POSTS  ==================================
      const res = await axios.get('https://losmaster.xyz/wp-json/wp/v2/posts')
      this.posts = res.data
 

    } catch (error) {
      err = error
    }
  },
}
</script>