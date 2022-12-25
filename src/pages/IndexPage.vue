<script setup lang="ts">
// useRoute, useHead, and HelloWorld are automatically imported. See vite.config.ts for details.
const route = useRoute()

useHead({
  bodyAttrs: {
    title: route.meta.title,
  },
  meta: [
    {
      property: 'og:title',
      content: route.meta.title,
    },
    {
      name: 'twitter:title',
      content: route.meta.title,
    },
  ],
})

const VERSION = import.meta.env.VITE_APP_VERSION
const BUILD_DATE = import.meta.env.VITE_APP_BUILD_EPOCH
  ? new Date(Number(import.meta.env.VITE_APP_BUILD_EPOCH))
  : undefined
const thisYear = new Date().getFullYear()
</script>


<template>
  <div class="relative">
    <div class="container relative max-w-2xl mx-auto bg-white">
      <div class="grid md:grid-cols-2 sm:grid-cols-1 p-6">
        <section>
          <Nav />
        </section>
        <section>
          <img src="../assets/jarrdon.jpg"/>
          <a class="float-right text-lg" href="mailto:kidclampdown@gmail.com"> contact: kidclampdown@gmail.com </a>
        </section>
      </div>
    </div>
  </div>
</template>
