'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function () {
  navToggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navToggleFunc);
}



/**
 * header active on scroll
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 10 ? header.classList.add("active")
    : header.classList.remove("active");
});

//SweetAlert
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    Swal.fire({
      title: 'Fitur Masih Dalam Tahap Pengembangan',
      icon: 'info',
      confirmButtonText: 'OK'
    });
  });
});


        // JavaScript to handle the SweetAlert on button click
        document.querySelectorAll('.book-now').forEach(function(button) {
          button.addEventListener('click', function(event) {
              event.preventDefault();
              Swal.fire({
                  icon: 'info',
                  title: 'Fitur Masih Dalam Tahap Pengembangan',
                  text: 'Fitur ini belum tersedia saat ini. Silakan coba lagi nanti.',
                  confirmButtonText: 'OK'
              });
          });
      });
