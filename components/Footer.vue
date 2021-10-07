<template>
   <div>
         <!--- Footer --->
    <footer>
      <div class="jumbotron jumbotron-fluid bg-footer p-4 mt-5 mb-0">
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 cizgi">
              <div class="bg-footer border-0">
                <div class="text-light text-center">
                  <a href="#" class="text-light d-block lead"
                    >IR ARRIBA
                    <span><i class="fas fa-arrow-circle-up"></i></span
                  ></a>
                  <h3 class="text-white display-4 fuente-4">QUE PASA</h3>
                  <p class="d-inline lead fuente-5">
                    TODOS LOS DERECHOS RESERVADOS © 2021<br />
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 cizgi">
              <div class="bg-footer border-0">
                <div class="text-center">
                  <h5 class="text-white display-4 fuente-4">CONTACTO</h5>
                  <a
                    class="text-light d-block lead fuente-5"
                    style="margin-left: -20px"
                    href="#"
                    ><i class="fa fa-phone mr-2"></i> +(57) 304 275 3625</a
                  >
                  <a class="text-light d-block lead fuente-5" href="#"
                    ><i class="fa fa-envelope mr-2"></i> danecodsas@gmail.com</a
                  >
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
              <div class="bg-footer border-0">
                <div class="text-center">
                  <h5 class="text-white display-4 fuente-4">
                    Nuestras Redes Sociales
                  </h5>
                  <a class="text-light" href="https://www.facebook.com/EdsonRafaelForbes"
                    ><i class="fa fa-facebook-square fa-fw fa-2x"></i
                  ></a>
                  <a class="text-light" href="#"
                    ><i class="fa fa-twitter-square fa-fw fa-2x"></i
                  ></a>
                  <a class="text-light" href="#"
                    ><i class="fa fa-instagram fa-fw fa-2x"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!--# Footer #-->
   </div>
</template>



<style scoped>
/* ====================  FOOTER =============================== */

.fuente-4 {
  font-size: 20px;
  text-align: center;
}

.fuente-5 {
  font-size: 10px;
  text-align: center;
}

a {
  text-decoration: none;
}

footer .bg-footer {
  background-color: #30026b;
}

footer a.text-light:hover {
  color: #04ff3a !important;
  text-decoration: none;
}
footer .cizgi {
  border-right: 1px solid #04ff3a;
}

/* ======================== FIN DE FOOTER ======================*/
</style>


<script>

export default {
    name : 'Footer',
      data() {
    return {}
  },
}
</script>