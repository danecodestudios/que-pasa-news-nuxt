<template>
  <div>
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
export default {
  components: {
    Noticias,
    Destacados,
  },
}
</script>

