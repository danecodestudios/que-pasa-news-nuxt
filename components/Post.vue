<template>
  <div>
    <NuxtLink :to="'/noticias/' + id">
      <div class="card">
        <img :src="imagen" class="card-img-top card-imagen" :alt="titulo" />
        <div class="card-body">
             <span class = "tag "> {{categoria}} </span> 
          <h5 class="card-title">{{ titulo }}</h5>
        </div>
        <div class="card-footer">
          <p class="card-text">
            <small class="text-fecha text-muted ">Publicado Hace : <i class="far fa-clock "></i> {{ hyf }} </small>
          
          </p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style lang="css"  scoped="true">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bitter:wght@400;500&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
.card {
  display: flex;
  justify-content: center;
  background-color: rgb(255, 255, 255);
  border-radius: 0.6rem;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-imagen {
  width: 100%;
  height: 200px;
  object-fit: cover;
  filter: saturate(120%);
  position: relative;
  display: block;
  margin-top: auto;
  margin-bottom: auto;

}

.card-imagen:hover {
  transition: opacity 1s cubic-bezier(0.39, 0.575, 0.565, 1);
  filter: saturate(180%);
  cursor: pointer;

}

.card-body {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 150px;
}

.card-body h5 {
  font-family: 'Merriweather Sans', sans-serif;
  text-align: inherit;
  font-size: 1rem;
}

.tag {
  background-color: #310158;
  color: #1eff00;
  border-radius: 5px;
  font-size: 14px;
  margin: 0;
  padding: 3px 10px;
  text-transform: uppercase;
  position: absolute;
  top: 48%;
  right: .5rem;
  font-family: 'Merriweather Sans', sans-serif;
}



a {
  color: rgb(0, 0, 0);
  text-decoration: none;
}

a:hover {
  color: #040d8a;
}

.hyf {
  position: absolute;
  bottom: 1%;
  right: 0;
  margin-right: 20px;
  color: #04f310;
}

.text-fecha{
    color: #04f354;
}

.fa-clock{
    color: #040d8a;
}

@media screen and (min-width: 768px) and (max-width: 991.98px){
  .card-body h5 {
  font-family: 'Merriweather Sans', sans-serif;
  text-align: inherit;
  font-size: .8rem;

  }
}


@media screen and (min-width: 992px) and (max-width: 1199.98px){
  
.card-body h5 {
  font-size: .8rem;
}


}

@media screen and (min-width: 1200px) and (max-width: 1399.98px){
.card-title{
  font-family: 'Merriweather Sans', sans-serif;
  text-align: inherit;
  font-size: 1rem;
  color: white;
}
}

</style>


<script>
export default {
  name: 'Post',
  props: ['id', 'imagen', 'titulo', 'categoria', 'hyf', 'slug'],

  

  data() {
    return {}
  },
}
</script>


