/* main.js — interaktywność całej strony */

/* Helpery */
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

document.addEventListener('DOMContentLoaded', () => {
  // PRELOADER
  const pre = $('#preloader');
  if(pre) setTimeout(()=>{ pre.style.opacity = 0; setTimeout(()=> pre.remove(), 500); }, 600);

  // CURSOR PARALLAX
  const cursor = document.getElementById('cursor');
  let mouse = {x: window.innerWidth/2, y: window.innerHeight/2};
  let pos = {x: mouse.x, y: mouse.y};
  window.addEventListener('mousemove', (e)=>{
    mouse.x = e.clientX; mouse.y = e.clientY;
    cursor.style.opacity = 1;
    // scale when hovering interactive elements
    const hovered = e.target.closest('a, button, .project-tile, video, .btn');
    if(hovered) cursor.style.transform = `translate(${mouse.x}px, ${mouse.y}px) scale(1.6)`;
    else cursor.style.transform = `translate(${mouse.x}px, ${mouse.y}px) scale(1)`;
  }, {passive:true});
  // idle hide
  let idleTimer;
  document.addEventListener('mousemove', ()=>{ clearTimeout(idleTimer); idleTimer = setTimeout(()=> cursor.style.opacity = 0, 2200); });

  // gentle follow (requestAnimationFrame)
  function rafLoop(){
    pos.x += (mouse.x - pos.x) * 0.18;
    pos.y += (mouse.y - pos.y) * 0.18;
    if(cursor) cursor.style.left = pos.x + 'px', cursor.style.top = pos.y + 'px';
    requestAnimationFrame(rafLoop);
  }
  rafLoop();

  // HEADER/HAMBURGER
  const header = document.getElementById('siteHeader');
  const hamburgers = $$('#hamburger');
  hamburgers.forEach(btn => {
    btn.addEventListener('click', ()=>{
      const nav = document.getElementById('mainNav');
      nav.classList.toggle('open');
      btn.classList.toggle('open');
      if(nav.classList.contains('open')) nav.style.display = 'block';
      else nav.style.display = '';
    });
  });

  // shrink header on scroll + hide on down scroll
  let lastScroll = window.scrollY;
  window.addEventListener('scroll', ()=>{
    const s = window.scrollY;
    if(s > 60) header.classList.add('shrink'); else header.classList.remove('shrink');
    if(s > lastScroll && s > 200) header.style.transform = 'translateY(-86px)'; else header.style.transform = '';
    lastScroll = s;
  }, {passive:true});

  // IntersectionObserver reveal
  const reveals = document.querySelectorAll('.scroll-reveal');
  const obs = new IntersectionObserver((entries, ob)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){
        en.target.style.opacity = 1;
        en.target.style.transform = 'translateY(0)';
        ob.unobserve(en.target);
      }
    });
  }, {threshold: 0.12});
  reveals.forEach(r=>obs.observe(r));


  // Auto pause other videos when one plays
  const videos = Array.from(document.querySelectorAll('video'));
  videos.forEach(v=> v.addEventListener('play', ()=> videos.forEach(o=> { if(o !== v) o.pause(); })) );

  // PROJECTS: dynamic render if on projects page
  const projectsGrid = document.getElementById('projectsGrid');
  if(projectsGrid && window.DS_PROJECTS){
    function renderProjects(list){
      projectsGrid.innerHTML = '';
      list.forEach(p=>{
        const tile = document.createElement('article');
        tile.className = 'project-tile scroll-reveal';
        tile.setAttribute('data-type', p.type);
        tile.innerHTML = `
          <div class="media">
            <img class="project-thumb" loading="lazy" src="${p.thumb}" alt="${p.title}">
          </div>
          <div class="project-body">
            <div class="project-title">${p.title}</div>
            <div class="project-desc muted">${p.desc}</div>
            <div class="project-tags">${(p.tags||[]).map(t=>`<span class="tag">${t}</span>`).join('')}</div>
          </div>
        `;
        // click to open lightbox (video/photo)
        tile.addEventListener('click', ()=> openLightbox(p));
        projectsGrid.appendChild(tile);
      });
      // observe newly added reveals
      document.querySelectorAll('.project-tile').forEach(n=> obs.observe(n));
    }
    renderProjects(window.DS_PROJECTS);

    // filtering and search
    const filterBtns = $$('.filter-btn');
    filterBtns.forEach(btn=> btn.addEventListener('click', ()=>{
      filterBtns.forEach(b=> b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.getAttribute('data-filter');
      const filtered = window.DS_PROJECTS.filter(p => f === 'all' ? true : p.type === f);
      renderProjects(filtered);
    }));
    const search = $('#searchProjects');
    if(search){
      search.addEventListener('input', (e)=>{
        const q = e.target.value.toLowerCase();
        const filtered = window.DS_PROJECTS.filter(p=> p.title.toLowerCase().includes(q) || (p.tags||[]).join(' ').includes(q));
        renderProjects(filtered);
      });
    }
  }

  // LIGHTBOX
  const lightbox = document.getElementById('lightbox');
  function openLightbox(p){
    // if type video: show <video>, if photo: show image (here video src used for both types optionally)
    lightbox.innerHTML = '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden','false');
    const inner = document.createElement('div'); inner.className = 'lb-inner';
    const close = document.createElement('button'); close.className = 'lb-close'; close.innerHTML = '&times;';
    close.addEventListener('click', closeLightbox);
    inner.appendChild(close);
    if(p.type === 'video' || p.src.endsWith('.mp4')){
      const vid = document.createElement('video'); vid.controls = true; vid.autoplay = true; vid.playsInline = true; vid.src = p.src; vid.style.width = '100%'; inner.appendChild(vid);
    } else {
      const img = document.createElement('img'); img.src = p.src; img.alt = p.title; img.style.width = '100%'; inner.appendChild(img);
    }
    lightbox.appendChild(inner);
    document.body.style.overflow = 'hidden';
    lightbox.addEventListener('click', (e)=> { if(e.target === lightbox) closeLightbox(); });
  }
  function closeLightbox(){ lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden','true'); lightbox.innerHTML = ''; document.body.style.overflow = ''; }

  // CONTACT FORM (local mock)
  const contactForm = $('#contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = contactForm.querySelector('[name=name]').value;
      const msg = $('#formMsg');
      msg.textContent = 'Wysyłanie...';
      // simulate AJAX
      setTimeout(()=> {
        msg.textContent = `Dzięki ${name}! Wiadomość została wysłana (symulacja).`;
        contactForm.reset();
      }, 900);
    });
  }

  // Accessibility: keyboard focus style (only show when keyboard used)
  window.addEventListener('keydown', (e)=> { if(e.key === 'Tab') document.body.classList.add('user-is-tabbing'); }, {once:true});
});
