new WOW().init();
  AOS.init();
$('.rooms').slick({
  centerMode: true,
  centerPadding: '25vw',
  slidesToShow: 1,
  prevArrow: '.room-prev',
  nextArrow: '.room-next',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
  $('[data-targetit]').on('click', function(e) {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    var target = $(this).data('targetit');
    $('.' + target).siblings('[class^="box-"]').hide();
    $('.' + target).siblings('[class^="box-"]')
    $('.' + target).fadeIn();
    $(".product-list").slick("setPosition");
    $(".recommends-sec").slick("setPosition");
  });
  $('.menu-toggler').on('click', function(e) {
    $('.primary-nav').toggleClass('active');
  });

  const scrollTopBtn = document.querySelector(".scroll-btn");
  if(scrollTopBtn){
    scrollTopBtn.addEventListener("click", function () {
       let scrollValue = window.scrollY + window.innerHeight
        window.scrollTo(0, scrollValue)
    });
  }

   // Start upload preview image
   var basic = $("#main-cropper").croppie({
    viewport: { width: 200, height: 200, type: 'circle' },
    boundary: { width: 230, height: 230 },
    showZoomer: true,
    url: "http://lorempixel.com/500/400/",
   enableExif: true
  
  });
  
  function readFile(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $("#main-cropper").croppie("bind", {
          url: e.target.result
        });
        
      };
  
      reader.readAsDataURL(input.files[0]);
    }
  }
  $("#edit-pf").on("change", function() {
    $('.cr-slider').addClass('image-range')
    $('.cr-slider').removeClass('cr-slider')
    $('.modal-btn').click()
    
    // $('.popup-wrap').addClass('active')
    readFile(this);
  });
  
  $("#showResult").click(function() {
    $('.popup-wrap').removeClass('active')
    $("#main-cropper")
    .croppie("result", {
      type: "canvas",
        size: "viewport",
        circle: true
      })
      .then(function(resp) {
        $("#result").attr("src", resp);
        // let va = document.getElementById('my-avator')
        // va.value = 'C:\fakepath\placeholder.jpg'
        // va.files[0] = resp
        // console.log(va.files)
      });
      $('.close-modal').click()
    });

  
$('#daterange').daterangepicker();


$(document).ready( function () {
  $('#myTable').DataTable();
} );




  $(".eye-btn").on("click", function() {
    let input = $(this).parents('.field-wrap').find('.field')
    if(input.attr('type') == 'password'){
      input.attr('type', 'text')
      $(this).find('i').removeClass('fa-eye')
      $(this).find('i').addClass('fa-eye-slash')
    }else {
      input.attr('type', 'password')
      $(this).find('i').addClass('fa-eye')
      $(this).find('i').removeClass('fa-eye-slash')
    }
  });
  $(".search-btn, .search-toggler-btn").on("click", function() {
   $(this).toggleClass('active')
   $(this).parents('.header-secondary-items').toggleClass('active')
  });


  $(function(){
    var current = location.pathname.split('/').at(-1)
    $('.nav-btn').each(function(){
        let $this = $(this); 
        let link = $this.attr('href').split('/').at(-1)
        if(link == current){
            $this.addClass('active');
        }
    })
})


  $('#nav-icon1, .menu-closer').click(function(){
      $('#nav-icon1').toggleClass('open');
      $('.nav-area').toggleClass('active');
      $('.side-bar').toggleClass('active');
  });

const footer = document.querySelector('footer');
  function callback(entries) {
      entries.forEach(ent => {
        if(ent.isIntersecting){
          $('.scroll-btn').addClass('d-none') 
        }else {
          $('.scroll-btn').removeClass('d-none') 
        }
      })
  }
  let observer = new IntersectionObserver(callback);
  observer.observe(footer) 