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

  // Typed Java class in the hero
  var codeEl = document.getElementById('code');
  if (!codeEl) return;
  var T = [
    ['k','public class '],['t','Milani'],['k',' extends '],['t','Developer'],['',' {\n'],
    ['','  '],['t','String'],['',' based = '],['s','"Cape Town"'],['',';\n'],
    ['','  '],['t','String'],['','[] stack = { '],['s','"Java"'],['',', '],['s','"Spring Boot"'],['',',\n'],
    ['','                     '],['s','"Vue.js"'],['',', '],['s','"Flutter"'],['',', '],['s','"SQL"'],['',' };\n'],
    ['','  '],['t','String'],['',' focus = '],['s','"requirements into working systems"'],['',';\n\n'],
    ['a','  @Override'],['','\n'],
    ['k','  public void '],['f','ship'],['','() {\n'],
    ['','    '],['f','plan'],['','(); '],['f','build'],['','(); '],['f','test'],['','(); '],['f','deploy'],['','();\n'],
    ['','  }\n'],
    ['','}']
  ];
  function esc(t) { return t.replace(/&/g,'&amp;').replace(/</g,'&lt;'); }
  function html(upto) {
    var out = '', left = upto;
    for (var i = 0; i < T.length && left > 0; i++) {
      var part = T[i][1].slice(0, left); left -= part.length;
      out += T[i][0] ? '<span class="' + T[i][0] + '">' + esc(part) + '</span>' : esc(part);
    }
    return out;
  }
  var total = T.reduce(function (n, p) { return n + p[1].length; }, 0);
  var caret = '<span class="caret"></span>';
  if (reduce) { codeEl.innerHTML = html(total); return; }
  var n = 0;
  setTimeout(function step() {
    n += 2;
    codeEl.innerHTML = html(n) + caret;
    if (n < total) setTimeout(step, 22);
  }, 650);
})();
