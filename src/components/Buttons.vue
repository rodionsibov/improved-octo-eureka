<template>
  <div>
    <button class="rounded m-1 w-24 h-24 bg-gray-300 hover:bg-gray-200 text-5xl" @click="$store.dispatch('decreaseCounter')">-</button>
    <button class="rounded m-1 w-24 h-24 bg-gray-300 hover:bg-gray-200 text-5xl" @click="$store.dispatch('increaseCounter')">+</button>
  </div>
</template>
