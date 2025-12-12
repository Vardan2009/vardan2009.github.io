<script setup>
import PageSection from "@/PageSection.vue";
import { Github, Youtube, ArrowDown } from "@iconoir/vue";
</script>

<template>
  <PageSection>
    <div class="main-bg"></div>

    <div class="floating-hint-top" @click="this.$emit('scroll-down')">
      <ArrowDown class="undulate-anim" /> Scroll down
    </div>

    <div class="flex-page flex-page-centered">
      <div class="content-width">
        <h1 class="big-title marginb italic accent text-solid-shadow">
          Welcome.
        </h1>
        <p class="italic">
          I'm Vardan, a 16-year-old computer enthusiast and self-taught
          programmer from Armenia.
        </p>
        <hr />

        <a
          class="marginb link-btn square"
          target="_blank"
          href="https://github.com/Vardan2009"
          ><Github />
        </a>

        <a
          class="marginb link-btn square"
          target="_blank"
          href="https://youtube.com/@vpetrosyan"
          ><Youtube />
        </a>
      </div>
    </div>
  </PageSection>
</template>

<style scoped>
.main-bg {
  position: absolute;
  inset: 0;
  opacity: 0.25;
  background-image: url(/pattern.svg);

  background-size: cover;

  background-size: 100px;

  z-index: -1;

  background-attachment: fixed;

  -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 70%, transparent 100%);

  animation: bg-slide 150s linear infinite;
}

.main-bg::after {
  content: " ";
  background-image: linear-gradient(
    to bottom,
    #e6a84a99 0%,
    rgba(0, 0, 0, 0) 70%
  );
  position: absolute;
  inset: 0;
  z-index: 1;
}

@keyframes bg-slide {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -100% 0;
  }
}
</style>
