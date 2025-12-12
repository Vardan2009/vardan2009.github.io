export default {
  mounted(el) {
    const chars = "!<>-_\\/[]{}—=+*^?#________";

    el.addEventListener("mouseenter", () => {
      const original = el.dataset.text;
      let iteration = 0;

      clearInterval(el._glitchInterval);

      el._glitchInterval = setInterval(() => {
        el.textContent = original
          .split("")
          .map((char, index) => {
            if (index < iteration) return original[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

        iteration += 0.5;

        if (iteration >= original.length) {
          clearInterval(el._glitchInterval);
          el.textContent = original;
        }
      }, 30);
    });
  },
};
