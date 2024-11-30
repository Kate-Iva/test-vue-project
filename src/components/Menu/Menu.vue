<template>
  <nav :class="$style.menu">
    <router-link
      to="/first"
      :class="[$style.link, { [$style.active]: isActive('/first') }]">
      First
    </router-link>
    <router-link
      to="/second"
      :class="[$style.link, { [$style.active]: isActive('/second') }]">
      Second
    </router-link>
    <router-link
      to="/third"
      :class="[$style.link, { [$style.active]: isActive('/third') }]">
      Third
    </router-link>
  </nav>
</template>
<script>
export default {
  name: 'Menu',
  methods: {
    isActive(route) {
      return this.$route.path === route;
    }
  }
};
</script>
<style module src="./Menu.module.css"></style>