$(document).ready(function(){
    $('.nav-button').click(function(){
        $('.nav-menu').css('transform','scale(1,1)');
    });
$('.nav-close').click(function(){
    $('.nav-menu').css('transform', 'scale(0,0)');
});
    var winHeight = $(window).height();
    var heroHeight = winHeight - 70;
    $('.hero').height(heroHeight + 'px');

    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate( {
            'scrollTop': $target.offset().top-40
        }, 900, 'swing', function () {
            window.location.hash = target;
        } );
    } );

    $(window).scroll(function () {
        var docHeight = $(document).height();
        var winHeight = $(window).height();
        var pageHeight = docHeight - winHeight;
        var docOffset = $(document).scrollTop();
        var slideFast = pageHeight * .1;
        var decBar = docOffset / pageHeight;
        var percentBar = decBar * 100 + '%';
        var slowCrawl =  (decBar / 2) * 100 + '%';
        $('#info').css("background-position", '0 ' + slowCrawl);

        var wideLogoWidth = $('.wide-logo').width();
        $('.logo').width(wideLogoWidth);

if(docOffset > heroHeight){
    $('.slider').fadeIn();
        $('.logo .wide-logo').height('30');
    $('.logo .s-logo').fadeOut();
}
else{
    $('.slider').fadeOut();
        $('.widelogo').height('50');
        $('.s-logo').fadeIn();
};

        // $('.slider').css("width", percentBar);
    });



    // svg drawing below

    // // Get a reference to the <path>
    // uncomment next line to turn on
    var path = document.querySelector('#wave-spectrum');

// Get length of path... ~577px in this case
    var pathLength = path.getTotalLength();

// Make very long dashes (the length of the path itself)
    path.style.strokeDasharray = pathLength + ' ' + pathLength;

// Offset the dashes so the it appears hidden entirely
    path.style.strokeDashoffset = pathLength;

// Jake Archibald says so
// https://jakearchibald.com/2013/animated-line-drawing-svg/
    path.getBoundingClientRect();

// When the page scrolls...
    window.addEventListener("scroll", function(e) {
var waveStart = heroHeight - 200;
        // What % down is it?
        // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
        // Had to try three or four differnet methods here. Kind of a cross-browser nightmare.
        var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop - waveStart) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
console.log(scrollPercentage);
        // Length to offset the dashes
        var drawLength = pathLength * scrollPercentage;

        // Draw in reverse
        path.style.strokeDashoffset = pathLength - drawLength;

        // When complete, remove the dash array, otherwise shape isn't quite sharp
        // Accounts for fuzzy math

        path.style.strokeDasharray = pathLength + ' ' + pathLength;

    });

});