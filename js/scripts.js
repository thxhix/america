// Also can pass in optional settings block
var rellax = new Rellax('.first-bg', {
	speed: -5,
	center: false,
	round: true,
	vertical: true
});

$(document).ready(function(){
	$('a[href^="#"]').on('click', function(e){
		e.preventDefault();
		var t = 1000;
		var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
		$('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
	});
});

$(function() {
	$(window).on("scroll resize", function() {
		var o = $(window).scrollTop() / ($(document).height() - $(window).height());
		$(".progress-bar").css({
			"transform": "scale3d(" + o + ", 1, 1)"
		});
	});
});

var rellax = new Rellax('#telegram-bg', {
	speed: -3,
	center: true,
	round: false,
	vertical: true
});

$(document).ready(function() {

	$('#ia-1').on('click', function(){$('#ia-hide-1').slideToggle(1000);});
	$('#ia-2').on('click', function(){$('#ia-hide-2').slideToggle(1000);});
	$('#ia-3').on('click', function(){$('#ia-hide-3').slideToggle(1000);});
	$('#ia-4').on('click', function(){$('#ia-hide-4').slideToggle(1000);});
	$('#ia-5').on('click', function(){$('#ia-hide-5').slideToggle(1000);});
	$('#ia-6').on('click', function(){$('#ia-hide-6').slideToggle(1000);});
	$('#ia-7').on('click', function(){$('#ia-hide-7').slideToggle(1000);});
});

// $input = $('.faq-hidden');
// $text = $('.faq-content');

// $($input).click(function(){
	
// 	if ($(this).is(':checked')){
// 		$($text).eq(id).slideDown(500);

// 	} else {
// 		$($text).eq(id).slideUp(500);
// 	}
// });

$('[data-tab]').on('click', function () {
	var $tab = $(this);
	var id = $tab.attr('data-tab');
	var $container = $tab.closest('.faq-item');
	var $contents = $container.find('[data-content]');

	if ($(this).is(':checked')){
		$contents.slideDown(500).filter('[data-content="' + id + '"]');
	}else{
		$contents.slideUp(500).filter('[data-content="' + id + '"]');
	}
	
});