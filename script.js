console.log("Website Minecraft siap jalan!");

const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.getElementById('sidebarToggle');
const closeBtn = document.getElementById('sidebarClose');

// Buka sidebar saat klik hamburger
toggleBtn.addEventListener('click', () => {
  sidebar.classList.add('active');
  toggleBtn.style.display = 'none'; // tombol hilang
});

// Tutup sidebar saat klik tombol ×
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
  toggleBtn.style.display = 'block'; // tombol muncul kembali
});

// Tutup sidebar saat klik di luar
document.addEventListener('click', (e) => {
  if (
    sidebar.classList.contains('active') &&
    !sidebar.contains(e.target) &&
    !toggleBtn.contains(e.target)
  ) {
    sidebar.classList.remove('active');
    toggleBtn.style.display = 'block'; // tombol muncul lagi
  }
});
