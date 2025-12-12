<script setup>
import { ArrowDown } from "@iconoir/vue";

import PageSection from "@/PageSection.vue";

const props = defineProps(["title", "scroll-down"]);
const emit = defineEmits(["scroll-down"]);
</script>

<template>
  <PageSection>
    <div
      v-if="props.scrollDown !== undefined"
      class="floating-hint-top"
      @click="emit('scroll-down')"
    >
      <ArrowDown class="undulate-anim" /> Scroll down
    </div>

    <div class="flex-page flex-page-centered">
      <div class="content-width">
        <h1 class="big-title marginb italic accent text-solid-shadow">
          {{ title }}
        </h1>
        <hr />
        <slot></slot>
      </div>
    </div>
  </PageSection>
</template>
