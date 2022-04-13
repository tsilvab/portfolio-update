$(document).ready(function(){
    $('#open').click(function(){
$('#myModal').slideToggle('slow');
    });
    $("#close").click(function(){
        $('#myModal').fadeOut('slow');

    });
  });