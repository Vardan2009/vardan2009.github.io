<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import debounce from "@/debounce";

const emit = defineEmits(["scroll-to"]);

const headerData = [
  "WELCOME",
  "ABOUT ME",
  "PROJECTS",
  ["EIGER", "P-8", "SPAMSENTRY"],
  "ACHIEVEMENTS",
];

const headerDataFlat = [
  "WELCOME",
  "ABOUT ME",
  "PROJECTS",
  "EIGER",
  "P-8",
  "SPAMSENTRY",
  "ACHIEVEMENTS",
];

const appElement = document.getElementById("app");

const activeTab = ref("WELCOME");

const setActiveTab = (newTab) => {
  activeTab.value = newTab;
  emit("scroll-to", headerDataFlat.indexOf(activeTab.value));
};

const handleScroll = () => {
  activeTab.value =
    headerDataFlat[Math.round(appElement.scrollTop / window.innerHeight)];
};
const debouncedHandleScroll = debounce(handleScroll, 100);

onMounted(() => {
  appElement.addEventListener("scroll", debouncedHandleScroll);
});

onBeforeUnmount(() => {
  appElement.removeEventListener("scroll", debouncedHandleScroll);
});
</script>

<template>
  <header>
    <ul>
      <template v-for="el in headerData">
        <li
          :class="activeTab == el ? 'header-active' : null"
          @click="setActiveTab(el)"
          v-if="typeof el == 'string'"
          v-glitch
          :data-text="el"
        >
          {{ el }}
        </li>
        <template v-else-if="Array.isArray(el)">
          <ul class="hide-on-small">
            [
            <li
              :class="activeTab == el2 ? 'header-active' : null"
              @click="setActiveTab(el2)"
              v-for="el2 in el"
              v-glitch
              :data-text="el2"
            >
              {{ el2 }}
            </li>
            ]
          </ul>
        </template>
      </template>
    </ul>
  </header>
</template>

<style scoped>
header {
  position: absolute;
  top: 30px;
  left: 30px;
  z-index: 100;
  opacity: 0.5;
}

header ul {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  list-style: none;
}

header li {
  opacity: 0.7;
  transition: 0.15s ease-in;

  position: relative;

  white-space: nowrap;
}

header li:hover,
header li.header-active {
  opacity: 1;
  font-weight: bold;
  cursor: pointer;
  color: var(--dark);
}

header li:hover::after,
header li.header-active::after {
  height: 100%;
}

header li.header-active:hover::after {
  opacity: 1;
}

header li.header-active::after {
  opacity: 0.7;
}

header li::after {
  content: " ";
  position: absolute;
  z-index: -1;
  background-color: var(--light);
  bottom: 0;
  left: 0;
  width: 100%;

  height: 0%;

  transition: 0.15s ease-out;
}
</style>
