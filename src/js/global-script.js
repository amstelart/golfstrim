//
// GLOBAL SCRIPT
//

$(document).ready(function(){

  $("#owl-carousel-equipment").owlCarousel({
    items: 3,
    nav: false,
    margin:30,
    loop: true,
    navText: ['<svg width="26" height="48" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="26" height="48" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    // navText: ['<svg width="26" height="48"><use xlink:href="img/sprite-svg.svg#icon-prev"></use></svg>','<svg width="26" height="48"><use xlink:href="img/sprite-svg.svg#icon-next"></use></svg>'],
    responsive : {
      0 : {
        items: 1,
        nav: false,
        loop: true,
        center: true,
      },
      480 : {
        items: 2,
      },
      768 : {
        items: 2,
      },
      992 : {
        items: 3,
      },
      1200 : {
        items: 4,
        nav: true,
      }
    }
  });

  $(".image-carousel").owlCarousel({
    items: 1,
    nav: false,
    loop: true
  });

  $(".brand-carousel").owlCarousel({
    items: 3,
    nav: true,
    margin:30,
    navText: ['<svg width="26" height="48" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="26" height="48" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    loop: true
  });

  $(".product-carousel").owlCarousel({
    items: 3,
    nav: false,
    margin:30,
    loop: false
  });

  var demoNoUiSlider = document.getElementById('price-nouislider');
  var demoNoUiSliderStartInput = document.getElementById('price-nouislider-start');
  var demoNoUiSliderEndInput = document.getElementById('price-nouislider-end');
  noUiSlider.create(demoNoUiSlider, {
    start: [demoNoUiSliderStartInput.value, demoNoUiSliderEndInput.value],
    connect: true,
    step: 1,
    range: {
      'min': 0,
      'max': 100
    }
  });
  demoNoUiSlider.noUiSlider.on('update', function( values, handle ) {
    var value = values[handle];
    if ( handle ) {
      demoNoUiSliderEndInput.value = Math.round(value);
    } else {
      demoNoUiSliderStartInput.value = Math.round(value);
    }
  });
  demoNoUiSliderEndInput.addEventListener('change', function(){
    demoNoUiSlider.noUiSlider.set([null, this.value]);
  });
  demoNoUiSliderStartInput.addEventListener('change', function(){
    demoNoUiSlider.noUiSlider.set([this.value, null]);
  });

  // 2GIS MAP
    // DG.then(function () {
    //     map = DG.map('map', {
    //         center: [54.98, 82.89],
    //         zoom: 13
    //     });

    //     DG.marker([54.98, 82.89]).addTo(map);
    // });

});
