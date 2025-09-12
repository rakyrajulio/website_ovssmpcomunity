console.log("Website Minecraft siap jalan!");

const sidebar = document.querySelector('.sidebar');
const toggle = document.getElementById('sidebarToggle');
const closeBtn = document.getElementById('sidebarClose');

toggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');

  // Sembunyikan hamburger saat sidebar terbuka
  if (sidebar.classList.contains('active')) {
    toggle.style.opacity = 0;
  } else {
    toggle.style.opacity = 1;
  }
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
  toggle.style.opacity = 1; // tampilkan kembali hamburger
});

