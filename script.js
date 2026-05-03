/* ============================================================
   SUDHAKARAN C — Portfolio JavaScript
   Sections:
   1. Navbar scroll effect
   2. Mobile hamburger menu
   3. Active nav link highlight (IntersectionObserver)
   4. Scroll reveal animations
   5. Skill bar animated fill
   6. Smooth scroll with navbar offset
   ============================================================ */

/* 1. Navbar — add .up class on scroll */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('up', scrollY > 20), { passive: true });

/* 2. Hamburger mobile menu */
const ham = document.getElementById('ham');
const nm  = document.getElementById('nm');
ham.addEventListener('click', () => nm.classList.toggle('open'));
nm.querySelectorAll('.na').forEach(a => a.addEventListener('click', () => nm.classList.remove('open')));

/* 3. Active nav link — highlight current section */
const nas  = document.querySelectorAll('.na');
const secMap = {};
nas.forEach(a => { secMap[a.getAttribute('href').slice(1)] = a });

['home','about','skills','experience','projects','education','contact'].forEach(id => {
  const el = document.getElementById(id);
  if (!el) return;
  new IntersectionObserver(([e]) => {
    if (e.isIntersecting) {
      nas.forEach(a => a.classList.remove('on'));
      if (secMap[id]) secMap[id].classList.add('on');
    }
  }, { threshold: 0.3 }).observe(el);
});

/* 4. Scroll reveal — add .on when element enters viewport */
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('on'); ro.unobserve(e.target); }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.rv, .rv2, .rv3').forEach(el => ro.observe(el));

/* 5. Skill bars — animate fill width on scroll */
const bo = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      setTimeout(() => { e.target.style.width = e.target.dataset.w + '%'; }, 180);
      bo.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.bf').forEach(b => bo.observe(b));

/* 6. Smooth scroll — offset for fixed navbar height */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + scrollY - 60, behavior: 'smooth' });
  });
});
