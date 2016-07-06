$(function () {
    $('.ui-link').removeClass('ui-link');

    $('.toggle').click(function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $(target).toggleClass('hidden show');
    });

});
