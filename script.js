const sections = document.querySelectorAll('.section');

const options = {
  root: null, 
  rootMargin: '0px 0px -100px 0px', 
  threshold: 0 
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      
     
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(sec => observer.observe(sec));