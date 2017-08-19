$(document).ready(function(){

    $('body').on('click', '#open-close', function(){
        $(this).parent().toggleClass('open');
    });

    $('body').on('change', '#fixed-header', function(){
        if ($(this).is(':checked')) {
            $('body').addClass('navbar-fixed')
        } else {
            $('body').removeClass('navbar-fixed')
        }
    });

    $('body').on('change', '#sidebar-navigation', function(){
        if ($(this).is(':checked')) {
            $('body').addClass('sidebar-nav').removeClass('top-nav');
            $('#hidden-sidebar').attr('checked', false);
            $('#top-navigation').attr('checked', false);
        } else {
            $('body').removeClass('sidebar-nav')
        }
    });

    $('body').on('change', '#fixed-navigation', function(){
        if ($(this).is(':checked')) {
            $('body').addClass('fixed-nav')
        } else {
            $('body').removeClass('fixed-nav')
        }
    });

    $('body').on('change', '#compact-sidebar', function(){
        if ($(this).is(':checked')) {
            $('body').addClass('compact-nav');
        } else {
            $('body').removeClass('compact-nav')
        }
    });

    $('body').on('change', '#hidden-sidebar', function(){
        if ($(this).is(':checked')) {
            $('body').removeClass('compact-nav').removeClass('sidebar-nav').removeClass('top-nav')
            $('#sidebar-navigation').attr('checked', false);
            $('#top-navigation').attr('checked', false);
        } else {

        }
    });

    $('body').on('change', '#top-navigation', function(){
        if ($(this).is(':checked')) {
            $('body').addClass('top-nav').removeClass('sidebar-nav');
            $('#hidden-sidebar').attr('checked', false);
            $('#sidebar-navigation').attr('checked', false);
            $('#compact-sidebar').attr('checked', false);
        } else {
            $('body').removeClass('top-nav')
        }
    });

    //colours

    $('body').on('change', '#header-style', function(){
        if (!$(this).is(':checked')) {
            $('header').addClass('navbar-light').removeClass('navbar-dark');
        } else {
            $('header').addClass('navbar-dark').removeClass('navbar-light');
        }
    });

    $('body').on('change', '#brand-style', function(){
        if (!$(this).is(':checked')) {
            $('header').addClass('brand-light').removeClass('brand-dark');
        } else {
            $('header').addClass('brand-dark').removeClass('brand-light');
        }
    });

    $('body').on('change', '#navigation-style', function(){
        if (!$(this).is(':checked')) {
            $('#navigation').addClass('nav-light').removeClass('nav-dark');
        } else {
            $('#navigation').addClass('nav-dark').removeClass('nav-light');
        }
    });

})
