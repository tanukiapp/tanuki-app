<script setup>
import { RouterLink } from 'vue-router';
</script>

<template lang="pug">
.container
  .columns
    #logo.column.is-half
    #title.column.is-half.is-tanuki
      h1.title.is-1 Tanuki
      h2.subtitle.is-3 Your anime weekly calendar
      RouterLink#airing.box(to="airing")
        h3.title.is-3 Anime this week
        h4.subtitle.is-4 Don't miss any show, your favourites are here!
      RouterLink#upcoming.box(to="upcoming")
        h3.title.is-3 Upcoming next seasons
        h4.subtitle.is-4 Psst! I heard there will be an amazing shonen next season.
      button.button.is-dark Login with Kitsu
</template>
