<template>
  <div>
    <input class="mt-1 p-2 rounded border" type="text" placeholder="Enter color code" v-model="colorCode" />
  </div>
</template>

<script>
export default {
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode;
      },
      set(newValue) {
        this.$store.dispatch("setColorCode", newValue);
      },
    },
  },
};
</script>
