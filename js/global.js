document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile Menu Logic ---
  // (এই অংশটি আপনার কোডের মতোই আছে, শুধু null check যোগ করা হয়েছে)
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const overlay = document.querySelector('.menu-overlay');
  const closeBtn = document.querySelector('.nav-close-btn');

  // Function to close the menu
  function closeMenu() {
    if (navLinks) navLinks.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
  }

  // Function to open the menu
  function openMenu() {
    if (navLinks) navLinks.classList.add('active');
    if (overlay) overlay.classList.add('active');
  }

  // Event Listeners
  if (hamburger) {
    hamburger.addEventListener('click', openMenu);
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }
  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  // --- Dark Mode Persistence Logic ---
  // (এই অংশটি আপনার সমস্যার সমাধান করবে)
  const themeToggle = document.querySelector('.theme-toggle');
  
  // ১. পেজ লোড হওয়ার সাথে সাথে localStorage-এ সেভ করা থিম খুঁজবে
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    // যদি কোনো থিম সেভ করা থাকে, সেটি অ্যাপ্লাই করবে
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else {
    // যদি কিছু সেভ করা না থাকে, তাহলে 'light' মোড ডিফল্ট হিসেবে রাখবে
    document.documentElement.setAttribute('data-theme', 'light');
  }

  // ২. যখন টগল বাটনটি ক্লিক করা হবে...
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      let newTheme;
      const currentTheme = document.documentElement.getAttribute('data-theme');
      
      // চেক করবে বর্তমান থিম কোনটি এবং সেটিকে পরিবর্তন করবে
      if (currentTheme === 'dark') {
        newTheme = 'light';
      } else {
        newTheme = 'dark';
      }
      
      // নতুন থিমটি <HTML> ট্যাগে অ্যাপ্লাই করবে
      document.documentElement.setAttribute('data-theme', newTheme);
      
      // ***সবচেয়ে গুরুত্বপূর্ণ: নতুন থিমের পছন্দটি localStorage-এ সেভ করবে***
      localStorage.setItem('theme', newTheme);
    });
  }
});