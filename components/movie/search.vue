<script setup>
  const query = ref("batman");
  const movies = ref([]);

  async function search() {
    const { Search } = await $fetch(`http://www.omdbapi.com/?apikey=277a8905&s=${query.value}`)
    movies.value = Search;
    // console.log(movies);
  }

  search()
</script>

<template>
  <form @submit.prevent="search">
    <input type="text" v-model="query">
    <button>Search</button>
  </form>
  <ul class="films-list">
    <li v-for="movie in movies" :key="movie.imdbID">
      <NuxtLink :to="{ name: 'movies-id', params: {id: movie.imdbID} }">
        <img :src="movie.Poster" :alt="movie.Title">
      </NuxtLink>
    </li>
  </ul>
</template>



<style scoped>
.films-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
}
</style>
