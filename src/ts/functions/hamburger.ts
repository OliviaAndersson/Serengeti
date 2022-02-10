export function hamburger() {
  document.getElementById("bars").addEventListener("click", () => {
    document.getElementById("links-container").style.display = "block";
  });

  document.getElementById("close").addEventListener("click", () => {
    document.getElementById("links-container").style.display = "none";
  });
}
