<template>
  <div id="app">
    <nav>
      <router-link to="/login"></router-link>
      <router-link to="/dashboard"></router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
nav{
  margin-bottom: 20px;
}
</style>
