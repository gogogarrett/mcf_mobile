if ( window.localStorage.getItem('programURL') !== null ) {
  x$('.mobile_only').css({'display': 'none'});
  stored_programURL = window.localStorage.getItem('programURL');
  x$('#program_url').attr('value', stored_programURL);
}

x$('#loginform form').on('submit', function() {
  var programURL = x$('#program_url').attr('value');
  if ( window.localStorage.getItem('programURL') === null ) {
    window.localStorage.setItem('programURL', programURL);
  }
});
