<template>
  <h1>Movie List</h1>
  <div class="container">
    <MovieCard
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
      @add-movie="handleAddMovie"
    />
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'
import MovieCard from '../MovieCard/MovieCard.vue'

const props = defineProps(['movies'])
const myMovies = inject('my-movies') // Uzima myMovies iz provide
const addMovie = inject('add-movie')

function handleAddMovie(movie) {
  addMovie(movie)
  console.log('Film dodan u myMovies:', movie)
  // Provjerava da li film već postoji
  if (!myMovies.value.find(m => m.id === movie.id)) {
    myMovies.value.push(movie) // Dodaje film u myMovies array
  }
}
</script>

<style scoped>
.container {
  max-width: 85%;
  margin: auto;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 50px;
}
h1 {
  text-align: center;
  margin-bottom: 40px;
}
</style>
