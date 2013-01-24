x$.ready(function() {
  imageurl = x$('#bannerXL').attr("data-imageurl");
  x$('#bannerXL').css({background: "url('"+imageurl+"') no-repeat"});

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

  var data = {};
  x$('form input').each(function(elem){
    data[elem.name] = elem.value;
  });
  x$('form textarea').each(function(elem){
    data[elem.name] = elem.value;
  });

  var stringData = JSON.stringify(data);
  // auth_token = $form.find('input[name="authenticity_token"]').attr("value");

  // all_data = {
  //   "utf8": "✓",
  //   "authenticity_token": auth_token,
  //   "commentt": {
  //       "state": x$("#commentt_state").attr('value'),
  //       "content": x$("#commentt_content").attr('value'),
  //       "commenter_id": x$("#commentt_commenter_id").attr('value'),
  //       "commenter_type": "User"
  //     },
  //   "commit": "Create Commentt",
  //   "approval_id": window.location.pathname.split("/")[2]
  // }
  // JSON.stringify(all_data);

  var token = x$("meta[name='csrf-token']").attr("content");
  $form.attr('data-remote', false)
  $form = x$(".comments form");

  $form.on('submit', function(e) {
    e.preventDefault();

    x$(this).xhr(x$(this).attr('action'), {
      method:   'post',
      async:    'true',
      headers: { 'X-CSRF-Token': token },
      data:     {}, // data here
      callback: function() {
        // stuff here
      }
    });
  });

});
