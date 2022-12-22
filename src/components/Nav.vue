<script setup lang="ts">
// useStore, and computed are automatically imported. See vite.config.ts for details.
const store = useStore()
const count = computed(() => store.count)
const props = defineProps<{
  msg: string
  optionalProp?: number
}>()

function increment() {
  store.increment()
}
//<h2 class="!mt-0">{{ props.msg }}</h2>
</script>

<template>
  <nav>
    <ol>
      <li>
        <a href="http://www.fantagraphics.com/mountebank/"> Book </a>
      </li>
      <li>
        <a href="mailto:kidclampdown@gmail.com"> contact </a>
      </li>
      <li>
        <a href="https://www.instagram.com/kidclampdown/"> instagram </a>
      </li>
      <li>
        <a href=""> cv </a>
      </li>
      <li>
        <a href="https://onecouldargue.substack.com/"> newsletter </a>
      </li>
    </ol>
  </nav>
</template>

