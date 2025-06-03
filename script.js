function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

const toggle = document.getElementById("modeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
