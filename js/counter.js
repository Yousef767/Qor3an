function animateCounters() {
  const counters = document.querySelectorAll('.counter h1');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-num');
    let start = target > 5000 ? Math.floor(target / 10000) * 10000 : 0; 

    const increment = (target - start) / (4000 / 16); 

    function updateCounter() {
      const current = +counter.innerText.replace(/\D/g, '');
      if (current < target) {
        counter.innerText = Math.ceil(current + increment).toLocaleString() + '+';
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target.toLocaleString() + '+';
      }
    }

    counter.innerText = start.toLocaleString() + '+';
    requestAnimationFrame(updateCounter);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const countersContainer = document.querySelector('.counters');
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCounters();
      observer.disconnect();
    }
  });

  observer.observe(countersContainer);
});