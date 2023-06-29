<script setup>
  // const isLoggedIn = userIsLoggedIn();
  const user = useUser();
</script>

<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/movies">Movies</NuxtLink>
    <NuxtLink v-if="!user.isLoggedIn" to="/login">Login</NuxtLink>
    <a v-else href="/" @click.prevent="user.isLoggedIn = false">Logout</a>
  </nav>
  <slot></slot>
</template>