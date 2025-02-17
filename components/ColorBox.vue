<template lang="pug">
.color-box.flex.items-end.justify-start.p-4.text-sm(
  :class="bgColorClass"
)
  .color-box__text-area(:class="textColorClass")
    .color-box__text-area__cmyk
      | C:{{ cmyk.C }} M:{{ cmyk.M }} Y:{{ cmyk.Y }} K:{{ cmyk.K }}
    .color-box__text-area__rgb
      | R:{{ rgb.R }} G:{{ rgb.G }} B:{{ rgb.B }}
    .color-box__text-area__hex.lowercase
      | {{ hexColor }}
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface ColorCMYK {
  C: number
  M: number
  Y: number
  K: number
}

interface ColorRGB {
  R: number
  G: number
  B: number
}

const _props = defineProps<{
  bgColorClass: string
  textColorClass: string
  cmyk: ColorCMYK
  rgb: ColorRGB
  hexColor: string
}>()
</script>
