$(window).scroll(function() {

    var scrollPos = $(this).scrollTop() /20;
    console.log(scrollPos);

    $('.right-content').css ({
        'left' : 0 + scrollPos + 'px'
    })

    $('.left-content').css ({
        'right' : 0 + scrollPos + 'px'
    })

})