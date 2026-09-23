// Reuses the existing find-a-store dropdown classes for this listing page.
document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".branch-hero .find-dropdown");
  const trigger = dropdown?.querySelector(".find-input");
  if (!dropdown || !trigger) return;

  const close = () => {
    dropdown.classList.remove("active");
    trigger.setAttribute("aria-expanded", "false");
  };
  const toggle = () => {
    dropdown.classList.toggle("active");
    trigger.setAttribute("aria-expanded", String(dropdown.classList.contains("active")));
  };

  trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    toggle();
  });
  trigger.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
    if (event.key === "Escape") close();
  });
  dropdown.querySelectorAll(".find-dropdown-item--parent").forEach((parent) => {
    parent.querySelector(".find-dropdown-item-toggle")?.addEventListener("click", (event) => {
      event.stopPropagation();
      parent.classList.toggle("active");
    });
    parent.querySelectorAll(".find-dropdown-subitem[data-value]").forEach((item) => {
      item.setAttribute("role", "button");
      item.setAttribute("tabindex", "0");
      const select = () => {
        const section = document.getElementById(parent.dataset.value);
        const card = [...(section?.querySelectorAll(".branch-card") || [])]
          .find((candidate) => candidate.querySelector("a")?.href.includes("location=" + item.dataset.value));
        close();
        (card || section)?.scrollIntoView({ behavior: "smooth", block: "center" });
      };
      item.addEventListener("click", select);
      item.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") { event.preventDefault(); select(); }
      });
    });
  });
  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });
});
