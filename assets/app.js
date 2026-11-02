/* Oscar Romero — frontend sin frameworks. Compatible con GitHub Pages y rutas relativas. */
(() => {
  'use strict';
  const projects = Array.isArray(window.OSCAR_PROJECTS) ? window.OSCAR_PROJECTS : [];
  const i18n = window.OSCAR_I18N || {};
  let currentLang = 'es';
  try { currentLang = localStorage.getItem('oscar-portfolio-lang') === 'en' ? 'en' : 'es'; } catch (_) { /* private browsing */ }
  const strings = (es, en) => currentLang === 'en' ? en : es;
  const commonEs = {detail:'Ver detalle ↗',projects:'proyectos',project:'proyecto',showing:'mostrando',viewCase:'Ver caso técnico de',challenge:'El desafío',approach:'Enfoque técnico',contributions:'Funcionalidades y aportes',stack:'Stack y herramientas',note:'Caso técnico descriptivo. No se incluyen datos privados, código propietario, capturas inventadas ni enlaces a repositorios de clientes.',copied:'Correo copiado al portapapeles ✓',writeTo:'Escribe a:',openMenu:'Abrir menú',closeMenu:'Cerrar menú',enableDark:'Activar tema oscuro',enableLight:'Activar tema claro'};
  const translate = (key) => currentLang === 'en' ? (i18n.commonEn?.[key] || key) : (commonEs[key] || key);
  const translateCategory = (name) => currentLang === 'en' ? (i18n.categoriesEn?.[name] || name) : name;
  const localizeProject = (p) => {
    if (currentLang === 'es') return p;
    return {
      ...p, ...(i18n.projectsEn?.[p.id] || {}),
      category: translateCategory(p.category),
      role: i18n.rolesEn?.[p.role] || p.role,
      years: p.years.replace(/Actualidad/g, 'Present').replace(/≈ 2 años de mantenimiento/g, '~2 years of maintenance').replace(/Colaboración puntual/g, 'Limited contribution'),
    };
  };
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[char]));
  const norm = (value) => String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();

  let activeFilter = 'Todos';
  let searchTerm = '';
  let sort = 'featured';
  let expanded = false;
  let previousFocus = null;
  let activeModalId = null;
  let toastTimer = null;
  const grid = $('#projectGrid');
  const filterBar = $('#filterBar');
  const resultCount = $('#resultCount');
  const searchInput = $('#projectSearch');
  const sortSelect = $('#sortSelect');
  const loadMore = $('#loadMore');
  const emptyState = $('#emptyState');
  const clearFilters = $('#resetFilters');
  const modal = $('#projectModal');
  const dialog = $('.modal-dialog', modal);
  const modalContent = $('#modalContent');
  const modalClose = $('#modalClose');

  const categories = ['Todos', ...new Set(projects.map((project) => project.category))];
  const categoryCount = (category) => category === 'Todos' ? projects.length : projects.filter((project) => project.category === category).length;

  function createFilters() {
    filterBar.innerHTML = categories.map((category) => `<button type="button" class="filter-chip ${category === activeFilter ? 'active' : ''}" data-filter="${escapeHTML(category)}" aria-pressed="${category === activeFilter}">${escapeHTML(translateCategory(category))} <small>${categoryCount(category)}</small></button>`).join('');
  }

  function projectCard(p) {
    p = localizeProject(p);
    const tech = p.stack.slice(0, 3).map((item) => `<span>${escapeHTML(item)}</span>`).join('');
    return `<article class="project-card" data-theme="${escapeHTML(p.theme)}">
      <div class="project-cover" aria-hidden="true"><span class="cover-label">${strings('PROYECTO','PROJECT')} / ${escapeHTML(p.number)}</span><span class="cover-symbol">${escapeHTML(p.number)}</span><span class="cover-arrow">↗</span></div>
      <div class="project-card-main">
        <span class="project-category">${escapeHTML(p.kicker.toUpperCase())}</span>
        <h3>${escapeHTML(p.title)}</h3>
        <p>${escapeHTML(p.description)}</p>
        <div class="tech-tags" aria-label="${strings('Tecnologías principales', 'Main technologies')}">${tech}</div>
        <div class="card-bottom"><small>${escapeHTML(p.years)}</small><button type="button" data-open-project="${escapeHTML(p.id)}" aria-label="${strings('Ver caso técnico de', translate('viewCase'))} ${escapeHTML(p.title)}">${translate('detail')}</button></div>
      </div>
    </article>`;
  }

  function filterProjects() {
    let results = projects.filter((p) => {
      if (activeFilter !== 'Todos' && p.category !== activeFilter) return false;
      if (!searchTerm) return true;
      const english = i18n.projectsEn?.[p.id] || {};
      const searchable = [p.title,p.kicker,p.category,translateCategory(p.category),p.role,p.description,p.challenge,p.solution,...p.highlights,...p.stack,...Object.values(english).flat()].join(' ');
      return norm(searchable).includes(norm(searchTerm));
    });
    if (sort === 'az') results = results.slice().sort((a,b) => a.title.localeCompare(b.title,currentLang));
    if (sort === 'za') results = results.slice().sort((a,b) => b.title.localeCompare(a.title,currentLang));
    return results;
  }

  function renderProjects() {
    const all = filterProjects();
    const filtered = activeFilter !== 'Todos' || searchTerm.length > 0;
    const visible = (!filtered && !expanded) ? all.slice(0, 6) : all;
    grid.innerHTML = visible.map(projectCard).join('');
    resultCount.textContent = `${all.length} ${translate(all.length === 1 ? 'project' : 'projects')}${visible.length < all.length ? ` · ${translate('showing')} ${visible.length}` : ''}`;
    emptyState.hidden = all.length > 0;
    loadMore.hidden = filtered || all.length <= 6 || expanded;
    loadMore.parentElement.hidden = loadMore.hidden;
    clearFilters.hidden = !filtered;
    $$('.filter-chip', filterBar).forEach((b) => {
      const selected = b.dataset.filter === activeFilter;
      b.classList.toggle('active', selected);
      b.setAttribute('aria-pressed', String(selected));
    });
  }

  function reset() {
    activeFilter = 'Todos';
    searchTerm = '';
    sort = 'featured';
    expanded = false;
    searchInput.value = '';
    sortSelect.value = 'featured';
    renderProjects();
  }

  filterBar.addEventListener('click', (event) => {
    const btn = event.target.closest('button[data-filter]');
    if (!btn) return;
    activeFilter = btn.dataset.filter;
    expanded = false;
    renderProjects();
  });
  searchInput.addEventListener('input', () => {
    searchTerm = searchInput.value.trim();
    renderProjects();
  });
  sortSelect.addEventListener('change', () => {sort = sortSelect.value; renderProjects();});
  loadMore.addEventListener('click', () => {expanded = true; renderProjects(); const next = $('.project-card:nth-child(7)', grid); next?.scrollIntoView({behavior:'smooth',block:'nearest'});});
  clearFilters.addEventListener('click', reset);
  $('#clearEmpty').addEventListener('click', reset);

  function renderModalContent(id) {
    const original = projects.find((item) => item.id === id);
    if (!original) return;
    const p = localizeProject(original);
    const list = p.highlights.map((point) => `<li>${escapeHTML(point)}</li>`).join('');
    const tags = p.stack.map((tech) => `<span>${escapeHTML(tech)}</span>`).join('');
    modalContent.innerHTML = `
      <div class="modal-category">${escapeHTML(p.category.toUpperCase())} / ${escapeHTML(p.number)}</div>
      <h2 id="modalTitle">${escapeHTML(p.title)}</h2>
      <div class="modal-meta"><span>${escapeHTML(p.years)}</span><span>${escapeHTML(p.role)}</span><span>${escapeHTML(p.kicker)}</span></div>
      <p class="modal-desc">${escapeHTML(p.description)}</p>
      <hr class="modal-divider">
      <div class="modal-section"><h3>${translate('challenge')}</h3><p>${escapeHTML(p.challenge)}</p></div>
      <div class="modal-section"><h3>${translate('approach')}</h3><p>${escapeHTML(p.solution)}</p></div>
      <div class="modal-section"><h3>${translate('contributions')}</h3><ul>${list}</ul></div>
      <div class="modal-section"><h3>${translate('stack')}</h3><div class="modal-tech">${tags}</div></div>
      <p class="modal-note">${translate('note')}</p>`;
  }
  function showModal(id, trigger) {
    if (!projects.some((item) => item.id === id)) return;
    activeModalId = id;
    previousFocus = trigger || document.activeElement;
    renderModalContent(id);
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    dialog.scrollTop = 0;
    modalContent.scrollTop = 0;
    modalClose.focus();
  }
  function closeModal() {
    if (modal.hidden) return;
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    modalContent.innerHTML = '';
    activeModalId = null;
    if (previousFocus && document.contains(previousFocus)) previousFocus.focus();
    previousFocus = null;
  }
  document.addEventListener('click', (event) => {
    const open = event.target.closest('[data-open-project]');
    if (open) {showModal(open.dataset.openProject,open); return;}
    if (event.target.closest('[data-close-modal]') || event.target.closest('#modalClose')) closeModal();
  });
  document.addEventListener('keydown', (event) => {
    if (!modal.hidden) {
      if (event.key === 'Escape') {closeModal();event.preventDefault();return;}
      if (event.key === 'Tab') {
        const focusable = $$('button:not([disabled]),a[href],input:not([disabled])', dialog).filter((el)=>el.getClientRects().length);
        if (!focusable.length) return;
        const first = focusable[0], last = focusable[focusable.length-1];
        if (event.shiftKey && document.activeElement === first) {last.focus();event.preventDefault();}
        else if (!event.shiftKey && document.activeElement === last) {first.focus();event.preventDefault();}
      }
      return;
    }
    if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey && !['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) {
      event.preventDefault();
      location.hash = '#proyectos';
      searchInput.focus();
    }
  });

  // Appearance
  const themeToggle = $('#themeToggle');
  let preferredTheme = null;
  try {preferredTheme = localStorage.getItem('oscar-portfolio-theme');} catch (_) { /* storage disabled */ }
  function setTheme(theme) {
    const value = theme === 'light' ? 'light' : 'dark';
    document.body.dataset.theme = value;
    themeToggle.setAttribute('aria-label',value === 'light' ? translate('enableDark') : translate('enableLight'));
    themeToggle.setAttribute('title',value === 'light' ? strings('Tema oscuro','Dark mode') : strings('Tema claro','Light mode'));
    themeToggle.innerHTML = value === 'light'
      ? '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>'
      : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.1 15.4A8.8 8.8 0 0 1 8.6 3.9 8.9 8.9 0 1 0 20.1 15.4Z"/></svg>';
    const metaTheme = $('meta[name="theme-color"]');
    if (metaTheme) metaTheme.content = value === 'light' ? '#f3f6f5' : '#080d18';
    try {localStorage.setItem('oscar-portfolio-theme',value);} catch (_) {}
  }
  setTheme(preferredTheme === 'light' ? 'light' : 'dark');
  themeToggle.addEventListener('click', () => setTheme(document.body.dataset.theme === 'dark' ? 'light' : 'dark'));

  // Navigation and visibility
  const menuToggle = $('#menuToggle');
  const navLinks = $('#navLinks');
  function closeMenu() {navLinks.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label',translate('openMenu'));}
  menuToggle.addEventListener('click', () => {
    const opening = !navLinks.classList.contains('open');
    navLinks.classList.toggle('open',opening);
    menuToggle.setAttribute('aria-expanded',String(opening));
    menuToggle.setAttribute('aria-label',opening ? translate('closeMenu') : translate('openMenu'));
  });
  $$('#navLinks a').forEach((link)=>link.addEventListener('click',closeMenu));
  document.addEventListener('click',(event)=>{if(navLinks.classList.contains('open')&&!event.target.closest('.nav')) closeMenu();});
  document.addEventListener('keydown',(event)=>{if(event.key==='Escape') closeMenu();});

  const updateProgress = () => {
    const distance = document.documentElement.scrollHeight-window.innerHeight;
    $('#scrollProgress').style.width = distance>0 ? `${Math.min(100,Math.max(0,(window.scrollY/distance)*100))}%` : '0%';
  };
  window.addEventListener('scroll',updateProgress,{passive:true});
  window.addEventListener('resize',updateProgress,{passive:true});
  updateProgress();

  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const reveal = new IntersectionObserver((entries,observer) => {
      entries.forEach((entry) => {if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});
    },{threshold:.1,rootMargin:'0px 0px -18px 0px'});
    $$('[data-reveal]').forEach((el)=>reveal.observe(el));
  } else $$('[data-reveal]').forEach((el)=>el.classList.add('visible'));

  const navSections = $$('#navLinks a').map((a)=>({a,section:document.querySelector(a.getAttribute('href'))}));
  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting) navSections.forEach(({a,section})=>a.classList.toggle('active',section===entry.target));
      });
    },{rootMargin:'-33% 0px -56% 0px',threshold:0});
    navSections.forEach(({section})=>section&&navObserver.observe(section));
  }

  function showToast(text) {
    const toast = $('#toast');
    clearTimeout(toastTimer);
    toast.textContent = text;
    toast.classList.add('show');
    toastTimer = setTimeout(()=>toast.classList.remove('show'),2600);
  }
  $('#copyEmail').addEventListener('click',async()=>{
    const email = 'dev.oscar.romero@gmail.com';
    try {
      if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(email);
      else {
        const temp = document.createElement('textarea');
        temp.value=email;temp.style.position='fixed';temp.style.opacity='0';document.body.appendChild(temp);temp.select();
        const ok = document.execCommand('copy');temp.remove();if(!ok) throw Error('Clipboard disabled');
      }
      showToast(translate('copied'));
    } catch (_) {showToast(translate('writeTo')+' '+email);}
  });

  $('#currentYear').textContent = String(new Date().getFullYear());

  // All static UI copy is translated locally. Original Spanish text remains in the HTML.
  // Store text nodes/attributes so every switch is reversible and preserves markup and listeners.
  const textTargets = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.textContent.trim()) return NodeFilter.FILTER_REJECT;
      if (node.parentElement.closest('script,style,svg')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  while (walker.nextNode()) {
    const node = walker.currentNode;
    textTargets.push({node, original: node.textContent});
  }
  const attributeTargets = [];
  document.querySelectorAll('[aria-label],[placeholder],[title],meta[name="description"],meta[property="og:description"]').forEach(el => {
    for (const attribute of ['aria-label','placeholder','title','content']) {
      if (el.hasAttribute(attribute)) attributeTargets.push({el,attribute,original:el.getAttribute(attribute)});
    }
  });
  const emailTargets = [...document.querySelectorAll('a[href^="mailto:"]')].map(el => ({el, original:el.getAttribute('href')}));
  function renderStaticTranslations() {
    for (const {node, original} of textTargets) {
      const trimmed = original.trim();
      const newText = currentLang === 'en' ? (i18n.staticEn?.[trimmed] ?? trimmed) : trimmed;
      node.textContent = trimmed ? original.replace(trimmed,newText) : original;
    }
    for (const {el,attribute,original} of attributeTargets) {
      el.setAttribute(attribute, currentLang === 'en' ? (i18n.attributesEn?.[original] || original) : original);
    }
    for (const {el,original} of emailTargets) {
      el.setAttribute('href', currentLang === 'en' ? original.replace('Conversemos%20sobre%20una%20oportunidad%20backend','Let%27s%20discuss%20a%20backend%20opportunity').replace('Oportunidad%20de%20desarrollo%20backend','Backend%20development%20opportunity') : original);
    }
  }
  // The PDF is language-specific. Keep every CV link in sync with the ES/EN selector.
  // Relative paths work both on a user/organization Pages site and under /portfolio/.
  function updateCVDownloads() {
    const isEnglish = currentLang === 'en';
    const filename = isEnglish ? 'Oscar_Romero_CV_EN.pdf' : 'Oscar_Romero_CV_ES.pdf';
    const file = isEnglish ? 'docs/CV_Oscar_Romero_EN.pdf' : 'docs/CV_Oscar_Romero_ES.pdf';
    const accessibleText = isEnglish ? 'Download résumé in English (PDF)' : 'Descargar hoja de vida en español (PDF)';
    document.querySelectorAll('[data-cv-download]').forEach(link => {
      link.setAttribute('href', file);
      link.setAttribute('download', filename);
      link.setAttribute('aria-label', accessibleText);
      link.setAttribute('title', accessibleText);
      link.setAttribute('hreflang', currentLang);
    });
  }
  function setLanguage(language) {
    currentLang = language === 'en' ? 'en' : 'es';
    document.documentElement.lang = currentLang === 'en' ? 'en' : 'es';
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', currentLang === 'en' ? 'en_US' : 'es_EC');
    renderStaticTranslations();
    updateCVDownloads();
    document.querySelector('.lang-switch')?.setAttribute('aria-label', strings('Seleccionar idioma','Select language'));
    document.querySelectorAll('.lang-option').forEach(btn => btn.setAttribute('aria-pressed',String(btn.dataset.lang === currentLang)));
    // The theme and language controls are independent, but their accessible labels follow the selected language.
    themeToggle.setAttribute('aria-label', document.body.dataset.theme === 'light' ? translate('enableDark') : translate('enableLight'));
    themeToggle.setAttribute('title', document.body.dataset.theme === 'light' ? strings('Tema oscuro','Dark mode') : strings('Tema claro','Light mode'));
    menuToggle.setAttribute('aria-label', navLinks.classList.contains('open') ? translate('closeMenu') : translate('openMenu'));
    try { localStorage.setItem('oscar-portfolio-lang',currentLang); } catch (_) { /* storage disabled */ }
    createFilters();
    renderProjects();
    if (activeModalId && !modal.hidden) renderModalContent(activeModalId);
  }
  $$('.lang-option').forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));
  setLanguage(currentLang);
})();
