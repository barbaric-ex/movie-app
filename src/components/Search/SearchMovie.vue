<template>
  <div class="search_wrap">
    <input
      type="text"
      :value="modelValue"
      @input="updateSearch"
      placeholder="Search movie"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: String,
})
const emit = defineEmits(['update:modelValue'])

function updateSearch(event) {
  emit('update:modelValue', event.target.value)
}
</script>

<style scoped>
.search_wrap {
  padding: 30px 0;
  max-width: 80%;
  margin: auto;
}
.search_wrap input {
  all: unset;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  text-align: center;
  border-radius: 6px;
}
</style>
