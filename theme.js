
function toggleTheme() {
  const body = document.body;
  const button = document.getElementById("toggleBtn");

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    button.innerText = "Switch to Light Theme";
  } else {
    button.innerText = "Switch to Dark Theme";
  }
}


