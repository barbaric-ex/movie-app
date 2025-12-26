<template>
  <navbar></navbar>
  <h1>My List</h1>
  <div class="container">
    <MovieCard
      @remove-movie="removeThisMovie"
      v-for="movie in myMovies"
      :key="movie.id"
      :movie="movie"
    />
  </div>
</template>

<script setup>
import { ref, inject, onMounted, watch } from 'vue'
import Navbar from '@/components/Navbar/Navbar.vue'
import MovieCard from '@/components/MovieCard/MovieCard.vue'

const myMovies = inject('my-movies', ref([]))

function removeThisMovie(movieId) {
  const index = myMovies.value.findIndex(movie => movie.id === movieId)
  if (index !== -1) {
    myMovies.value.splice(index, 1)
    localStorage.setItem('myMovies', JSON.stringify(myMovies.value))
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 30px;
}
.container {
  max-width: 85%;
  margin: auto;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 50px;
}
</style>
