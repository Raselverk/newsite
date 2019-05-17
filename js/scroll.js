  $(document).ready(function(){
    $(".menu").on("click","a", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 2000);
    });
});

$('#contact-form').submit((function(e){
  var name = $('#client-name');
  var email = $('#client-email');
  var message = $('#client-message');

if(name.value == "" || email.value == "" || message == ""){
  alertify.error('Please check your entries')
}else{
  $.ajax({
    url: "https://formspree.io/overko@windowslive.com",
    method:"POST",
    data: $(this).serialize(),
    dataType: "json"
  });
  e.preventDefault()
  $(this).get(0).reset()
  alertify.success('Message send')
}
}))