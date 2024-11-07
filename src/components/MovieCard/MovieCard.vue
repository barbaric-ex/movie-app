<template>
  <div class="card_wrap">
    <div class="abs_wrap"></div>
    <div class="image_wrap" :style="{ backgroundImage: `url(${movie.image})` }">
      <div class="hower_wrap">
        <a href="#" @click.prevent="seeDetail" class="detail_btn">See more</a>

        <a
          v-if="route.path === '/my-movies'"
          href="#"
          @click.prevent="removeMovie"
          class="remove_btn"
          ><i class="bi bi-trash3-fill"></i
        ></a>
      </div>
    </div>
  </div>

  <div
    class="detail_wrap"
    :style="{ backgroundImage: `url(${movie.image})` }"
    v-if="viewDetail"
  >
    <div class="overlay">
      <h3>{{ movie.name }}</h3>
      <h2>Genre</h2>
      <h5>{{ movie.genre }}</h5>
      <h2>Rating</h2>
      <h5>{{ movie.rating }}</h5>
      <h2>Description</h2>
      <p>{{ movie.description }}</p>

      <a class="movie_link" :href="movie.link">IMBD link</a>
      <a
        class="add_movie"
        href="#"
        @click.prevent="addMovie"
        v-if="route.path === '/'"
        >Add to my list</a
      >
      <button class="hied_detail" @click="hideDetail">
        <i class="bi bi-x-circle-fill"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const props = defineProps(['movie'])
const emit = defineEmits(['add-movie', 'remove-movie'])

function removeMovie() {
  emit('remove-movie', props.movie.id)
}

const viewDetail = ref(false)

function seeDetail() {
  viewDetail.value = true
}

function hideDetail() {
  viewDetail.value = false
}

function addMovie() {
  console.log('Dodajem film:', props.movie)
  emit('add-movie', props.movie) // Emituje događaj s podacima o filmu
}
</script>

<style>
.detail_wrap {
  z-index: 11111;
  position: fixed;
  max-width: 500px;
  width: 100%;
  height: 500px;
  background: #000;
  color: #fff;
  top: 100px;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  background-position: center;
  background-size: cover;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
}

.movie_link {
  text-decoration: none;
  color: gold;
}

.detail_wrap h3 {
  font-size: 32px;
  color: red;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.detail_wrap .overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0000007e;
}

.detail_wrap p {
  padding: 0 25px;
}
.card_wrap {
  width: 280px;
  height: 350px;
  margin-bottom: 40px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
.card_wrap .image_wrap {
  background-image: url(src/assets/img/gladijator.jpg);
  background-position: center;
  background-size: cover;
  padding: 20px 10px;
  height: 100%;
  text-align: center;
  color: #fff;
  box-shadow: 0 0 8px #000;
}
.card_wrap .image_wrap h3 {
  font-size: 30px;
}
.card_wrap .image_wrap h4 {
  margin: 10px;
  font-size: 25px;
}
.card_wrap .image_wrap h5 {
  margin: 0 0 25px 0;
  font-size: 22px;
}
h5 {
  color: gold;
  font-size: 21px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 10px 0;
}
.card_wrap {
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.card_wrap:hover {
  transform: translateY(-15px);
}

.card_wrap:hover .hower_wrap {
  opacity: 1;
}

.abs_wrap {
  position: absolute;
  width: 100%;
  height: 0px;
  background-color: #00000088;
  transition: 0.3s ease;
  z-index: 1;
}

.card_wrap a {
  text-decoration: none;
  margin-top: 35px;
  background: red;
  padding: 3px 10px;
  border-radius: 4px;
  color: #fff;
  position: relative;
  z-index: 1111;
  margin-left: 10px;
}

.detail_wrap {
}

.card_wrap a.detail_btn {
  background: greenyellow;
  color: #000;
}

a.add_movie {
  text-decoration: none;

  background: red;
  padding: 5px 13px;
  border-radius: 4px;
  color: #fff;
  position: absolute;
  z-index: 1111;
  margin-left: 10px;
  right: 15px;
  bottom: 10px;
}

.hied_detail {
  position: absolute;
  right: 10px;
  top: 10px;
  color: red;
  font-weight: bold;
  cursor: pointer;
  font-size: 25px;
  background: transparent;
  border: none;
}

@media (min-width: 992px) {
  .card_wrap:hover .abs_wrap {
    height: 350px;
  }

  .hower_wrap {
    opacity: 0;
    transition: 0.3s ease;
    z-index: 11;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 991px) {
  .abs_wrap {
    position: absolute;
    width: 100%;
    height: 350px;
    background-color: #00000000;
    transition: 0.3s ease;
    z-index: 1;
  }
}
</style>
