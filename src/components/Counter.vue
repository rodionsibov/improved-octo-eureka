<template>
  <div class="text-9xl mb-3" :style="{ color: $store.state.colorCode }">
    {{ $store.state.counter }}
  </div>
</template>
