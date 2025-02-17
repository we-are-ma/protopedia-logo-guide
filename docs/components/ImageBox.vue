<template lang="pug">
.image-box.w-full.flex.flex-col.justify-between.items-stretch
  PartsBox(:class="[bgClass, 'h-[102px] min-h-[102px] mb-2.5']")
    slot
  .caption.text-xs
    slot(name="caption")
</template>

<script setup lang="ts">
defineProps<{
  bgClass?: string
}>()
</script>
