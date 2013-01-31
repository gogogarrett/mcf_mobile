x$.ready(function() {

  x$("#logout_form").on('submit', function() {
    window.localStorage.removeItem('programURL')
  });

  // home page logo image
  imageurl = x$('#bannerXL').attr("data-imageurl");
  x$('#bannerXL').css({background: "url('"+imageurl+"') no-repeat"});

  // login page logo
  // logo_url = x$("#logo-hold").attr('data-imageurl');
  // x$("#logo-hold").css({
    // background: "url('" + logo_url + "') no-repeat"
  // });

  x$("._approvals nav a").on('click', function(e) {
    e.preventDefault();
    status = x$(this).attr('data-status');

    switch(status) {
    case "pending":
      x$('*[data-status="pending"]').removeClass('hidden');
      x$('*[data-status="approved"]').addClass('hidden');
      x$('*[data-status="denied"]').addClass('hidden');
      break;
    case "approved":
      x$('*[data-status="pending"]').addClass('hidden');
      x$('*[data-status="approved"]').removeClass('hidden');
      x$('*[data-status="denied"]').addClass('hidden');
      break;
    default:
      x$('*[data-status="pending"]').addClass('hidden');
      x$('*[data-status="approved"]').addClass('hidden');
      x$('*[data-status="denied"]').removeClass('hidden');
    }

    return false;
  });

});
