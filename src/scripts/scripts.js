/* eslint-disable eol-last */
$ = jQuery;
let aurl = window.location.pathname;
aurl = aurl.replace("/", "");
if (aurl !== '' && aurl !== 'index.html')
    $('header ul li a[href$="' + aurl + '"]').parent('li').addClass('active');
else
    $('header ul li:first-child').addClass('active');
// Mobile
if (aurl !== '' && aurl !== 'index.html')
    $('header.menu-nav-show ul li a[href$="' + aurl + '"]').parent('li').addClass('active');
else
    $('header.menu-nav-show ul li:first-child').addClass('active');
if (aurl !== '' && aurl !== 'index.html')
    $('footer ul li a[href$="' + aurl + '"]').parent('li').addClass('active');
else
    $('footer ul li:first-child').addClass('active');
// Single-active
if (aurl === 'single-work.html')
    $('header ul li:nth-child(2)').addClass('active');
if (aurl === 'single-blog.html')
    $('header ul li:nth-child(4)').addClass('active');
$(function() {
    //call-slick-home-page-banner-top
    $('.home-page--banner-top--cont-slider-image').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        speed: 1300,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    //ADD active for header mobile
    $('.header-mobile .btn-bar').click(function(){
        $(this).toggleClass('active-menu-show'),$('.header-desktop').toggleClass('menu-nav-show'),
        $('.background-full-black').toggleClass('show-background-full-screen'),
        $('body').toggleClass('no-Scroll');
    });
    $(window).resize(function(){
        if ($(window).height() < 420 )
            $('.header-desktop').addClass('overlow-y-scroll');
        if ($(window).height() > 420 )
            $('.header-desktop').removeClass('overlow-y-scroll');
    });
    $(document).ready(function(){
        $(window).scroll(function(event) {
            let top = $('html,body').scrollTop();
            if (top > 100)
                $('.button-bottom-scroll').addClass('show-btn-scroll');
            else
                $('.button-bottom-scroll').removeClass('show-btn-scroll');
        });
        $('.button-bottom-scroll').click(function(event) {
            $('html,body').animate({scrollTop: 0},1300);
        });
    });
});
//function google map
function initMap() {
    let styles = [
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
                }
            ]
        }
    ];
    // The location of Uluru
    let uluru = {lat: 1.283260, lng: 103.844879};
    // The map, centered at Uluru
    let map = new google.maps.Map(
        document.getElementById('google-map'), {zoom: 14, center: uluru});
    // The marker, positioned at Uluru
    let marker = new google.maps.Marker({position: uluru, map: map});
    let styledMap = new google.maps.StyledMapType(styles,{nam: "Styled Map"});
    map.mapTypes.set('map_styple', styledMap);
    map.setMapTypeId('map_styple');
}
if ( aurl === 'contact.html')
    initMap();

// Function onclick-contactUS
$('.btn-send').click(function(){
    //input
    let $name = $('.name-input').val();
    let $email = $('.email-input').val();
    let $phone = $('.phone-input').val();
    let $message = $('.message-input').val();
    let $out = $('.effect-after-send');
    //check
    // console.log($name); 
    let $num = parseInt($phone);
    let $a = $num * 1;
    if ( $name === '' || $email === '' || $phone === '' || $message === ''){
        $out.attr('style','color:red');
        $out.html(" Error: You have not entered all the required values !");
    }
    else {
        if ($a === $num){
            if ($phone.length > 8) {
                $out.attr('style','color:green');
                $out.html("Sent successfully !!!");  
            }
            else {
                $out.attr('style','color:red');   
                $out.html("Error: At phone number is not number phone !");  
            }
        }
        else {
            $out.attr('style','color:red');
            $out.html("Error: At phone number It's not number !");
        }
    }
});

