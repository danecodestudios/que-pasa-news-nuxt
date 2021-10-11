<template>
  <header class="header">
    <div class="logo">
      <NuxtLink class="" aria-current="page" to="/"
        ><img src="@/static/logo.png" class="text-logo"
      /></NuxtLink>
    </div>

    <nav class="navbar navbar-expand-lg navbar-style">
      <div class="container-fluid">
        <div class="collapse navbar-collapse">
          <button
            class="navbar-toggler toogler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NuxtLink class="nav-link" aria-current="page" to="/"
                ><i class="fab fa-neos text-white"></i> INICIO </NuxtLink
              >
            </li>

     
          </ul>
        </div>
      </div>
    </nav>

    <div class="radio">
      <div class="play">
        <button @click="sonido()">
          <i v-if="pausa" class="far fa-pause-circle player-icon"></i>

          <i v-if="!pausa" class="far fa-play-circle player-icon"></i>
        </button>
      </div>

      <div class="sidebar-player">
        <h5>Que Pasa Radio</h5>
        <p>EMISORA ONLINE EN VIVO</p>
      </div>
    </div>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;1,300&display=swap');

@import url('https://fonts.googleapis.com/css2? family = Work + Sans: ital, wght @ 1300 & display = swap');

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;1,900&family=Rubik:ital,wght@0,400;0,800;0,900;1,800;1,900&display=swap');

.header {
  display: grid;
  grid-template-columns: 20% 60% 20%;
  border: none;
  background: linear-gradient(90deg, #360258 5%, #360258d5 30% , #360258 15% );
  position: fixed;
  width: 100%;
  z-index: 20;
  top: 0;
   border-top-right-radius: 100px;
   border-bottom-right-radius: 100px;
   

}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
 
}

.text-logo {
    width: 100%;
    height: 60px;
  }

.navbar-style {
  background: #380164;
  box-shadow: -9px 3px 15px 5px rgba(48,1,87,0.28);
  width: 100%;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
}

.nav-link {
  color: white;
  font-weight: 600;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
}

.nav-link {
  color: #00ff55;
}

.nav-link:hover {
  color: #54ff04;
}

.nav-link:active {
  color: white;
}

.radio {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(190deg, #04ec0f 0,  #04ec0f 0, #04ec0f);
  border-radius: 100px 100px / 120px;
  z-index: 20;
  top: 0;
}

.play button {
  padding: 10px;
  border: 0;
  background-color: transparent;
  line-height: 14px;
  -moz-appearance: none;
  appearance: none;
  -webkit-appearance: none;
  display: inline-block;
  vertical-align: middle;
}

.fa-play-circle {
  text-align: center;
  color: #310158;
  font-size: 40px;
}

.fa-pause-circle {
  text-align: center;
  color: #310158;
  font-size: 40px;
}

.sidebar-player h5 {
  font-size: 15px;
  margin-bottom: 0;
  margin-top: 20px;
  margin-left: 5px;
  color: #310158;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  font-weight: 900;
  text-transform: uppercase;
}

.sidebar-player p {
  font-size: 12px;
  color: rgb(0, 0, 0);
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
}

/* ===============================================================
                     RESPONSIVE DESING 
=============================================================== */

/* MEDIDA CELULAR PEQUEÑO (XS)  */
@media screen and (min-width: 240px) and (max-width: 575.98px) {
  .header {
    display: grid;
    grid-template-columns: 50% 0% 50%;
    background-color: black;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0;
    border-bottom-right-radius: 5px;
  }

  .text-logo {
    width: 100%;
    height: 50px;
  }

  /* -------------------------------------------------------------------------------- */

  .radio {
    background: linear-gradient(
      150deg,
      #04ec0f 0,
      #000000 0,
      #04ec0f 0,
      #04ec0f
    );
    border-radius: 10px 100px / 120px;
  }

  .play button {
    padding: 10px;
  }

  .fa-play-circle {
    text-align: center;
    color: #310158;
    font-size: 35px;
  }

  .fa-pause-circle {
    text-align: center;
    color: #310158;
    font-size: 35px;
  }

  .sidebar-player h5 {
    position: relative;
    left: -10px;
    font-size: 13px;
    color: #310158;
    text-align: center;
    font-weight: 800;
  }

  .sidebar-player p {
    position: relative;
    font-size: 7px;
    color: #000000;
    text-align: center;
    right: 7px;
    font-weight: 800;
  }

  /* ====================  FOOTER MOBILE =============================== */

  .fuente-4 {
    font-size: 24px;
    text-align: center;
  }

  .fuente-5 {
    font-size: 14px;
    text-align: center;
  }

  a {
    text-decoration: none;
  }

  footer .bg-footer {
    background-color: #30026b4f;
    border-radius: 20px;
  }

  footer a.text-light:hover {
    color: #04ff3a !important;
    text-decoration: none;
  }
  footer .cizgi {
    border-bottom: 1px solid #04ff3a;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 2px;
    border-right: none;
  }

  /* ======================== FIN DE FOOTER MOBILE ======================*/
}

@media screen and (min-width: 576px) and (max-width: 767.98px) {
  .header {
    display: grid;
    grid-template-columns: 50% 0% 50%;
    background-color: black;
  }

  .text-logo {
    width: 100%;
    padding: 4px;
  }

  .radio {
    background: linear-gradient(
      140deg,
      #04ec0f 0,
      #000000 0,
      #04ec0f 0,
      #04ec0f
    );
    border-radius: 10px 100px / 120px;
    z-index: 2000;
  }

  .sidebar-player h5 {
    position: relative;
    top: -10px;
    font-size: 18px;
    margin-bottom: 0;
    margin-top: 20px;
    margin-left: 5px;
    color: black;
    font-family: "Montserrat", sans-serif;
    text-align: center;
    font-weight: 900;
  }

  .sidebar-player p {
    position: relative;
    top: -10px;
    font-size: 12px;
    margin-bottom: 0;
    color: black;
    font-family: "Montserrat", sans-serif;
    text-align: center;
    font-weight: 900;
    text-transform: uppercase;
  }
}

/* MEDIDA CELULAR  TABLET (S)  */
@media screen and (min-width: 768px) and (max-width: 991.98px) {
  .header {
    display: grid;
    grid-template-columns: 60% 0% 40%;
    background-color: #000000;
    border-bottom-left-radius: 10px;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0;
    border-bottom-right-radius: 5px;
  }

  .text-logo {
    width: 100%;
    height: 60px;
  }

  .collapse .navbar-collapse {
    display: flex;
    justify-content: center;
  }

  .radio {
    background: linear-gradient(
      150deg,
      #04ec0f 0,
      #000000 0,
      #04ec0f 0,
      #04ec0f
    );
    border-radius: 10px 100px / 120px;
  }

  .fa-play-circle {
    position: relative;
    left: -20px;
    text-align: center;
    color: #310158;
    font-size: 50px;
  }

  .fa-pause-circle {
    position: relative;
    left: -20px;
    text-align: center;
    color: #310158;
    font-size: 50px;
  }

  .sidebar-player h5 {
    position: relative;
    left: -10px;
    font-size: 21px;
    color: #310158;
    text-align: center;
  }

  .sidebar-player p {
    position: relative;
    font-size: 12px;
    color: #000000;
    text-align: center;
    right: 7px;
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  .header {
    display: grid;
    grid-template-columns: 20% 50% 30%;
    background-color: black;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0;
    border-bottom-right-radius: 5px;
  }

  .text-logo {
    width: 100%;
    height: 40px;
  }

  .navbar-style {
    background: #310158;
    width: 100%;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
  }

  .nav-link {
    color: white;
    font-weight: 600;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-size: 13px;
  }

  .nav-link {
    color: #00ff55;
  }

  .nav-link:hover {
    color: #54ff04;
  }

  .nav-link:active {
    color: white;
  }

  /* -------------------------------------------------------------------------------- */
}

@media (min-width: 1200px) and (max-width: 1399.98px) {
  .header {
    display: grid;
    grid-template-columns: 20% 50% 30%;
    background-color: black;
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
}

@media (min-width: 1200px) and (max-width: 1399.98px) {
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0;
    border-bottom-right-radius: 5px;
  }

  .text-logo {
    width: 100%;
    height: 50px;
  }
}


</style>


<script>

export default {
 
  data() {
    return {
      audio : null,
      pausa: false,
    }
  },
    mounted() {
    this.$store.commit('initializeSound');
  },
  methods: {
    sonido() {

   
      if (this.pausa == false || this.isSoundEnabled) {
        this.audio = new Audio("http://stream.zeno.fm/5m7yn6bxe48uv")
        this.audio.play()
        this.pausa = true
      } else {
        this.audio.pause()
        this.pausa = false
      }
    },
  },
computed: {
    isSoundEnabled() {
      return this.$store.state.isSoundEnabled;
    },
  }
}
</script>