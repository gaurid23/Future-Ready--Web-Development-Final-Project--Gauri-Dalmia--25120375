// Scroll reveal
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

// Product selector
const serviceSelect = document.getElementById('service');
const productField  = document.getElementById('product-field');
const productSelect = document.getElementById('product');

serviceSelect.addEventListener('change', function () {
  productField.style.display =
    this.value === 'Ads & Instagram Posts' ? 'flex' : 'none';
});

// Pre-fill
window.addEventListener('load', function () {
  const saved = localStorage.getItem('enquiry_product');
  if (saved) {
    serviceSelect.value = 'Ads & Instagram Posts';
    productField.style.display = 'flex';
    productSelect.value = saved;
    localStorage.removeItem('enquiry_product');
  }
});

// Button feedback
document.querySelector('.btn-submit').addEventListener('click', function () {
  this.textContent = 'Message Sent ✦';
  this.style.background = 'var(--charcoal)';
  setTimeout(() => {
    this.textContent = 'Send Enquiry';
    this.style.background = '';
  }, 3000);
});