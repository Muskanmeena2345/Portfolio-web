const texts = ["Software Developer", "Frontend Designer", "Tech Enthusiast"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing-text").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000);
  } else {
    setTimeout(type, 100);
  }
})();
  

  document.addEventListener('DOMContentLoaded', () => {
  const loaderWrapper = document.getElementById('loader-wrapper');
  const balls = document.getElementById('bouncing-balls');
  const triangle = document.getElementById('triangle');

  // Step 1: Show bouncing balls for 4 seconds
  setTimeout(() => {
    // Hide balls
    balls.style.display = 'none';

    // Show triangle with scale in
    triangle.style.display = 'block';
    requestAnimationFrame(() => {
      triangle.classList.add('show');
    });

    // Step 2: After 2 seconds, fade out triangle
    setTimeout(() => {
      triangle.classList.remove('show');
      triangle.classList.add('fadeout');

      // Step 3: After 1 second, hide loader and show page content
      setTimeout(() => {
        loaderWrapper.style.display = 'none';
        // Optionally fade in your main page content here if you want
        document.body.style.overflow = 'auto'; // enable scroll if disabled
      }, 1000);

    }, 2000);

  }, 4000);
});
