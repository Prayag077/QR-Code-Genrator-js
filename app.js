const text = document.getElementById("qr-text");
const size = document.getElementById("qr-size");
const color = document.getElementById("qr-color");
const img = document.getElementById("qr-image");
const box = document.querySelector(".qr-box");
const download = document.getElementById("downloadBtn");
const toggle = document.getElementById("themeToggle");
const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", () => {
  if (!text.value.trim()) {
    text.classList.remove("error");
    void text.offsetWidth;
    text.classList.add("error");

    text.focus();
    return;
  }

  const hex = color.value.substring(1);

  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=${size.value}x${size.value}&color=${hex}&data=${encodeURIComponent(text.value)}`;

  img.onload = () => {
    box.classList.add("show");
    download.href = img.src;
  };
});

/* dark/light mode */
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});
