  <template>
  <v-container class="grey lighten-5 mb-6">
  <v-row>
    <v-col cols="12" md="6" >
        <v-card class="mx-auto" max-width="800px">
          <v-img
            class="white--text align-end"
            height="500px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>{{ tituloDos }}</v-card-title>
          </v-img>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="mx-auto" max-width="800px">
          <v-img
            class="white--text align-end"
            height="240px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>{{ tituloDos }}</v-card-title>
          </v-img>
        </v-card>

        <v-card class="mx-auto" max-width="800px">
          <v-img
            class="white--text align-end"
            height="240px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>{{ tituloDos }}</v-card-title>
          </v-img>
        </v-card>
      </v-col>
  </v-row>

  </v-container>
</template>




<script>
import axios from 'axios'
import moment from 'moment'
require('moment/locale/es-mx')

export default {
  name: 'Destacados',

  data() {
    return {
      destacados: [],

      tituloUno: '',
      tituloDos: '',
      tituloTres: '',

      imagenUno: '',
      imagenDos: '',
      imagenTres: '',
      moment: moment,
    }
  },

  async mounted() {
    try {
      const res = await axios.get(
        'https://losmaster.xyz/wp-json/wp/v2/destacados'
      )

      this.destacados = res.data
      console.log(this.destacados)
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