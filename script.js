$(document).ready(function() {
  $('#button').on('click', function(){
    $('#watermelon').animate({
      right: '120px'
    }, 'slow', function(){
      alert('That was cool');
    });
  });
});
