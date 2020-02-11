// User specific scripts go here

$('#launchModal').click(function(e) {
  $('#exampleModal').modal({
    keyboard: false
  });
});

$('#doFade').click(function(e) {
  $('#fadeIn').fadeIn('slow');
});
