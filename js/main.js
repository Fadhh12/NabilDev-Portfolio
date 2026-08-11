/* ================================================
   NabilDev Portfolio — Main JS
   ================================================ */

/* === CURSOR GLOW === */
const cursorGlow = document.getElementById('cursor-glow');
if (cursorGlow) {
  document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
  });
}

/* === NAV SCROLL EFFECT & ACTIVE LINK === */
const nav = document.getElementById('main-nav');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  // Nav scrolled state
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }

  // Active link
  let current = '';
  sections.forEach(sec => {
    const sectionTop = sec.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = sec.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

/* === MOBILE HAMBURGER === */
const hamburger = document.getElementById('nav-hamburger');
const drawer = document.getElementById('nav-drawer');
const drawerLinks = document.querySelectorAll('#nav-drawer a');

if (hamburger && drawer) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    drawer.classList.toggle('open');
    document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
  });

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* === SCROLL REVEAL === */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

/* ================================================
   LANYARD / ID CARD PHYSICS
   ================================================ */
const idCard = document.getElementById('id-card');
const lanyardRope = document.querySelector('.lanyard-rope');

if (idCard) {
  let isDragging = false;
  let startX, startY, cardX = 0, cardY = 0;
  let velX = 0, velY = 0;
  let lastX, lastY;
  let animFrameId;
  let isFloating = true;
  let floatStart = performance.now();

  // Current card position from initial center
  let posX = 0, posY = 0;

  function getCardRect() {
    return idCard.getBoundingClientRect();
  }

  function applyTransform(x, y, rotX, rotY) {
    idCard.style.transform = `translateX(calc(-50% + ${x}px)) translateY(${y}px) perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  }

  // Float animation (when not dragging)
  function floatAnimation(now) {
    if (isDragging) return;
    const elapsed = (now - floatStart) / 1000;
    const floatY = Math.sin(elapsed * 0.8) * 10;
    const floatX = Math.sin(elapsed * 0.5) * 4;
    const rotZ = Math.sin(elapsed * 0.6) * 1.5;
    idCard.style.transform = `translateX(calc(-50% + ${posX + floatX}px)) translateY(${posY + floatY}px) rotate(${rotZ}deg)`;
    animFrameId = requestAnimationFrame(floatAnimation);
  }

  // Start floating
  animFrameId = requestAnimationFrame(floatAnimation);

  // 3D tilt on hero hover (when not dragging)
  const heroSection = document.getElementById('home');
  if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
      if (isDragging) return;
      cancelAnimationFrame(animFrameId);
      const rect = heroSection.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      const rotY = dx * 20;
      const rotX = -dy * 15;
      const floatY = Math.sin((performance.now() - floatStart) / 1000 * 0.8) * 10;
      idCard.style.transform = `translateX(calc(-50% + ${posX}px)) translateY(${posY + floatY}px) perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });

    heroSection.addEventListener('mouseleave', () => {
      if (isDragging) return;
      floatStart = performance.now();
      animFrameId = requestAnimationFrame(floatAnimation);
    });
  }

  // --- DRAG START ---
  function onDragStart(e) {
    isDragging = true;
    cancelAnimationFrame(animFrameId);
    idCard.classList.add('dragging');
    idCard.style.animation = 'none';
    const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
    startX = clientX - posX;
    startY = clientY - posY;
    lastX = clientX;
    lastY = clientY;
    velX = 0;
    velY = 0;
  }

  // --- DRAG MOVE ---
  function onDragMove(e) {
    if (!isDragging) return;
    e.preventDefault();
    const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
    velX = clientX - lastX;
    velY = clientY - lastY;
    lastX = clientX;
    lastY = clientY;
    posX = clientX - startX;
    posY = clientY - startY;
    // Tilt based on velocity
    const tiltY = Math.max(-25, Math.min(25, velX * 2));
    const tiltX = Math.max(-25, Math.min(25, velY * -1));
    idCard.style.transform = `translateX(calc(-50% + ${posX}px)) translateY(${posY}px) perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  }

  // --- DRAG END with physics snap back ---
  function onDragEnd(e) {
    if (!isDragging) return;
    isDragging = false;
    idCard.classList.remove('dragging');

    // Spring physics snap back
    let snapVelX = velX * 0.5;
    let snapVelY = velY * 0.5;
    const stiffness = 0.12;
    const damping = 0.78;

    function springBack() {
      snapVelX += (0 - posX) * stiffness;
      snapVelY += (0 - posY) * stiffness;
      snapVelX *= damping;
      snapVelY *= damping;
      posX += snapVelX;
      posY += snapVelY;

      const dist = Math.abs(posX) + Math.abs(posY);
      const speed = Math.abs(snapVelX) + Math.abs(snapVelY);

      const rotY = snapVelX * 2;
      const rotX = snapVelY * -1;
      idCard.style.transform = `translateX(calc(-50% + ${posX}px)) translateY(${posY}px) perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;

      if (dist > 0.5 || speed > 0.2) {
        animFrameId = requestAnimationFrame(springBack);
      } else {
        posX = 0;
        posY = 0;
        floatStart = performance.now();
        animFrameId = requestAnimationFrame(floatAnimation);
      }
    }
    animFrameId = requestAnimationFrame(springBack);
  }

  // Mouse events
  idCard.addEventListener('mousedown', onDragStart);
  document.addEventListener('mousemove', onDragMove);
  document.addEventListener('mouseup', onDragEnd);

  // Touch events
  idCard.addEventListener('touchstart', onDragStart, { passive: false });
  document.addEventListener('touchmove', onDragMove, { passive: false });
  document.addEventListener('touchend', onDragEnd);
}

/* ================================================
   TECH STACK TABS
   ================================================ */
const stackData = {
  all: [
    { name: 'React', icon: '⚛️', level: 80 },
    { name: 'Next.js', icon: '▲', level: 75 },
    { name: 'Tailwind CSS', icon: '🌊', level: 85 },
    { name: 'HTML5', icon: '🟠', level: 90 },
    { name: 'Python', icon: '🐍', level: 85 },
    { name: 'PyTorch', icon: '🔥', level: 70 },
    { name: 'Node.js', icon: '💚', level: 72 },
    { name: 'FastAPI', icon: '⚡', level: 70 },
    { name: 'OpenCV', icon: '👁️', level: 68 },
    { name: 'Docker', icon: '🐳', level: 65 },
    { name: 'MySQL', icon: '🗄️', level: 75 },
    { name: 'PHP', icon: '🐘', level: 70 },
    { name: 'Java', icon: '☕', level: 65 },
    { name: 'Firebase', icon: '🔴', level: 72 },
    { name: 'Git', icon: '🔀', level: 82 },
    { name: 'AWS', icon: '☁️', level: 60 },
  ],
  frontend: [
    { name: 'React', icon: '⚛️', level: 80 },
    { name: 'Next.js', icon: '▲', level: 75 },
    { name: 'Tailwind CSS', icon: '🌊', level: 85 },
    { name: 'HTML5', icon: '🟠', level: 90 },
    { name: 'CSS3', icon: '🎨', level: 88 },
    { name: 'JavaScript', icon: '🟡', level: 82 },
    { name: 'Framer Motion', icon: '🎞️', level: 65 },
  ],
  aiml: [
    { name: 'Python', icon: '🐍', level: 85 },
    { name: 'PyTorch', icon: '🔥', level: 70 },
    { name: 'OpenCV', icon: '👁️', level: 68 },
    { name: 'YOLOv11', icon: '🎯', level: 65 },
    { name: 'Scikit-Learn', icon: '🧠', level: 70 },
    { name: 'Google Gemini', icon: '✨', level: 72 },
  ],
  backend: [
    { name: 'Node.js', icon: '💚', level: 72 },
    { name: 'FastAPI', icon: '⚡', level: 70 },
    { name: 'PHP', icon: '🐘', level: 70 },
    { name: 'Flask', icon: '🌿', level: 68 },
    { name: 'MySQL', icon: '🗄️', level: 75 },
    { name: 'Firebase', icon: '🔴', level: 72 },
    { name: 'SQLite', icon: '📦', level: 68 },
  ],
  devops: [
    { name: 'Docker', icon: '🐳', level: 65 },
    { name: 'AWS', icon: '☁️', level: 60 },
    { name: 'Git', icon: '🔀', level: 82 },
    { name: 'GitHub', icon: '⚫', level: 85 },
    { name: 'Linux', icon: '🐧', level: 62 },
  ],
};

const stackGrid = document.getElementById('stack-grid');
const catBtns = document.querySelectorAll('.stack-cat-btn');

function renderSkills(category) {
  const skills = stackData[category] || stackData.all;
  stackGrid.innerHTML = '';
  skills.forEach((skill, i) => {
    const card = document.createElement('div');
    card.className = 'skill-card reveal';
    card.style.transitionDelay = `${i * 0.05}s`;
    card.innerHTML = `
      <div class="skill-icon">${skill.icon}</div>
      <div class="skill-name">${skill.name}</div>
      <div class="skill-level">
        <div class="skill-level-fill" style="width: 0%" data-width="${skill.level}%"></div>
      </div>
    `;
    stackGrid.appendChild(card);
  });

  // Trigger reveal
  setTimeout(() => {
    stackGrid.querySelectorAll('.skill-card').forEach(card => {
      card.classList.add('visible');
      const fill = card.querySelector('.skill-level-fill');
      if (fill) fill.style.width = fill.dataset.width;
    });
  }, 50);
}

catBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    catBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderSkills(btn.dataset.cat);
  });
});

// Initial render
renderSkills('all');

/* === DOWNLOAD CV BUTTON === */
const dlBtn = document.getElementById('download-cv-btn');
if (dlBtn) {
  dlBtn.addEventListener('click', () => {
    // Create link pointing to cv directory
    const a = document.createElement('a');
    a.href = 'assets/cv/NabilFadhlur_CV.pdf';
    a.download = 'NabilFadhlur_CV.pdf';
    a.click();
  });
}

/* === CONTACT FORM === */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('.btn-primary');
    const originalText = btn.innerHTML;
    btn.innerHTML = '✓ Message Sent!';
    btn.style.background = '#4caf50';
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
      contactForm.reset();
    }, 3000);
  });
}

/* === SMOOTH SCROLL for anchor links === */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* === BARCODE - random widths for realism === */
const barcodeContainers = document.querySelectorAll('.idcard-barcode');
barcodeContainers.forEach(bc => {
  bc.innerHTML = '';
  const barWidths = [2, 1, 3, 1, 4, 1, 2, 2, 1, 3, 1, 1, 4, 2, 1, 3, 2, 1, 1, 2, 4, 1, 2, 1, 3, 1, 2];
  barWidths.forEach(w => {
    const bar = document.createElement('div');
    bar.className = 'barcode-bar';
    bar.style.cssText = `flex: ${w}; background: #1a1c18; height: 100%; border-radius: 1px;`;
    bc.appendChild(bar);
    // Add white gap
    const gap = document.createElement('div');
    gap.style.cssText = `flex: 1; background: white; height: 100%;`;
    bc.appendChild(gap);
  });
});

console.log('%c Nabil.dev Portfolio loaded ✓', 'color: #516139; font-weight: bold; font-size: 14px;');
