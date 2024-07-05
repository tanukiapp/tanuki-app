<template lang="pug">
//- .container
//-   .day-item
//-     for n in ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
//-       h3.title.is-3 #{t(n)}
//-         .anime-container
//-           each value, key in data[n]
//-               .anime-item
//-                   img(src="/images/logo.jpg")
//-                   p.anime-title
//-                       strong #{value.title}
//-                       if value.episode
//-                           p.anime-episode #{t('episode')} #{value.episode}

//-                   p.anime-time #{value.time}
//-         if n != "sunday"
//-             hr
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
