/* ═══════════════════════════════════════════════════════════════
   Li Weiyi · 李惟祎  —  Main Script
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── 1. Render site from SITE_DATA ───────────────────────────────

  function render() {
    const d = SITE_DATA;

    // Hero text
    document.querySelector('.hero-name').innerHTML =
      `${d.artist.name}<em>${d.artist.nameZh}</em>`;
    document.querySelector('.hero-tagline').innerHTML =
      `<span class="en">${d.artist.tagline}</span>` +
      `<span class="zh">${d.artist.taglineZh}</span>`;
    document.querySelector('.hero-eyebrow').innerHTML =
      `<span class="en">Fine Art &nbsp;·&nbsp; Painting · Drawing · Sculpture · Installation</span>` +
      `<span class="zh">纯艺术 &nbsp;·&nbsp; 绘画 · 素描 · 雕塑 · 装置</span>`;

    // Hero photo
    const photoEl = document.getElementById('hero-photo');
    if (photoEl) {
      if (d.artist.artistPhoto) {
        photoEl.src = d.artist.artistPhoto;
      } else {
        photoEl.parentElement.style.display = 'none';
      }
    }

    // Works
    const featured = d.works.filter(w => w.featured);
    const workContainer = document.getElementById('works-container');
    workContainer.innerHTML = '';

    featured.forEach((work, i) => {
      const section = document.createElement('section');
      section.className = 'work-section';
      section.id = `w${i + 1}`;
      section.dataset.workId = work.id;

      section.innerHTML = `
        <div class="work-bg" style="background-image:url('${work.heroImage}')"></div>
        <div class="work-veil"></div>
        <div class="work-bottom-grad"></div>
        <div class="work-info">
          <span class="work-meta">
            <span class="en">${String(i + 1).padStart(2, '0')} &nbsp;·&nbsp; ${work.category} &nbsp;·&nbsp; ${work.year}</span>
            <span class="zh">${String(i + 1).padStart(2, '0')} &nbsp;·&nbsp; ${work.categoryZh} &nbsp;·&nbsp; ${work.year}</span>
          </span>
          <h2 class="work-title">
            <span class="en">${work.title}</span>
            <span class="zh">${work.titleZh}</span>
          </h2>
          <p class="work-medium">
            <span class="en">${work.medium}</span>
            <span class="zh">${work.mediumZh}</span>
          </p>
          <a class="work-link" href="work.html?id=${work.id}">
            <span class="en">View Work ↗</span>
            <span class="zh">查看详情 ↗</span>
          </a>
        </div>
      `;

      // Click anywhere on section to navigate
      section.addEventListener('click', (e) => {
        if (!e.target.closest('a')) {
          window.location.href = `work.html?id=${work.id}`;
        }
      });

      workContainer.appendChild(section);
    });

    // About
    document.querySelector('.about-statement').innerHTML =
      `<span class="en">${d.artist.bio}</span>` +
      `<span class="zh">${d.artist.bioZh}</span>`;

    const metaEl = document.querySelector('.about-meta');
    metaEl.innerHTML = '';

    metaEl.innerHTML += `
      <div class="about-meta-item">
        <span class="lbl"><span class="en">Based</span><span class="zh">所在地</span></span>
        <span class="val">
          <span class="en">${d.artist.location}, China</span>
          <span class="zh">中国${d.artist.locationZh}</span>
        </span>
      </div>`;

    if (d.artist.education.length) {
      const edLines = d.artist.education.map(e =>
        `<span class="en">${e.year} · ${e.en}</span><span class="zh">${e.year} · ${e.zh}</span>`
      ).join('<br>');
      metaEl.innerHTML += `
        <div class="about-meta-item">
          <span class="lbl"><span class="en">Education</span><span class="zh">教育经历</span></span>
          <span class="val">${edLines}</span>
        </div>`;
    }

    metaEl.innerHTML += `
      <div class="about-meta-item">
        <span class="lbl"><span class="en">Contact</span><span class="zh">联系</span></span>
        <span class="val"><a href="mailto:${d.artist.contact}" style="color:inherit;text-decoration:none;">${d.artist.contact}</a></span>
      </div>`;

    // Footer
    document.querySelector('.footer-name').textContent =
      `${d.artist.name} · ${d.artist.nameZh}`;
    document.querySelector('.footer-year').textContent =
      `© ${new Date().getFullYear()}–`;

    buildSidenav(featured);
  }


  // ── 2. Sidenav ──────────────────────────────────────────────────

  function buildSidenav(featured) {
    const nav = document.getElementById('sidenav');
    nav.innerHTML = '';
    const ids = ['hero', ...featured.map((_, i) => `w${i + 1}`), 'about'];
    ids.forEach(id => {
      const a = document.createElement('a');
      a.className = 'nav-dot';
      a.dataset.id = id;
      a.addEventListener('click', () => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      });
      nav.appendChild(a);
    });
  }

  function setActiveNav(id) {
    document.querySelectorAll('.nav-dot').forEach(d => {
      d.classList.toggle('active', d.dataset.id === id);
    });
  }


  // ── 3. Custom cursor ────────────────────────────────────────────

  function initCursor() {
    const dot  = document.getElementById('cursor-dot');
    const aura = document.getElementById('cursor-aura');
    if (!dot) return;
    document.addEventListener('mousemove', e => {
      dot.style.left  = e.clientX + 'px';
      dot.style.top   = e.clientY + 'px';
      aura.style.left = e.clientX + 'px';
      aura.style.top  = e.clientY + 'px';
    });
  }


  // ── 4. Scroll reveal + sidenav update ───────────────────────────

  function initScroll() {
    const revealTargets = [
      ...document.querySelectorAll('.work-section'),
      ...document.querySelectorAll('.interlude-text'),
      ...document.querySelectorAll('.reveal'),
    ];

    const revealIO = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in-view');
      });
    }, { threshold: 0.25 });

    revealTargets.forEach(el => revealIO.observe(el));

    const navIO = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && e.target.id) setActiveNav(e.target.id);
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('[id]').forEach(el => navIO.observe(el));
  }


  // ── 5. Language toggle (with sessionStorage persistence) ────────

  function initLang() {
    const btn = document.getElementById('lang-toggle');
    if (!btn) return;

    // Restore saved language preference
    const saved = sessionStorage.getItem('site-lang');
    if (saved) document.documentElement.lang = saved;

    function update() {
      btn.textContent = document.documentElement.lang === 'zh' ? 'EN' : '中文';
    }

    btn.addEventListener('click', () => {
      const next = document.documentElement.lang === 'zh' ? 'en' : 'zh';
      document.documentElement.lang = next;
      sessionStorage.setItem('site-lang', next);
      update();
    });

    update();
  }


  // ── Init ────────────────────────────────────────────────────────

  document.addEventListener('DOMContentLoaded', () => {
    render();
    initCursor();
    initScroll();   // after render()
    initLang();
    setActiveNav('hero');
  });

})();
