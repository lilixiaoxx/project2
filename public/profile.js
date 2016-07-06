$(function () {
    $('.ui-link').removeClass('ui-link');

    $('.toggle').click(function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $(target).toggleClass('hidden show');
    });

});
$('#demo').likeDislike();
$("#input-id").rating();

$('#demo').likeDislike({
	  // update like / dislike counters
	  click: function (btnType, likes, dislikes, event) {
	      var likesElem = $(this).find('.likes');
	      var dislikedsElem = $(this).find('.dislikes');
	      likesElem.text(parseInt(likesElem.text()) + likes);
	      dislikedsElem.text(parseInt(dislikedsElem.text()) + dislikes);
	  }
	});

  // $('#demo').likeDislike({
	//   reverseMode: true,
	//   activeBtn: localStorage['key']? localStorage['key'] : '',
	//   click: function(btnType, likes, dislikes, event) {
	//     var self = this;
	//     // lock the buttons
	//     self.readOnly(true);
	//     // send data to the server
	//     $.ajax({
	//       url: '/action',
	//       type: 'GET',
	//       data: 'id=1' + '&likes=' + likes + '&dislikes=' + dislikes,
	//       success: function (data) {
	//         // show new values
	//         $(self).find('.likes').text(data.likes);
	//         $(self).find('.dislikes').text(data.dislikes);
	//         localStorage['key'] = btnType;
	//         // unlock the buttons
	//         self.readOnly(false);
	//       }
	//     });
	//   }
	// });

  // $('#demo').likeDislike({
	//   click: null, // callback
	//   beforeClick: null, // callback
	//   initialValue: 0,
	//   reverseMode: false,
	//   readOnly: false,
	//   likeBtnClass: 'like',
	//   dislikeBtnClass: 'dislike',
	//   activeClass: 'active',
	//   disableClass: 'disable'
	// });
