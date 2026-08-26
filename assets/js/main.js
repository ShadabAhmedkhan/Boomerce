// Boomerce — Core interactions
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var mobileNav = document.querySelector('.mobile-nav');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('active');
      mobileNav.classList.toggle('active');
      document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });
  }

  document.querySelectorAll('.mobile-nav .m-link[data-toggle]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var sub = document.getElementById(link.dataset.toggle);
      if (sub) sub.classList.toggle('open');
      link.querySelector('.caret')?.classList.toggle('open');
    });
  });

  document.querySelectorAll('.mobile-nav a:not([data-toggle])').forEach(function (link) {
    link.addEventListener('click', function () {
      toggle?.classList.remove('active');
      mobileNav?.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Header shadow on scroll
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.style.boxShadow = window.scrollY > 8 ? '0 4px 20px rgba(0,0,0,0.3)' : 'none';
    }, { passive: true });
  }
})();
