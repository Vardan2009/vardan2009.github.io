<script setup>
import Header from "./Components/Header.vue";

import WelcomeSection from "./MainPageSections/WelcomeSection.vue";
import SimpleTitleSlotSection from "./MainPageSections/SimpleTitleSlotSection.vue";
import ProjectSection from "./MainPageSections/ProjectSection.vue";

const appElement = document.getElementById("app");

const scrollToSection = (idx) => {
  appElement.scrollTo({
    top: idx * window.innerHeight,
    left: 0,
    behavior: "smooth",
  });
};
</script>

<template>
  <Header @scroll-to="scrollToSection" />

  <WelcomeSection @scroll-down="scrollToSection(1)" />
  <SimpleTitleSlotSection title="About me.">
    I've largely taught myself to program using online resources.<br />
    I began with C# in the Unity game engine, then moved on to web development.
    These days, I'm exploring C and C++ by building a variety of projects just
    for fun.<br /><br />

    Besides computers I'm also interested in physics, mathematics, and music. I
    went to a 7-year music school where I learned to play the piano and some
    music theory.
  </SimpleTitleSlotSection>

  <SimpleTitleSlotSection
    title="Projects."
    scroll-down
    @scroll-down="scrollToSection(3)"
  >
    Below you can look at some of my favourite projects. You can find more on my
    <a href="https://github.com/Vardan2009" target="_blank">GitHub</a
    >.<br /><br /><br />
    <i class="translucent"
      >You can use the navbar above to navigate anywhere in the webpage too!</i
    >
  </SimpleTitleSlotSection>

  <ProjectSection
    title="The Eiger Programming Language"
    root-class="style-eiger"
    :tags="['Interpreters', 'C#', '.NET']"
  >
    <template v-slot:description>
      Eiger is a general-purpose multi-paradigm programming language with a
      simple syntax. Its name comes from
      <a href="https://en.wikipedia.org/wiki/Eiger" target="_blank"
        >Mt. Eiger in Switzerland</a
      >.<br /><br />
      I wrote an interpreter for it in C#, and I'm also considering writing a
      faster and more robust one in C++.<br /><br />
      <a href="https://github.com/eigerproject" target="_blank" class="link-btn"
        >Project Link (GitHub)</a
      >
    </template>

    <template v-slot:showcase>
      <code>
        <pre class="italic scroll-code">
<b style="font-style: normal;" class="accent">main.ei</b>

class Person {
  let name
  let surname

  func new(name, surname) {
  	this.name = name
  	this.surname = surname
  }

  func Introduction() {
  	emitln("I am " + this.name + " " + surname + "!")
  }

  func Greet(other) {
  	emitln(name + " greeted " + other.name + "!")
  }
}

let px = Person("Name1", "Surname1")
let py = Person("Name2", "Surname2")

px.Introduction()
py.Introduction()

px.Greet(py)</pre>
      </code>
    </template>
  </ProjectSection>

  <ProjectSection
    title="P-8 Computer"
    root-class="style-p8"
    :tags="['Computer architecture', 'Low-level programming', 'C']"
  >
    <template v-slot:description>
      P-8 is an 8-bit RISC with a single-cycle CPU.<br /><br />
      Implemented and simulated in
      <a href="" target="_blank">Digital (by hneemann)</a> with chips and logic
      gates, it can access 2048 bits of runtime RAM, 5120 bytes (256
      instructions) of program code, interact with peripherals and more.<br /><br />
      P-8 also has its own assembler (p8cpu) written in C<br /><br />
      <a
        href="https://github.com/Vardan2009/p8cpu"
        target="_blank"
        class="link-btn"
        >Project Link (GitHub)</a
      >
    </template>
    <template v-slot:showcase>
      <div>
        <div class="colored-image">
          <img src="/p8.png" alt="P-8 Schematic Screenshot" />
        </div>
      </div>
    </template>
  </ProjectSection>

  <ProjectSection
    title="SpamSentry"
    root-class="style-spamsentry"
    :tags="['Machine learning', 'Data analysis', 'Python']"
  >
    <template v-slot:description>
      SpamSentry is a project me and other students at TUMO developed as a final
      project for a machine learning workshop.<br /><br />
      It uses a machine learning algorithm trained on a dataset of text messages
      to detect spam messages/e-mails/e.t.c.<br /><br />
      <a
        href="https://github.com/Vardan2009/spamsentry"
        target="_blank"
        class="link-btn"
        >Project Link (GitHub)</a
      >
      <a
        href="https://spamsentry.streamlit.app/"
        target="_blank"
        class="link-btn"
        >Try it out!</a
      >
    </template>
    <template v-slot:showcase>
      <img
        style="display: inline-block; width: clamp(290px, 70%, 550px)"
        src="/spamsentry-white.png"
        alt="SpamSentry Logo"
      />
    </template>
  </ProjectSection>

  <SimpleTitleSlotSection title="Achievements.">
    <h2 class="italic accent">Finalist (9<sup>th</sup> Place)</h2>
    <p>Armenian National Olympiad in Informatics 2024-2025</p>
  </SimpleTitleSlotSection>
</template>

<style>
.style-eiger {
  --accent: rgb(113, 172, 113);
}

.style-p8 {
  --accent: rgb(172, 113, 113);
}

.style-spamsentry {
  --accent: #407dba;
}

.colored-image {
  width: 100%;
  position: relative;
}

.colored-image img {
  width: 100%;
  height: 100%;
}

.colored-image::before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: var(--accent);
  mix-blend-mode: color;
}
</style>
