"use strict";$=jQuery;var aurl=window.location.pathname;function initMap(){var e={lat:1.28326,lng:103.844879},l=new google.maps.Map(document.getElementById("google-map"),{zoom:14,center:e}),t=(new google.maps.Marker({position:e,map:l}),new google.maps.StyledMapType([{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]}],{nam:"Styled Map"}));l.mapTypes.set("map_styple",t),l.setMapTypeId("map_styple")}""!==(aurl=aurl.replace("/",""))&&"index.html"!==aurl?$('header ul li a[href$="'+aurl+'"]').parent("li").addClass("active"):$("header ul li:first-child").addClass("active"),""!==aurl&&"index.html"!==aurl?$('header.menu-nav-show ul li a[href$="'+aurl+'"]').parent("li").addClass("active"):$("header.menu-nav-show ul li:first-child").addClass("active"),""!==aurl&&"index.html"!==aurl?$('footer ul li a[href$="'+aurl+'"]').parent("li").addClass("active"):$("footer ul li:first-child").addClass("active"),"single-work.html"===aurl&&$("header ul li:nth-child(2)").addClass("active"),"single-blog.html"===aurl&&$("header ul li:nth-child(4)").addClass("active"),$(function(){$(".home-page--banner-top--cont-slider-image").slick({dots:!0,arrows:!1,autoplay:!0,speed:1300,infinite:!0,slidesToShow:1,slidesToScroll:1}),$(".header-mobile .btn-bar").click(function(){$(this).toggleClass("active-menu-show"),$(".header-desktop").toggleClass("menu-nav-show"),$(".background-full-black").toggleClass("show-background-full-screen"),$("body").toggleClass("no-Scroll")}),$(window).resize(function(){$(window).height()<420&&$(".header-desktop").addClass("overlow-y-scroll"),420<$(window).height()&&$(".header-desktop").removeClass("overlow-y-scroll")}),$(document).ready(function(){$(window).scroll(function(e){100<$("html,body").scrollTop()?$(".button-bottom-scroll").addClass("show-btn-scroll"):$(".button-bottom-scroll").removeClass("show-btn-scroll")}),$(".button-bottom-scroll").click(function(e){$("html,body").animate({scrollTop:0},1300)})})}),"contact.html"===aurl&&initMap(),$(".btn-send").click(function(){var e=$(".name-input").val(),l=$(".email-input").val(),t=$(".phone-input").val(),r=$(".message-input").val(),o=$(".effect-after-send"),a=parseInt(t),s=1*a;""===e||""===l||""===t||""===r?(o.attr("style","color:red"),o.html(" Error: You have not entered all the required values !")):s===a?8<t.length?(o.attr("style","color:green"),o.html("Sent successfully !!!")):(o.attr("style","color:red"),o.html("Error: At phone number is not number phone !")):(o.attr("style","color:red"),o.html("Error: At phone number It's not number !"))});