<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted, provide } from 'vue'

const allMovies = ref([]) // Lista svih filmova
const myMovies = ref([]) // Lista dodanih filmova

onMounted(async () => {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/barbaric-ex/movie-data/main/movie.json',
    )
    if (!response.ok) {
      throw new Error('Failed to fetch movies')
    }

    const moviesData = await response.json()
    allMovies.value = moviesData

    // Učitaj dodane filmove iz LocalStorage
    const savedMovies = localStorage.getItem('myMovies')
    if (savedMovies) {
      myMovies.value = JSON.parse(savedMovies)
    }
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})

// Metoda za dodavanje filma
function addMovie(movie) {
  myMovies.value.push(movie)
  localStorage.setItem('myMovies', JSON.stringify(myMovies.value)) // Ažuriraj LocalStorage
}

// Provedi myMovies da bude dostupan za cijelu aplikaciju
provide('my-movies', myMovies)
provide('all-movies', allMovies)
provide('add-movie', addMovie) // Dodaj funkciju za dodavanje filma
</script>

<template>
  <RouterView />
</template>
