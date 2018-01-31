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

  // 2GIS MAP
    // DG.then(function () {
    //     map = DG.map('map', {
    //         center: [54.98, 82.89],
    //         zoom: 13
    //     });

    //     DG.marker([54.98, 82.89]).addTo(map);
    // });

});
