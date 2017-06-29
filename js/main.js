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

const images = [
    'MG_3438.jpg',
    'MG_3560.jpg',
    'MG_3241.jpg',
]
var index = 0
function changeImage() {
    var margeBkg = $('.marge-background')
    margeBkg.fadeOut(1000, () => {
        margeBkg.css('backgroundImage', `url(../${images[index]})`).fadeIn(5000)
        index = (index + 1) % images.length
    })
}
setInterval(changeImage, 10000)
