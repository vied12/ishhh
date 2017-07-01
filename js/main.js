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
    {img: 'MG_3345.jpg', color: '#2c7373', logo: 'logo-Ishhh-vert-jaune.eps.png'},
    {img: 'MG_3438.jpg', color: 'rgb(251, 247, 251)', logo: 'logo-Ishhh-bleu-vert.eps.png', text: 'black'},
    {img: 'MG_3518.jpg', color: '#0032b8', logo: 'ishhh-dégradé-BD.png'},
    {img: 'MG_3560.jpg', color: 'rgb(251, 247, 251)', logo: 'logo-Ishhh-jaune-rouge.eps.png', text: 'black'},
    {img: 'MG_3241.jpg', color: '#e94c45', logo: 'ishhh.png'},
]
var index = 0
function isMobile() {
    return $('.marge-background').css('position') !== 'fixed'
}
function changeImage() {
    if (isMobile()) {
        return
    }
    var margeBkg = $('.marge-background')
    var logo = $('.logo')
    logo.fadeOut(1000, () => {
        logo.attr('src', images[index].logo)
        logo.fadeIn(5000)
    })
    $('body, a, a:hover, a:active, a:visited').css({
        color: images[index].text || 'white',
    })
    margeBkg.fadeOut(1000, () => {
        margeBkg.css('backgroundImage', `url(../${images[index].img})`).fadeIn(5000)
        $('body').css({
            backgroundColor: images[index].color,
        })
        index = (index + 1) % images.length
    })
}

function preload(arrayOfImages) {
    console.log(arrayOfImages)
    arrayOfImages.forEach(function(url){
        var img = $('<img/>').attr('src', url).appendTo('body').css({
            opacity: 0,
            position: 'absolute',
        })
    });
}
preload(images.map((image) => (image.logo)))
setInterval(changeImage, 10000)
