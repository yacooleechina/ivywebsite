/* ═══════════════════════════════════════════════════════════════
   Li Weiyi · 李惟祎  —  Archive Page Script
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── Group archived works by collection ───────────────────────
  function groupByCollection(works) {
    const archived = works.filter(w => w.archived === true);
    const groups = {};
    archived.forEach(w => {
      const key = w.collection || 'Other';
      if (!groups[key]) {
        groups[key] = {
          name: w.collection || 'Other',
          nameZh: w.collectionZh || w.collection || 'Other',
          desc: w.collectionDesc || '',
          descZh: w.collectionDescZh || '',
          era: w.era || '',
          works: [],
        };
      }
      groups[key].works.push(w);
    });
    // Sort each group's works by year descending
    Object.values(groups).forEach(g => {
      g.works.sort((a, b) => (b.year || 0) - (a.year || 0));
    });
    // Sort collections in specified order
    const ORDER = [
      'Before This Portfolio',
      'Studio Practice · Summer 2024',
      'RISD Summer Program · 2024',
      'UAL Summer Program · 2023',
    ];
    return Object.values(groups).sort((a, b) => {
      const ia = ORDER.indexOf(a.name);
      const ib = ORDER.indexOf(b.name);
      const wa = ia === -1 ? 999 : ia;
      const wb = ib === -1 ? 999 : ib;
      return wa - wb;
    });
  }


  // ── Render a single archive card ─────────────────────────────
  function renderCard(work) {
    return `
      <a class="arc-card" href="work.html?id=${work.id}">
        <div class="arc-card-img-wrap">
          <img src="${work.heroImage}" alt="${work.title}" loading="lazy">
        </div>
        <p class="arc-card-meta">
          <span class="en">${work.category} · ${work.year}</span>
          <span class="zh">${work.categoryZh} · ${work.year}</span>
        </p>
        <h3 class="arc-card-title">
          <span class="en">${work.title}</span>
          <span class="zh">${work.titleZh}</span>
        </h3>
        <p class="arc-card-medium">
          <span class="en">${work.medium}</span>
          <span class="zh">${work.mediumZh}</span>
        </p>
      </a>`;
  }


  // ── Render all collections ────────────────────────────────────
  function render() {
    const container = document.getElementById('archive-container');
    const groups = groupByCollection(SITE_DATA.works);

    if (groups.length === 0) {
      container.innerHTML = `<p class="arc-empty">
        <span class="en">No archived works yet.</span>
        <span class="zh">暂无归档作品。</span>
      </p>`;
      return;
    }

    container.innerHTML = groups.map(g => `
      <section class="arc-collection reveal">
        <div class="arc-collection-head">
          <h2 class="arc-collection-name">
            <span class="en">${g.name}</span>
            <span class="zh">${g.nameZh}</span>
          </h2>
          ${g.era ? `<span class="arc-collection-era">${g.era}</span>` : ''}
        </div>
        ${g.desc ? `<p class="arc-collection-desc">
          <span class="en">${g.desc}</span>
          <span class="zh">${g.descZh}</span>
        </p>` : ''}
        <div class="arc-grid">
          ${g.works.map(renderCard).join('')}
        </div>
      </section>
    `).join('');
  }


  // ── Language toggle ───────────────────────────────────────────
  function initLang() {
    const btn = document.getElementById('lang-toggle');
    if (!btn) return;

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
    }, { threshold: 0.1 });
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
