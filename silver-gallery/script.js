// ─── MOBILE HAMBURGER MENU ──────────────────────────────────
const hamburger = document.querySelector('.hamburger');
const navEl = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');

hamburger?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  if (navLinks.classList.contains('open')) {
    navEl.style.display = 'block';
    hamburger.textContent = '✕';
  } else {
    navEl.style.display = 'none';
    hamburger.textContent = '☰';
  }
});

// Close menu when a nav link is clicked
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navEl.style.display = 'none';
    if (hamburger) hamburger.textContent = '☰';
  });
});

// Reset nav display on resize to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navEl.style.display = '';
    navLinks.classList.remove('open');
    if (hamburger) hamburger.textContent = '☰';
  } else {
    if (!navLinks.classList.contains('open')) {
      navEl.style.display = 'none';
    }
  }
});

// Initial state: hide nav on mobile
if (window.innerWidth <= 768) {
  navEl.style.display = 'none';
}


// ─── EMAIL SIGNUP ────────────────────────────────────────────
const emailInput = document.getElementById('emailinput');
const signupBtn = document.querySelector('.signup-btn');
const successMsg = document.getElementById('sucessMsg');

if (successMsg) successMsg.style.display = 'none';

signupBtn?.addEventListener('click', () => {
  const email = emailInput.value.trim();

  if (!email || !email.includes('@') || !email.includes('.')) {
    emailInput.style.outline = '2px solid red';
    emailInput.placeholder = 'Please enter a valid email';
    return;
  }

  emailInput.style.outline = '';
  emailInput.placeholder = 'Your email address';
  emailInput.value = '';
  successMsg.style.display = 'block';

  setTimeout(() => {
    successMsg.style.display = 'none';
  }, 4000);
});

emailInput?.addEventListener('input', () => {
  emailInput.style.outline = '';
  emailInput.placeholder = 'Your email address';
});


// ─── TESTIMONIAL SLIDER ──────────────────────────────────────
const testimonials = [
  {
    name: 'Cameron Williamson',
    role: 'Designer',
    text: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    avatar: 'avatar.png',
    image: 'necklace.jpg',
  },
  // Add more testimonials here:
  // {
  //   name: 'Jane Doe',
  //   role: 'Stylist',
  //   text: 'Another testimonial...',
  //   avatar: 'avatar2.png',
  //   image: 'ring.jpg',
  // },
];

let currentIndex = 0;

const reviewerName = document.querySelector('.reviewer-name');
const reviewerRole = document.querySelector('.reviewer-role');
const testimonialText = document.querySelector('.testimonial-text');
const reviewerAvatar = document.querySelector('.reviewer-avatar');
const cardImage = document.querySelector('.card-image img');
const navBtns = document.querySelectorAll('.nav-btn');

function updateTestimonial(index) {
  const t = testimonials[index];
  if (!t) return;
  if (reviewerName) reviewerName.textContent = t.name;
  if (reviewerRole) reviewerRole.textContent = t.role;
  if (testimonialText) testimonialText.textContent = t.text;
  if (reviewerAvatar) reviewerAvatar.src = t.avatar;
  if (cardImage) cardImage.src = t.image;
}

navBtns[0]?.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial(currentIndex);
});

navBtns[1]?.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonial(currentIndex);
});


// ─── SMOOTH SCROLL ───────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// ─── HEADER SHADOW ON SCROLL ─────────────────────────────────
const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
  } else {
    header.style.boxShadow = 'none';
  }
});
