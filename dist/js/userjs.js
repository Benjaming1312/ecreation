"use strict";function indexOwl(){$(".banner .owl-carousel").owlCarousel({items:1,autoplay:!0,nav:!1,dots:!1,loop:!0,animateOut:"fadeOut",animateIn:"fadeIn",autoPlaySpeed:5e3,autoPlayTimeout:1500,smartSpeed:1500,autoplayHoverPause:!1})}function parallax(){var e=.518*$(window).width()-150,a=.79*$(window).width()-150,o=1.35*$(window).width()-150;$(".fixed-1").attr("style","top: "+parseInt(e)+"px"),$(".fixed-1").parallax({speed:.3,src:"dist/images/fixed-1.png"}),$(".fixed-2").attr("style","top: "+parseInt(a)+"px"),$(".fixed-2").parallax({speed:.1,src:"dist/images/fixed-2.png"}),$(".fixed-3").attr("style","top: "+parseInt(o)+"px;"),$(".fixed-3").parallax({speed:.1,src:"dist/images/fixed-3.png"})}function parallaxMobile(){$(".mobile-fixed-1").parallax({speed:.3,src:"dist/images/mobile-section-img-1.png"}),$(".mobile-fixed-2").parallax({speed:.2,src:"dist/images/mobile-section-img-2.png"}),$(".mobile-fixed-3").parallax({speed:.1,src:"dist/images/mobile-section-img-3.png"})}function gotop(){$("html, body").animate({scrollTop:0},1e3)}function scrollTo(e){$("html, body").animate({scrollTop:$(e).offset().top-100},1e3)}function backgroundHeight(){$(".section.backgroud .bg").attr("style","height: "+$(".wrap").height()+"px")}function carouselPaddingTop(){$(".section.banner").attr("style","padding-top: "+$(".navbar.navbar-fixed-top").height()+"px")}function sendForm(){var e=$("#name").val(),a=$("#mail").val(),o=$("#tel").val(),t=$("#question").val(),i=$("#content").val();""===e||""===a||""===o||""===t||""===i?alert("尚未填寫完全"):a.indexOf("@")<0?alert("e-mail 格式不正確"):($.get("https://script.google.com/macros/s/AKfycbzG0DpvykDF1-vOZto26aMkgr4SuvmvsIuGGVA99sdO7SYbr_mK/exec",{name:e,mail:a,tel:o,title:t,content:i}),location.replace("/"))}$(function(){backgroundHeight(),AOS.init();var e=$(".section-logo svg").attr("id"),a=new Vivus(e,{duration:200,type:"oneByOne"}),o=$(".section-svg svg").attr("id");new Vivus(o,{duration:200,type:"oneByOne"});indexOwl(),$(window).width()>992?(backgroundHeight(),parallax(),$(window).on("resize",function(){parallax(),backgroundHeight()})):(carouselPaddingTop(),parallaxMobile(),$("#navbar a").click(function(){$(".navbar-toggle").click()}),$(window).on("resize",function(){carouselPaddingTop(),parallaxMobile()})),$(window).scroll(function(){$(".gotop").stop().animate({top:$(window).scrollTop()+300},1e3),$(window).scrollTop()>$(".section-logo").offset().top-300&&a.play(1),$(window).scrollTop()>$(".section-svg").offset().top-300&&a.play(1)})});