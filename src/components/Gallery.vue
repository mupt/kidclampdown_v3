
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
  <p> I am a gallery! </p>
</template>
