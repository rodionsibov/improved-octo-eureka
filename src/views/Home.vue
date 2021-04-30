<template>
  <div>
    <img class="m-auto" alt="Vue logo" src="../assets/logo.png" />
    <Counter />
    <Counter-squared />
    <Buttons />
    <Color-code />
  </div>
</template>

<script>
import Buttons from "../components/Buttons.vue";
import ColorCode from '../components/ColorCode.vue';
import Counter from "../components/Counter.vue";
import CounterSquared from "../components/CounterSquared.vue";

export default {
  name: "Home",
  components: {
    Counter,
    CounterSquared,
    Buttons,
    ColorCode,
  },
};
</script>
