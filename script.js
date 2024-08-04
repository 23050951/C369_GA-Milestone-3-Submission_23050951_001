// Testimonial Slider Functionality
(function() {
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
  
    function showTestimonial(index) {
      testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
      });
      testimonials[index].classList.add('active');
    }
  
    function prevTestimonial() {
      currentTestimonial--;
      if (currentTestimonial < 0) {
        currentTestimonial = testimonials.length - 1;
      }
      showTestimonial(currentTestimonial);
    }
  
    function nextTestimonial() {
      currentTestimonial++;
      if (currentTestimonial >= testimonials.length) {
        currentTestimonial = 0;
      }
      showTestimonial(currentTestimonial);
    }
  
    // Show the first testimonial on page load
    showTestimonial(currentTestimonial);
  
    // Event listeners for the buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', prevTestimonial);
    }
  
    if (nextBtn) {
      nextBtn.addEventListener('click', nextTestimonial);
    }
  })();
  
  // Menu Toggle Functionality
  (function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
  
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('show');
    });
  })();
  
  // Loan Calculator Functionality
  function calculateLoan() {
    const amount = document.getElementById('loan-amount').value;
    const rate = document.getElementById('interest-rate').value;
    const term = document.getElementById('loan-term').value;
  
    if (amount && rate && term) {
      const monthlyRate = (rate / 100) / 12;
      const numberOfPayments = term * 12;
      const monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
      const totalCost = monthlyPayment * numberOfPayments;
  
      document.getElementById('monthly-payment').textContent = `$${monthlyPayment.toFixed(2)}`;
      document.getElementById('total-cost').textContent = `$${totalCost.toFixed(2)}`;
    }
  }
  