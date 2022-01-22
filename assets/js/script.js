$(document).ready(function(){

   
    $(function() {

        $('[data-toggle="tooltip"]').tooltip()
    
    })

   //var myCarousel = document.querySelector('#myCarousel')
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 2000,
      wrap: false
    })//
    $('#myCarousel.slide').carousel({

      interval: 5000,

      pause: "hover",

  })
   
   







})

