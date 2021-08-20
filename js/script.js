//Индекс слайда по умолчанию
function currentSlide(n) {
  var i;
  var slides = document.getElementsByClassName("item");
  var dots = document.getElementsByClassName("slider__dots-item");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slider__dots-item_active", "");
  }

  slides[n].style.display = "block";
  dots[n].className += " slider__dots-item_active";
}

//делаем бургер кликабельным
$(document).ready(function () {
  $('.burger').click(function (event) {
    $('.burger').toggleClass('burger_active');
    $('.header__menu').toggleClass('header__menu_active');
    $('body').toggleClass('lock');
  });
});

/*For images*/
function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}
ibg();