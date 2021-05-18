'use strict';

document.addEventListener('mousemove', function (event) {
  let g = Math.round((event.pageX * 255) / window.innerWidth);
  let b = Math.round((event.pageY * 255) / window.innerHeight);
  document.body.style.backgroundColor = `rgb(${g}, 0, ${b})`;
});
