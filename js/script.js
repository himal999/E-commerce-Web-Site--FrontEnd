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