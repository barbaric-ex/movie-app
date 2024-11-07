<template>
  <navbar></navbar>
  <search-movie v-model="searchQuery"></search-movie>
  <movie-list :movies="filteredMovies"></movie-list>
</template>

<script setup>
import { inject, ref, computed } from 'vue'
import SearchMovie from '@/components/Search/SearchMovie.vue'
import MovieList from '@/components/MovieList/MovieList.vue'
import Navbar from '@/components/Navbar/Navbar.vue'

const allMovies = inject('all-movies')
const searchQuery = ref('')

const filteredMovies = computed(() => {
  return allMovies.value.filter(movie =>
    movie.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})
</script>
