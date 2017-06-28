function updatePosition() {
  var backgrounds = $('.background')
  var newPos = window.pageYOffset / 2;
  translateY(backgrounds, newPos);
}

function translateY(backgrounds, value) {
  var translate = 'translateY(' + value + 'px)';
  backgrounds.each(function(elm) {
      this.style['-webkit-transform'] = translate;
      this.style['-moz-transform'] = translate;
      this.style['-ms-transform'] = translate;
      this.style['-o-transform'] = translate;
      this.style.transform = translate;
  })
}

window.addEventListener('scroll', updatePosition, false);
