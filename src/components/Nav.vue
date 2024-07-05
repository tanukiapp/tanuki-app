<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
    <nav class="navbar is-tanuki" id="header" aria-label="main navigation" role="navigation" style="max-width: 95%;">
        <nav class="navbar container is-tanuki" id="header"></nav>
        <div class="navbar-menu main-menu" id="navbar">
            <div class="navbar-end"></div>
            <RouterLink to="/" class="navbar-item">HOME</RouterLink>
            <RouterLink to="/airing" class="navbar-item">AIRING</RouterLink>
            <RouterLink to="/upcoming" class="navbar-item">UPCOMING</RouterLink>
            <RouterLink to="/donate" class="navbar-item">DONATE</RouterLink>
            <!-- <a class="navbar-item nav-button" onclick="toggleMenu()" target="_blank" href="https://github.com/JuanjoSalvador/tanuki/issues?q=is%3Aissue+is%3Aopen+label%3Abug">
                REPORT
            </a> -->
        </div>
    </nav>
</template>