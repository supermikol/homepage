$(document).ready(function() {
  $('.sidelink').mouseenter(function(){
    $(this).fadeTo('fast', 0.5);
  });
  $('.sidelink').mouseleave(function() {
    $(this).fadeTo('fast', 1);
  });
  $('#logo').mouseenter(function(){
  $(this).fadeTo('fast', 0.8);
  });
  $('#logo').mouseleave(function() {
    $(this).fadeTo('fast', 1);
  });
  $('#tagname').mouseenter(function(){
  $(this).fadeTo('fast', 0.5);
  });
  $('#tagname').mouseleave(function() {
  $(this).fadeTo('fast', 1);
  });
  $('.sidelink').focus(function(){
    $(this).css('outline-style', 'solid');
    $(this).css('outline-color', '#00FFFF');
  });
});

