<template>
  <div class="container">
    <table class="Jzru1c">
      <tbody class="ta-body">
        <tr>
          <th scope="col">EQUIPO</th>
          <th scope="col">PJ</th>
          <th scope="col">PG</th>
          <th scope="col">PE</th>
          <th scope="col">PP</th>
          <th scope="col">GF</th>
          <th scope="col">GC</th>
          <th scope="col">DG</th>
          <th scope="col">PUNTOS</th>
        </tr>
        <tr v-for="i of posts" :key="i.id" class="imso-loa imso-hov">
          <td class="e9fBA nwxKge snctkc CuWfJb xL0E7c"></td>

          <td class="fbf28d e9fBA wxNiFd B1pJhb AXYSPc">
            <div class="Rqwdve RQCbNe" style="border-bottom-color: #fff">
              <div class="Xne9qe"></div>
            </div>

            <div class="gDo0uc tgaaSb xL0E7c snctkc">
              <div class="iU5t0d">{{ i.Posision }}</div>
            </div>

            <div class="tgaaSb xL0E7c snctkc">
              <span class="iU5t0d b8Oacc fz3Rib">
                <img
                  :src="i.Logo[0].url"
                  alt=""
                  style="width:24px;height:24px"
                  class="imso_btl__mh-logo"
                />
              </span>
            </div>

            <div class="tgaaSb xL0E7c snctkc" style="width:12px"></div>

          
          </td>

          <td class="tcwpB e9fBA fbf28d snctkc B1pJhb fI7lFd n1i1Xc xL0E7c">
                <div class="e6E1Yd">
                    <div class="imso-hide-overflow GXDoWd C1gYkd">
                        <span class="ellipsisize hsKSJe">  {{ i.Equipo }}</span>
                    </div>
                </div>
          </td>



          <td class="e9fBA xkW0Cc snctkc xL0E7c">{{ i.PJ }}</td>
          <td class="e9fBA xkW0Cc snctkc xL0E7c">{{ i.PG }}</td>
          <td class="e9fBA xkW0Cc snctkc kRLtzc xL0E7c">{{ i.PE }}</td>
          <td class="e9fBA xkW0Cc snctkc kRLtzc xL0E7c">{{ i.PP }}</td>
          <td class="e9fBA xkW0Cc snctkc kRLtzc xL0E7c">{{ i.GF }}</td>
          <td class="e9fBA xkW0Cc snctkc kRLtzc xL0E7c">{{ i.GC }}</td>
          <td class="e9fBA xkW0Cc snctkc xL0E7c">{{ i.DG }}</td>
          <td class="e9fBA xkW0Cc snctkc xL0E7c">{{ i.Puntos }}</td>

          <td class="e9fBA w2Mymf"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style >


</style>


<script>
import axios from 'axios'
import moment from 'moment'
require('moment/locale/es-mx')

export default {
  data() {
    return {
      posts: [],
      categoria: [],
      moment: moment,
    }
  },

  async mounted() {
    try {
      const res = await axios.get(
        'https://que-pasa-strapi.herokuapp.com/liga-colombianas'
      )
      this.posts = res.data
    } catch (error) {
      err = error
    }

    try {
      const res = await axios.get(
        'https://que-pasa-strapi.herokuapp.com/categorias'
      )
      this.categoria = res.data[2].noticias
      console.log(this.categoria)
    } catch (error) {
      err = error
    }
  },
}
</script>