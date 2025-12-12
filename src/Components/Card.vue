<template>
  <div class="card">
    <div>
      <img src="https://avatars.githubusercontent.com/u/172853842?s=200&v=4" />
    </div>
    <div>
      <p class="bold card-title">Eiger</p>
      <div class="card-tags">
        <div class="card-tag">C#</div>
        <div class="card-tag">.NET</div>
        <div class="card-tag">Interpreters</div>
      </div>
      <p class="italic card-description">
        General-purpose multi-paradigm programming language.
      </p>
      <br />
      <a href="#" target="_blank" class="">GitHub</a>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 300px;

  background-color: var(--dark-lighter);
  padding: 10px;

  gap: 10px;

  flex: 0 0 calc(50% - 10px);
  box-sizing: border-box;

  border-radius: 5px;
}

@media screen and (orientation: portrait) {
  .card {
    width: 100%;
    flex: unset;
  }
}

.card img {
  width: 80%;
  border-radius: 10px;
}

.card-title {
  font-size: 24px;
}

.card-description {
  font-size: 12px;
}
</style>
