<script setup lang="ts">

import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Home from './views/Home.vue'
</script>

<template>

<header>
     <h1>Ver. 1.01</h1>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="100" height="100" /> -->
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>&nbsp;&nbsp;&nbsp;
        <RouterLink to="/TestingView">TestingView</RouterLink>
      </nav>
    </div>
  </header>
  <br/>
  <br/>

<RouterView />


  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
