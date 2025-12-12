<script setup>
import PageSection from "@/PageSection.vue";
const props = defineProps(["title", "root-class", "tags"]);
</script>

<template>
  <PageSection>
    <div :class="['flex-page', props.rootClass]">
      <div class="flex-page-side">
        <h1 class="accent italic text-solid-shadow" style="padding-top: 30px">
          {{ props.title }}
          <div class="tags">
            <span v-for="tag in tags" class="tag">{{ tag }}</span>
          </div>
        </h1>
        <hr />
        <slot name="description"></slot>
      </div>
      <slot name="showcase"></slot>
    </div>
  </PageSection>
</template>

<style scoped>
.tags {
  display: flex;
  gap: 10px;
}

.tag {
  font-size: 12px;
  display: inline-block;
  color: var(--accent);
  outline: 1px solid var(--accent);
  padding: 1px 5px;
  border-radius: 5px;
  margin: 5px 0px;
}
</style>
