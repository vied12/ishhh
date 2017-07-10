function updatePosition() {
  var background = $('.background')[0]
  var newPos = window.pageYOffset / 2;
  translateY(background, newPos);
}

function translateY(background, value) {
  var translate = 'translateY(' + value + 'px)';
      background.style['-webkit-transform'] = translate;
      background.style['-moz-transform'] = translate;
      background.style['-ms-transform'] = translate;
      background.style['-o-transform'] = translate;
      background.style.transform = translate;
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
    $('body').css({
        backgroundColor: images[index].color,
    })
    margeBkg.fadeOut(1000, () => {
        margeBkg.css('backgroundImage', `url(../${images[index].img})`).fadeIn(5000)
        index = (index + 1) % images.length
    })
}

function preload(arrayOfImages) {
    var container = $('<div/>')
    arrayOfImages.forEach(function(url){
        var img = $('<img/>').attr('src', url).appendTo(container)
    });
    $(container).appendTo('body').css({
        opacity: 0,
        height: 0,
        width: 0,
        overflow: 'hidden',
    })
}
if (!isMobile()) {
    preload([...images.map((image) => (image.img)), ...images.map((image) => (image.logo))])
}
setInterval(changeImage, 10000)
