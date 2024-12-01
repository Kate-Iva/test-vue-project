<template>
  <div class="second-page">
    <ButtonPanel />
  </div>
</template>
<script>
import ButtonPanel from '../components/ButtonPanel/ButtonPanel.vue';
export default {
  components: { ButtonPanel },
};
</script>
<style scoped>
.second-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Висота на весь екран */
}
</style>