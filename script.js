$(document).ready(function() {
    // Sticky Header
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });

    // Mobile Menu Toggle
    $('.menu-toggle').on('click', function() {
        $('nav').toggleClass('active');
        $(this).find('i').toggleClass('fa-bars fa-times');
    });

    // Close mobile menu when clicking on a nav item
    $('nav ul li a').on('click', function() {
        $('nav').removeClass('active');
        $('.menu-toggle i').removeClass('fa-times').addClass('fa-bars');
    });

    // Smooth scrolling for navigation
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 70
        }, 800);
    });

    // Active navigation link based on scroll position
    $(window).on('scroll', function() {
        var scrollPosition = $(this).scrollTop();
        
        $('section').each(function() {
            var sectionTop = $(this).offset().top - 100;
            var sectionBottom = sectionTop + $(this).outerHeight();
            var sectionId = $(this).attr('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                $('nav ul li a').removeClass('active');
                $('nav ul li a[href="#' + sectionId + '"]').addClass('active');
            }
        });
    });

    // Portfolio filtering
    $('.filter-btn').on('click', function() {
        var filterValue = $(this).attr('data-filter');
        
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        if (filterValue === 'all') {
            $('.portfolio-item').show(300);
        } else {
            $('.portfolio-item').hide(300);
            $('.portfolio-item[data-category="' + filterValue + '"]').show(300);
        }
    });

    // Form submission
    $('form').on('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        var name = $(this).find('input[type="text"]').val();
        var email = $(this).find('input[type="email"]').val();
        var subject = $(this).find('input[type="text"]:eq(1)').val();
        var message = $(this).find('textarea').val();
        
        // Simple validation
        if (name && email && subject && message) {
            // Here you would typically send the form data to a server
            // For demo purposes, we'll just show an alert
            alert('Thank you for your message! I will get back to you soon.');
            $(this)[0].reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Initialize AOS animation library if available
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true
        });
    }
});