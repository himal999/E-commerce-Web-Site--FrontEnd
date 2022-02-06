$('#check-bar-icon').click(function(){
      $(".bar-nav").css('display','flex')
      $(".bar-nav-cancel").css('display','block')
      $('#check-bar-icon').css('display','none')
});

$('.bar-nav-cancel').click(function(){
    $('#check-bar-icon').css('display','block')
    $(".bar-nav-cancel").css('display','none')
    $(".bar-nav").css("display","none")
})

/*SEARCH START*/
$('#main-search').click(function(){
    $('.header-search').css('display','block')
    $('#main-search').css('display','none')
})

$('.fa-times').click(function(){
   
     $('.header-search').css('display','none')
     $('#main-search').css('display','block')
  
})

/*SEARCH END*/