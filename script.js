const gombalBtn = document.getElementById("gombalBtn");
const gombalText = document.getElementById("gombalText");

// Daftar gombalan
const gombals = [
  "Kamu tahu nggak? Aku nggak butuh Google, karena semua yang aku cari ada di kamu ❤️",
  "Bukan wifi, tapi kok aku merasa ada koneksi di antara kita? 😘",
  "Kamu itu kayak kopi, bikin aku nggak bisa tidur kalau nggak mikirin kamu ☕",
  "Kamu punya peta? Soalnya aku tersesat di mata indah kamu 😍",
  "Kalau cinta itu adalah dosa, aku rela jadi pendosa selamanya sama kamu ❤️‍🔥",
];

// Event listener untuk tombol
gombalBtn.addEventListener("click", () => {
  const randomGombal = gombals[Math.floor(Math.random() * gombals.length)];
  gombalText.textContent = randomGombal;
  gombalText.classList.remove("hidden");
});
