const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".sec-head");
  const contents = document.querySelectorAll(".sec-body");

  headers.forEach((header) => {
    header.addEventListener("click", function () {
      // Remove active classes from all headers & contents
      headers.forEach((h) => h.classList.remove("faq-active-badge"));
      contents.forEach((c) => c.classList.remove("active-content"));

      // Add active classes to clicked header & its matching content
      this.classList.add("faq-active-badge");
      const contentId = this.id + "-content";
      const contentElement = document.getElementById(contentId);
      if (contentElement) {
        contentElement.classList.add("active-content");
      }
    });
  });
});
