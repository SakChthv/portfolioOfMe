const sideMenu = document.querySelector("#sideMenu");
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu() {
  sideMenu.style.transform = "translateX(-16rem)";
}
function closeMenu() {
  sideMenu.style.transform = "translateX(16rem)";
}

window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    navBar.classList.add(
      "bg-white/50",
      // "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm",
      "dark:bg-[#11001F]",
      "dark:shadow-white/20"
    );
    navLinks.classList.remove(
      "bg-white/50",
      "shadow-sm",
      "dark:border",
      "darK:border-white/50",
      "dark:bg-transparent"
    );
  } else {
    navBar.classList.remove(
      "bg-white/50",
      // "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm",
      "dark:bg-[#11001F]",
      "dark:shadow-white/20"
    );
    navLinks.classList.add(
      "bg-white/50",
      "shadow-sm",
      "dark:border",
      "darK:border-white/50",
      "dark:bg-transparent"
    );
  }
});

// Light and Dark mode

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.theme = isDark ? "dark" : "light";
}
