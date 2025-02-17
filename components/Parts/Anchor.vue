<template lang="pug">
a.text-base.text-accent.link.link-hover(
  :href="href"
  :target="target"
  :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
)
  slot
</template>

<script setup lang="ts">
const props = defineProps<{
  href: string
  target?: string
}>()
</script>
