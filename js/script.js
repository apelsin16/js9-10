

$(function() {
  $('.jcarousel').jcarousel({
      animation: 'slow',
      wrap: 'circular'  // Core configuration goes here
  });
  $('.jcarousel-prev').jcarouselControl({
    target: '-=1'
  });

  $('.jcarousel-next').jcarouselControl({
    target: '+=1'
  });
  $('.jcarousel-pagination').jcarouselPagination({
     'perPage': 3,
     'carousel': $('.jcarousel'),
  'item':  function(page, carouselItems) {
        return '<a href="#' + page + '">' + page + '</a>';
    }
   });

   $('#country').select2();
   $('.checkbox').deepcheckbox();

   var $links = $('.menu a');
   $links.on('click', function(e){
     var $submenu =  $(this).siblings('.submenu');

     e.preventDefault();
     $submenu.slideToggle();
     var $subsubmenu = $(this).siblings('.subsubmenu');
     $subsubmenu.slideToggle();

     $('.submenu a').animate({
       backgroundColor:"#DC143C",
     }, 500);


   });

});
