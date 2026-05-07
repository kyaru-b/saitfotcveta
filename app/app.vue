<script setup lang="ts">
const title = 'Ислам Гаев - стоматолог-хирург и имплантолог'
const description = 'Персональный сайт стоматолога-хирурга и имплантолога Ислама Гаева: имплантация, сложные удаления, All-on-4 и естественное восстановление улыбки.'

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'ru'
  }
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1400&auto=format&fit=crop',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
