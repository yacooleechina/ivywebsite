/* ═══════════════════════════════════════════════════════════════
   Li Weiyi · 李惟祎  —  Work Detail Script
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── Get work from URL ─────────────────────────────────────────
  const params = new URLSearchParams(window.location.search);
  const id     = params.get('id');
  const work   = SITE_DATA.works.find(w => w.id === id && !w.hidden);


  function displayImageSrc(src) {
    return src.replace('images/works/', 'images/display/');
  }


  // ── Gallery layout builder ────────────────────────────────────
  function buildGallery(work) {
    // The cover is already visible above; show every remaining image in order.
    const imgs = [...new Set(work.images)].filter(img => img !== work.heroImage);
    if (!imgs.length) return '';
    return `<div class="wd-gallery">${imgs.map((img, i) =>
      `<figure class="wd-fig">
        <img src="${displayImageSrc(img)}" alt="${work.title} — ${i + 1}" loading="lazy" decoding="async">
      </figure>`
    ).join('')}</div>`;
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

    // Preserve portfolio page layouts for projects that supply composed pages.
    if (work.layoutPages?.length) {
      const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
      detail.innerHTML = `<article class="wd-portfolio" aria-label="${escape(work.title)}">
        ${work.layoutPages.map((page, i) => `<figure class="wd-portfolio-page">
          <a href="${page.src}" target="_blank" rel="noopener" aria-label="${escape(work.title)} — ${i + 1}">
            <img src="${page.src}" width="${page.width}" height="${page.height}" alt="${escape(page.alt || work.title)}" loading="${i === 0 ? 'eager' : 'lazy'}" decoding="async">
          </a>
        </figure>`).join('')}
      </article>`;
      return;
    }

    if (work.id === 'observational-drawing') detail.classList.add('wd-observational');

    const galleryHtml = buildGallery(work);
    const heroImage = displayImageSrc(work.heroImage);

    const fmt = s => s.replace(/\n\n/g, '<br><br>');
    const statementHtml = work.statement
      ? `<blockquote class="wd-statement">
          <span class="en">${fmt(work.statement)}</span>
          <span class="zh">${fmt(work.statementZh || '')}</span>
        </blockquote>`
      : '';

    detail.innerHTML = `
      <div class="wd-hero reveal">
        <img class="wd-hero-img" src="${heroImage}" alt="${work.title}" decoding="async">
      </div>
      <div class="wd-body">
        <div class="wd-info reveal">
          <span class="wd-num">
            <span class="en">${work.category}${work.year ? ` · ${work.year}` : ''}</span>
            <span class="zh">${work.categoryZh}${work.year ? ` · ${work.year}` : ''}</span>
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
    initCursor();
    initLang();
    initReveal();
    document.querySelector('.footer-year').textContent =
      `© ${new Date().getFullYear()}–`;
  });

})();
