export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    return {
      title: 'Que Pasa News || Aplicacion Web De Noticias ',
      htmlAttrs: {
        lang: 'es'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'La Web De Noticias De Barranquilla, Atlantico, Costa Caribe Colombiana, Colombia Y el Mundo' },

        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [{
        src: 'https://kit.fontawesome.com/b6939f5080.js'
      }, {

      }],
    }
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/static/css/main.css',
    '@/static/css/bootstrap.css',
    '@/static/css/bootstrap-grid.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [


  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics'
  ],

  googleAnalytics: {
    id: 'G-0TDGLJHNW4'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }
  }
}
