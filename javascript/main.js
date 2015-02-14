$( document ).ready(function() {
    $('img').each(function() {
        var b = 15,
            h = $(this).height(),
            x = Math.floor(h/b)*b;
        $(this).css('height',x);
    });
});
