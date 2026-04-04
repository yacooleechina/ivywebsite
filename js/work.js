/* ═══════════════════════════════════════════════════════════════
   Li Weiyi · 李惟祎  —  Work Detail Script
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── Get work from URL ─────────────────────────────────────────
  const params = new URLSearchParams(window.location.search);
  const id     = params.get('id');
  const work   = SITE_DATA.works.find(w => w.id === id);


  // ── Gallery layout builder ────────────────────────────────────
  function buildGallery(work) {
    const imgs = work.images;
    const n = imgs.length;
    if (n <= 1) return '';

    // 2–3 images: grid layout, full natural dimensions, no crop
    if (n <= 3) {
      const layoutClass = n === 2 ? 'wd-gallery--2' : 'wd-gallery--3';
      const figures = imgs.map((img, i) =>
        `<figure class="wd-fig wd-fig--${i}">
          <img src="${img}" alt="${work.title} — ${i + 1}" loading="lazy">
        </figure>`
      ).join('');
      return `<div class="wd-gallery ${layoutClass} reveal">${figures}</div>`;
    }

    // 4+ images: paginator (one at a time, full size)
    const slides = imgs.map((img, i) =>
      `<figure class="wd-pager-slide${i === 0 ? ' active' : ''}">
        <img src="${img}" alt="${work.title} — ${i + 1}" loading="lazy">
      </figure>`
    ).join('');

    return `<div class="wd-gallery-pager reveal">
      <div class="wd-pager-slides">${slides}</div>
      <div class="wd-pager-controls">
        <button class="wd-pager-btn wd-pager-prev" disabled>
          <span class="en">← Prev</span>
          <span class="zh">← 上一张</span>
        </button>
        <span class="wd-pager-count">1 / ${n}</span>
        <button class="wd-pager-btn wd-pager-next">
          <span class="en">Next →</span>
          <span class="zh">下一张 →</span>
        </button>
      </div>
    </div>`;
  }


  // ── Paginator controls ────────────────────────────────────────
  function initPager() {
    document.querySelectorAll('.wd-gallery-pager').forEach(pager => {
      const slides  = pager.querySelectorAll('.wd-pager-slide');
      const prevBtn = pager.querySelector('.wd-pager-prev');
      const nextBtn = pager.querySelector('.wd-pager-next');
      const countEl = pager.querySelector('.wd-pager-count');
      const total   = slides.length;
      let current   = 0;
      let timer     = null;

      function show(n) {
        slides[current].classList.remove('active');
        current = (n + total) % total;
        slides[current].classList.add('active');
        countEl.textContent = `${current + 1} / ${total}`;
        prevBtn.disabled = false;
        nextBtn.disabled = false;
      }

      function startAuto() {
        timer = setInterval(() => show(current + 1), 2000);
      }

      function resetAuto() {
        clearInterval(timer);
        startAuto();
      }

      prevBtn.addEventListener('click', () => { show(current - 1); resetAuto(); });
      nextBtn.addEventListener('click', () => { show(current + 1); resetAuto(); });

      startAuto();
    });
  }


  // ── Render detail ─────────────────────────────────────────────
  function render() {
    const detail = document.getElementById('work-detail');

    if (!work) {
      document.title = 'Not Found · Li Weiyi';
      detail.innerHTML = `
        <p class="wd-not-found">
          Work not found.<br>
          <a href="index.html">← Return to Li Weiyi</a>
        </p>`;
      return;
    }

    document.title = `${work.title} · Li Weiyi`;

    const galleryHtml = buildGallery(work);

    const fmt = s => s.replace(/\n\n/g, '<br><br>');
    const statementHtml = work.statement
      ? `<blockquote class="wd-statement">
          <span class="en">${fmt(work.statement)}</span>
          <span class="zh">${fmt(work.statementZh || '')}</span>
        </blockquote>`
      : '';

    detail.innerHTML = `
      <div class="wd-hero reveal">
        <img class="wd-hero-img" src="${work.heroImage}" alt="${work.title}"${work.detailHeroSize ? ` style="width:${work.detailHeroSize};margin:0 auto;"` : ''}>
      </div>
      <div class="wd-body">
        <div class="wd-info reveal">
          <span class="wd-num">
            <span class="en">${work.category} · ${work.year}</span>
            <span class="zh">${work.categoryZh} · ${work.year}</span>
          </span>
          <h1 class="wd-title">
            <span class="en">${work.title}</span>
            <span class="zh">${work.titleZh}</span>
          </h1>
          <p class="wd-medium">
            <span class="en">${work.medium}</span>
            <span class="zh">${work.mediumZh}</span>
          </p>
          ${work.size ? `<p class="wd-medium">
            <span class="en">${work.size}</span>
            <span class="zh">${work.sizeZh || work.size}</span>
          </p>` : ''}
          ${statementHtml}
        </div>
        ${galleryHtml}
      </div>
    `;
  }


  // ── Language toggle ───────────────────────────────────────────
  function initLang() {
    const btn = document.getElementById('lang-toggle');
    if (!btn) return;

    // Restore from sessionStorage (set on index.html)
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


  // ── Custom cursor ─────────────────────────────────────────────
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


  // ── Scroll reveal ─────────────────────────────────────────────
  function initReveal() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in-view');
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }


  // ── Init ──────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    render();
    initPager();
    initCursor();
    initLang();
    initReveal();
    document.querySelector('.footer-year').textContent =
      `© ${new Date().getFullYear()}–`;
  });

})();
