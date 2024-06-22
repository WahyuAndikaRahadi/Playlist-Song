$(document).ready(function () {
  $(".menu-links li a").click(function (e) {
    $(".menu-links li.active").removeClass("active");
    var $parent = $(this).parent();
    $parent.addClass("active");
  });

  $(".hamburger-icon, .close-sidebar-btn").click(function () {
    $(".menu-links").toggleClass("left");
    $(".hamburger-icon").toggleClass("ham-style");
  });

  // Menambahkan event listener untuk tombol tutup
  $(".close-sidebar-btn").click(function () {
    $(".menu-links").removeClass("left");
  });

  const themeSwitch = document.querySelector("#checkbox");
  themeSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark-theme");
  });
});
