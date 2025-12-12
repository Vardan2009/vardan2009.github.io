<script setup>
const props = defineProps(["style"]);
</script>

<template>
  <div class="page-section" :style="props.style">
    <div class="page-section-content">
      <slot></slot>
    </div>
  </div>
</template>

<style>
.page-section {
  scroll-snap-align: start;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.page-section-content {
  height: 100%;
}
</style>
