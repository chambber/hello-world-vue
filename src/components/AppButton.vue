<template>
  <button v-on="$listeners">
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppButton extends Vue {}
</script>

<style lang="sass" scoped>
button
  padding: 8px 16px
  border: 1px solid #cccccc
  border-radius: 5px
  background-color: #ffffff
  cursor: pointer

  &:hover
    background-color: #fafafa

  &:focus,
  &:active
    outline: 0
</style>
