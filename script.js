 const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Live time in threat monitor
  function updateTime() {
    const el = document.getElementById('live-time');
    if (el) {
      const now = new Date();
      el.textContent = now.toTimeString().slice(0, 8);
    }
  }
  setInterval(updateTime, 1000);
  updateTime();

  // Nav scroll effect
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.style.borderBottomColor = 'rgba(0,245,212,0.25)';
    } else {
      nav.style.borderBottomColor = 'rgba(0,245,212,0.12)';
    }
  });