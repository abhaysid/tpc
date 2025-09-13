// Collapsible -> implementation of toggling between expand and collapse on click
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

const navItems = document.querySelectorAll(".nav__list__item");

navItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    // Remove 'active' class from all items
    navItems.forEach((nav) => nav.classList.remove("active"));

    // Add 'active' class to the clicked item
    this.classList.add("active");
  });
});

// Section display active section content as selected
document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".sec-head");
  const contents = document.querySelectorAll(".sec-body");

  headers.forEach((header) => {
    header.addEventListener("click", function () {
      // Remove active classes from all headers & contents
      headers.forEach((h) => h.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));

      // Add active classes to clicked header & its matching content
      this.classList.add("active");
      const contentId = this.id + "-content";
      const contentElement = document.getElementById(contentId);
      if (contentElement) {
        contentElement.classList.add("active");
      }
    });
  });
});

// FAQ badges scroll to center on clicked
document.querySelectorAll(".faq-badge").forEach((badge) => {
  badge.addEventListener("click", () => {
    badge.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  });
});

// Phone Number in form component auto fill "+91 " and make it undeletable
const tel = document.getElementById("tel");
tel.addEventListener("focus", () => {
  if (!tel.value.startsWith("+91 ")) {
    tel.value = "+91 ";
  }
  // Move cursor to end
  setTimeout(() => {
    tel.setSelectionRange(tel.value.length, tel.value.length);
  }, 0);
});

tel.addEventListener("keydown", (e) => {
  // Prevent deleting the +91 part
  if (tel.selectionStart <= 4 && e.key === "Backspace") {
    e.preventDefault();
  }
});
