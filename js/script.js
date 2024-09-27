(function ($) {

	
	// menu-stiky
	window.onscroll = function () {
		myFunction();
	};

	var navbar = document.getElementById("navbar-fix");
	var sticky = navbar.offsetTop;

	function myFunction() {
		if (window.pageYOffset >= sticky) {
			navbar.classList.add("menu-styke");
		} else {
			navbar.classList.remove("menu-styke");
		}
	}
	// swiper slider area start here
	// banner slider area
	var swiper = new Swiper(".banner-slide", {
		speed: 1000,
		loop: "true",
		navigation: {
			nextEl: ".arry-right",
			prevEl: ".arry-left",
		},
	});
	// banner2 slider area
	var swiper = new Swiper(".banner-slide2", {
		speed: 1000,
		effect: "fade",
		loop: "true",
		autoplay: {
			delay: 7000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".arry-right",
			prevEl: ".arry-left",
		},
	});
	// banner slider area
	var swiper = new Swiper(".banner-slide3", {
		speed: 1000,
		loop: "true",
		centeredSlides: true,
		slidesPerView: 1,
		spaceBetween: 10,
		speed: 1200,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".arry-right",
			prevEl: ".arry-left",
		},
		breakpoints: {
			992: {
				slidesPerView: 1,
			},
		},
	});
	// banner slider area
	var swiper = new Swiper(".banner-slide5", {
		speed: 1000,
		loop: "true",
		slidesPerView: 1,
		spaceBetween: 10,
		speed: 1200,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".arry-right",
			prevEl: ".arry-left",
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
		},
	});
	// banner slider area
	var swiper = new Swiper(".banner-slide6", {
		loop: "true",
		slidesPerView: 1,
		spaceBetween: 10,
		speed: 200,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".right-arry",
			prevEl: ".left-arry",
		},
		breakpoints: {
			575: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
		},
	});
	// blog slider area
	var swiper = new Swiper(".blog-slide", {
		speed: 500,
		loop: "true",
		navigation: {
			nextEl: ".right-arry",
			prevEl: ".left-arry",
		},
	});
	// follow slider area
	var swiper = new Swiper(".follow-slide", {
		spaceBetween: 0,
		speed: 2000,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		loop: "true",

		breakpoints: {
			320: {
				slidesPerView: 2,
			},
			575: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 5,
			},
			1400: {
				slidesPerView: 6,
			},
		},
	});
	// swiper slider area end here

	// shop single swiper slider area start here
	var swiper = new Swiper(".shop-slider-thumb", {
		loop: true,
		spaceBetween: 10,
		slidesPerView: 5,
		freeMode: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: ".right-arry",
			prevEl: ".left-arry",
		},
	});
	var swiper2 = new Swiper(".shop-single-slide", {
		speed: 1000,
		loop: "true",
		grabCursor: true,
		navigation: {
			nextEl: ".right-arry",
			prevEl: ".left-arry",
		},
		thumbs: {
			swiper: swiper,
		},
	});
	// shop single swiper slider area end here

	// WOW
	new WOW().init();

	// magnificPopup area star here
	$(".img-popup").magnificPopup({
		type: "image",
		gallery: {
			enabled: true,
		},
	});
	$(".video-popup").magnificPopup({
		type: "iframe",
		iframe: {
			markup:
				'<div class="mfp-iframe-scaler">' +
				'<div class="mfp-close"></div>' +
				'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
				"</div>",

			patterns: {
				youtube: {
					index: "youtube.com/",

					id: "v=",

					src: "https://www.youtube.com/embed/%id%?autoplay=1",
				},
				vimeo: {
					index: "vimeo.com/",
					id: "/",
					src: "//player.vimeo.com/video/%id%?autoplay=1",
				},
				gmaps: {
					index: "//maps.google.",
					src: "%id%&output=embed",
				},
			},

			srcAction: "iframe_src",
		},
	});
	// magnificPopup area end here

	// Quantity-js-area-start-here
	jQuery(document).ready(($) => {
		$(".quantity").on("click", ".plus", function (e) {
			let $input = $(this).prev("input.qty");
			let val = parseInt($input.val());
			$input.val(val + 1).change();
		});

		$(".quantity").on("click", ".minus", function (e) {
			let $input = $(this).next("input.qty");
			var val = parseInt($input.val());
			if (val > 0) {
				$input.val(val - 1).change();
			}
		});
	});
	// Quantity-js-area-end-here

	// Quantity-js-area-end-here
	/* Set rates + misc */
	var taxRate = 0.05;
	var shippingRate = 15.0;
	var fadeTime = 300;

	/* Assign actions */
	$(".product-quantity input").change(function () {
		updateQuantity(this);
	});

	$(".product-removal button").click(function () {
		removeItem(this);
	});

	/* Recalculate cart */
	function recalculateCart() {
		var subtotal = 0;

		/* Sum up row totals */
		$(".product").each(function () {
			subtotal += parseFloat($(this).children(".product-line-price").text());
		});

		/* Calculate totals */
		var tax = subtotal * taxRate;
		var shipping = subtotal > 0 ? shippingRate : 0;
		var total = subtotal + tax + shipping;

		/* Update totals display */
		$(".totals-value").fadeOut(fadeTime, function () {
			$("#cart-subtotal").html(subtotal.toFixed(2));
			$("#cart-tax").html(tax.toFixed(2));
			$("#cart-shipping").html(shipping.toFixed(2));
			$("#cart-total").html(total.toFixed(2));
			if (total == 0) {
				$(".checkout").fadeOut(fadeTime);
			} else {
				$(".checkout").fadeIn(fadeTime);
			}
			$(".totals-value").fadeIn(fadeTime);
		});
	}

	/* Update quantity */
	function updateQuantity(quantityInput) {
		/* Calculate line price */
		var productRow = $(quantityInput).parent().parent();
		var price = parseFloat(productRow.children(".product-price").text());
		var quantity = $(quantityInput).val();
		var linePrice = price * quantity;

		/* Update line price display and recalc cart totals */
		productRow.children(".product-line-price").each(function () {
			$(this).fadeOut(fadeTime, function () {
				$(this).text(linePrice.toFixed(2));
				recalculateCart();
				$(this).fadeIn(fadeTime);
			});
		});
	}

	/* Remove item from cart */
	function removeItem(removeButton) {
		/* Remove row from DOM and recalc cart total */
		var productRow = $(removeButton).parent().parent();
		productRow.slideUp(fadeTime, function () {
			productRow.remove();
			recalculateCart();
		});
	}
	// Quantity-js-area-end-here

	// share area
	$(document).ready(function () {
		$(".share-btn-link").click(function () {
			$(".share-now").toggle();
		});
	});
	$(document).ready(function () {
		$(".share-btn-link2").click(function () {
			$(".share-now2").toggle();
		});
	});
	$(document).ready(function () {
		$(".share-btn-link3").click(function () {
			$(".share-now3").toggle();
		});
	});
	$(document).ready(function () {
		$(".share-btn-link4").click(function () {
			$(".share-now4").toggle();
		});
	});
	$(document).ready(function () {
		$(".share-btn-link5").click(function () {
			$(".share-now5").toggle();
		});
	});
	$(document).ready(function () {
		$(".share-btn-link6").click(function () {
			$(".share-now6").toggle();
		});
	});
	$(document).ready(function () {
		$(".share-btn-link7").click(function () {
			$(".share-now7").toggle();
		});
	});
	$(document).ready(function () {
		$(".share-btn-link8").click(function () {
			$(".share-now8").toggle();
		});
	});
	$(document).ready(function () {
		$(".share-btn-link9").click(function () {
			$(".share-now9").toggle();
		});
	});
	$(document).ready(function () {
		$(".share-btn-link10").click(function () {
			$(".share-now10").toggle();
		});
	});
	$(document).ready(function () {
		$(".share-btn-link11").click(function () {
			$(".share-now11").toggle();
		});
	});
	$(document).ready(function () {
		$(".share-btn-link12").click(function () {
			$(".share-now12").toggle();
		});
	});
	$(document).ready(function () {
		$(".share-btn-link13").click(function () {
			$(".share-now13").toggle();
		});
	});
	$(document).ready(function () {
		$(".share-btn-link14").click(function () {
			$(".share-now14").toggle();
		});
	});
	$(document).ready(function () {
		$(".share-btn-link15").click(function () {
			$(".share-now15").toggle();
		});
	});
	
	
	
	//contact form js
	$(function () {
		// Get the form.
		var form = $("#contact-form");
		// Get the messages div.
		var formMessages = $(".form-message");
		// Set up an event listener for the contact form.
		$(form).submit(function (e) {
			// Stop the browser from submitting the form.
			e.preventDefault();
			// Serialize the form data.
			var formData = $(form).serialize();
			// Submit the form using AJAX.
			$.ajax({
				type: "POST",
				url: $(form).attr("action"),
				data: formData,
			})
				.done(function (response) {
					// Make sure that the formMessages div has the 'success' class.
					$(formMessages).removeClass("error");
					$(formMessages).addClass("success");
					// Set the message text.
					$(formMessages).text(response);
					// Clear the form.
					$("#form input, #form textarea").val("");
				})
				.fail(function (data) {
					// Make sure that the formMessages div has the 'error' class.
					$(formMessages).removeClass("success");
					$(formMessages).addClass("error");
					// Set the message text.
					if (data.responseText !== "") {
						$(formMessages).text(data.responseText);
					} else {
						$(formMessages).text(
							"Oops! An error occured and your message could not be sent."
						);
					}
				});
		});
	});
	
	
})(jQuery);
