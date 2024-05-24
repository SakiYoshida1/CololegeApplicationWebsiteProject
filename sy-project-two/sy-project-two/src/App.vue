<template>
  <div class="header">
    <h1>Welcome to Saki's College Application!</h1>
    <a class="nav-item nav-link" href="/home">Home</a>
    <a class="nav-item nav-link">FAQ</a>
  </div>
  <div class="header">
      <router-link to="/home" class="btn btn-warning">
        Begin your application
      </router-link>
  </div>
  <hr>
  <router-view></router-view>
</template>

<script>
import './assets/my-style.css'

export default {
  name: 'App',
  created() {
        console.log("created: The component just got created.");
  }
}
</script>
