const navLinks = document.querySelectorAll("nav a");
for (const element of navLinks) {
  const link = element;
  if (link.getAttribute("href") === window.location.pathname) {
    link.classList.add("live");
    break;
  }
}
