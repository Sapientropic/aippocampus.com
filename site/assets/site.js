(() => {
  const buttons = document.querySelectorAll("[data-copy-target]");

  buttons.forEach((button) => {
    const target = document.querySelector(button.getAttribute("data-copy-target"));
    if (!target) return;

    button.addEventListener("click", async () => {
      const text = target.textContent.trim();
      try {
        await navigator.clipboard.writeText(text);
        const previous = button.textContent;
        button.textContent = "Copied";
        window.setTimeout(() => {
          button.textContent = previous;
        }, 1400);
      } catch {
        button.textContent = "Select text";
      }
    });
  });
})();
