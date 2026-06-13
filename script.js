const year = document.getElementById('year');
const themeToggle = document.getElementById('themeToggle');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const registerForm = document.getElementById('registerForm');
const registerMessage = document.getElementById('registerMessage');
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    document.body.dataset.theme = currentTheme;
    themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  });
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

if (registerForm && registerMessage) {
  registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(registerForm);
    const password = data.get('password');
    const confirmPassword = data.get('confirmPassword');

    if (password !== confirmPassword) {
      registerMessage.textContent = 'Passwords do not match.';
      return;
    }

    const name = data.get('name');
    registerMessage.textContent = `Welcome, ${name || 'user'}! Your account is ready.`;
    registerForm.reset();

    window.setTimeout(() => {
      window.location.href = 'subscription.html';
    }, 600);
  });
}

if (loginForm && loginMessage) {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(loginForm);
    const email = data.get('email');
    loginMessage.textContent = `Welcome back, ${email || 'user'}!`;
    loginForm.reset();

    window.setTimeout(() => {
      window.location.href = 'subscription.html';
    }, 600);
  });
}
