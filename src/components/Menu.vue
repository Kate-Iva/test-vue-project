<template>
  <nav>
    <router-link to="/first">First</router-link>
    <router-link to="/second">Second</router-link>
    <router-link to="/third">Third</router-link>
  </nav>
</template>
<script>
export default {
  name: 'Menu',
};
</script>
<style scoped>
nav {
  /* Ваші стилі для меню */
}
nav a {
  margin-right: 15px;
}
</style>