<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>




export default {
  name: 'App'
}
</script>

<style>


.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
</style>
