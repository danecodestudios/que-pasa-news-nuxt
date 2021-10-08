<template>
  <div>
    <div>
      <Nav />
    </div>

    <div class="main-content">
      <Nuxt />
    </div>

    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Nav from '@/components/Nav.vue'
export default {
  components: {
    Footer,
    Nav,
  },
}
</script>


<style>
.main-content {
  min-height: 100vh;
  margin-top: 100px;
}
</style>