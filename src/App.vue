<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import Nav from './components/Nav.vue'
</script>

<template>
  <Nav />

  <RouterView />

  <Footer />
</template>
