// ── TYPED TEXT ──
const phrases = [
  'Software Developer',
  'Cloud Engineer',
  'Researcher',
  'Game Developer',
  'IoT Enthusiast',
  'Tech Innovator',
];
let phraseIndex = 0, charIndex = 0, isDeleting = false;
const el = document.getElementById('typed-text');

function typeLoop() {
  const current = phrases[phraseIndex];
  if (isDeleting) {
    el.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) { isDeleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; setTimeout(typeLoop, 500); return; }
  } else {
    el.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) { isDeleting = true; setTimeout(typeLoop, 1800); return; }
  }
  setTimeout(typeLoop, isDeleting ? 60 : 100);
}
typeLoop();

// ── MOBILE MENU ──
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .research-card, .cert-card, .award-card, .timeline-item, .link-card, .interest-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// ── ACTIVE NAV ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
  });
});

// ── FORM SUBMIT ──
function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value || 'Portfolio Contact';
  const message = document.getElementById('message').value;
  const mailto = `mailto:madheshh.official@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
  window.location.href = mailto;
}
