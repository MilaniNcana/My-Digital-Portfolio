(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Give every section heading a stable id (used by links such as /#star-reflections)
  document.querySelectorAll('.content h2').forEach(function (h) {
    if (!h.id) {
      h.id = h.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    }
  });
  var video = document.querySelector('.home video');
  if (video) video.id = 'watch';

  // Icons
  if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.75 } });

  // Mobile menu
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('site-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
    });
  }

  // Reading progress on inner pages
  var bar = document.querySelector('.progress span');
  if (bar && document.body.classList.contains('inner')) {
    var onScroll = function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      bar.style.transform = 'scaleX(' + (max > 0 ? h.scrollTop / max : 0) + ')';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Topbar shadow once scrolled
  var top = document.querySelector('.topbar');
  window.addEventListener('scroll', function () {
    top.classList.toggle('scrolled', window.scrollY > 8);
  }, { passive: true });

  // Reveal home sections as they enter view
  var items = document.querySelectorAll('.home .content > h2, .home .cards, .home .flow, .home video');
  if (!reduce && 'IntersectionObserver' in window) {
    items.forEach(function (el) { el.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -10% 0px' });
    items.forEach(function (el) { io.observe(el); });
  }

  // Rotating QR mosaic in the hero
  var qr = document.getElementById('qr');
  if (!qr) return;
  var N = 25;
  function inFinder(r, c) {
    var spots = [[0, 0], [0, N - 7], [N - 7, 0]];
    for (var i = 0; i < spots.length; i++) {
      var r0 = spots[i][0], c0 = spots[i][1];
      if (r >= r0 - 1 && r <= r0 + 7 && c >= c0 - 1 && c <= c0 + 7) {
        var y = r - r0, x = c - c0;
        if (y < 0 || x < 0 || y > 6 || x > 6) return 'gap';
        var ring = Math.min(y, x, 6 - y, 6 - x);
        return ring === 1 ? 'gap' : 'on';
      }
    }
    return null;
  }
  var cells = [];
  for (var r = 0; r < N; r++) {
    for (var c = 0; c < N; c++) {
      var d = document.createElement('i');
      var f = inFinder(r, c);
      if (f === 'on') d.className = 'fix';
      else if (f === 'gap') d.className = 'gap';
      else {
        d.className = Math.random() < 0.48 ? 'on' : '';
        if (Math.random() < 0.05) d.classList.add('gold');
        cells.push(d);
      }
      d.style.setProperty('--d', ((r + c) * 18) + 'ms');
      qr.appendChild(d);
    }
  }
  requestAnimationFrame(function () { qr.classList.add('ready'); });

  if (reduce) return;
  setInterval(function () {
    for (var k = 0; k < 70; k++) {
      var cell = cells[Math.floor(Math.random() * cells.length)];
      cell.classList.toggle('on');
      cell.classList.toggle('gold', Math.random() < 0.06);
    }
  }, 2400);
})();
