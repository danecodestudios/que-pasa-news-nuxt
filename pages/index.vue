<template>
  <div>

    <div>
      <Nav />
    </div>
    <div >
      <Destacados />
    </div>

    <v-container class="noticias">
      <Noticias />
    </v-container>
  </div>
</template>

<style scoped>
/* .noticias{
  position: relative;
  top: -150px;
} */
</style>

<script>
import Noticias from '@/pages/noticias/index.vue'
import Destacados from '@/components/Destacados.vue'
import Nav from '@/components/Nav.vue'
export default {

// head(){
//   return{
// title:'Que Pasa News || Home',
//       meta:[
//         {
//           hid:'description',
//           name: 'description',
//           content:'La Web De Noticias De Barranquilla, Atlantico, Costa Caribe Colombiana, Colombia Y el Mundo',
          
//         },
//       ]
//   }
// },

  components: {
    Noticias,
    Destacados,
    Nav
  },
}
</script>

