<template>
  <div class="my-4 text-center">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view class="text-center" />
</template>

<style scoped>
a.router-link-exact-active {
  font-weight: bold;
}
</style>