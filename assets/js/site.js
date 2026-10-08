/* ShellGame — the only script of the site.
   It does two cosmetic things: folds the menu on phones and fades blocks in
   while scrolling. Every page stays fully usable when it does not run. */
(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');

  // Fold-away menu on small screens
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  // Fade-in on scroll, skipped when the device asks for less motion
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (calm || !('IntersectionObserver' in window)) {
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px' });

  document.querySelectorAll('[data-reveal]').forEach(function (block) {
    // Only blocks still below the screen are hidden, so nothing flickers
    if (block.getBoundingClientRect().top > window.innerHeight) {
      block.classList.add('reveal');
      observer.observe(block);
    }
  });
})();
