<template>
  <div>

    <div>
      <Nav />
    </div>
    <div>
      <Destacados />
    </div>

    <div>
      <Noticias />
    </div>
  </div>
</template>

<script>
import Noticias from '@/pages/noticias/index.vue'
import Destacados from '@/components/Destacados.vue'
import Nav from '@/components/Nav.vue'
export default {

head(){
  return{
title:'Que Pasa News || Home',
      meta:[
        {
          hid:'description',
          name: 'description',
          content:'Pagina De Inicio De Que Pasa News',
          
        },
      ]
  }
},

  components: {
    Noticias,
    Destacados,
    Nav
  },
}
</script>

