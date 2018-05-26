(function($) {
    "use strict";

    /*-------------------------------------------------*/
    /* =  INIT WATERMARK
     /*-------------------------------------------------*/

    function initWatermark() {
        $.watermark.options = {
            className: 'input--placeholder',
            useNative: false
        };

        //INPUT PLACEHOLDER
        $("[placeholder]").each(function() {
            $(this).watermark($(this).attr("placeholder"));
        });
        $("[type=password]").blur();
    }

    /*-------------------------------------------------*/
    /* =  Preloader
     /*-------------------------------------------------*/

    $(window).load(function() {

        $(".preloader").fadeOut("slow");

        if ($(window).width() >= 1024) {
            var window_width = $(window).width();
            var window_height = $(window).height();
            var headerNav = $(".header-main nav").outerHeight();
            var table_section_header = $(".main-content-header").outerHeight();
            var table_table_header = $(".main-table-header").outerHeight();
            var right_asidebar_chartbox = $(".right-asidebar-chartbox").outerHeight();
            var table_theader_header = $(".table-main thead").height();
            var optional_header = $(".optional-header").outerHeight();
            var optional_body_header = $(".optional-body thead").height();
            var optional_footer = $(".optional-footer").outerHeight();
            var right_asidebar_chartbox1 = $(".right-asidebar-chartbox1").outerHeight();
            var right_asidebar_chartbox2 = $(".right-asidebar-chartbox2").outerHeight();
            var right_asidebar_chartbox3 = $(".right-asidebar-chartbox3").outerHeight();


            var mainTop = table_section_header + table_table_header + table_theader_header + headerNav;
            var table_main = window_height - mainTop;
            var chart_main = window_height - table_section_header - headerNav;

            var optional_table = optional_header + optional_body_header + optional_footer;
            var optional_box = window_height - (table_section_header + headerNav + optional_table) ;

            $('.popup-optional .optional-body >table >tbody').css('height',optional_box );

            $('.main-chart').css('height',chart_main );
            $('.table-main tbody').css('height',table_main );
            $('.chart-table1 tbody').css('height',right_asidebar_chartbox - 100 );
            $('.chart-table2 tbody').css('height',right_asidebar_chartbox - 100 );
            $('.chart-table3 .chart-table tbody').css('height',right_asidebar_chartbox3 - 100 );
            $('.chart-table4 .chart-table tbody').css('height',right_asidebar_chartbox3 - 384 );



        }
        else {

            var window_width = $(window).width();
            var window_height = $(window).height();
            var headerNav = $(".header-main nav").outerHeight();
            var table_section_header = $(".main-content-header").outerHeight();
            var table_table_header = $(".main-table-header").outerHeight();
            var table_theader_header = $(".table-main thead").height();
            var aside = $("aside").height();
            var mainTop = table_section_header + table_table_header+ aside + table_theader_header + headerNav;
            var table_main = window_height - mainTop;
            $('.table-main tbody').css('height',table_main );

        }
    });


    /*-------------------------------------------------*/
    /* =  Document ready
     /*-------------------------------------------------*/

    $(document).ready( function () {

        /*-------------------------------------------------*/
        /* =  PLUGINS
         /*-------------------------------------------------*/

        initWatermark();
        $('.phone-us').mask('(000) 000-0000');
        $('#tabs').tab();
        $('#tabs1').tab();
        $('#tabs2').tab();
        $('#tabs-wizard').tab();
        $("select").selectOrDie();
        $('textarea').autosize();
        // $(".scroll-navigation,.scroll").mCustomScrollbar({
        //     scrollInertia: 100
        //
        // });

        $('.level-1').on('click', function() {

            $(this).toggleClass('active');
            var data_trigger = $(this);
            var elements = $('tr[data-row="' + data_trigger.prop('id') + '"]');
            elements.toggleClass('active');

        });


        function chartTable(x, y, num) {
            var elementHeight = $(x).outerHeight();
            $(y).css('height',elementHeight - num );
        }

        /*-------------------------------------------------*/
        /* =  Right chart
         /*-------------------------------------------------*/

        Number.prototype.between = function(a, b) {
            return this >= a && this <= b
        }

        /*-------------------------------------------------*/
        /* =  Main variables
         /*-------------------------------------------------*/

        if ($(window).width() >= 1024) {
            var window_width = $(window).width();
            var window_height = $(window).height();
            var headerNav = $(".header-main nav").outerHeight();
            var table_section_header = $(".main-content-header").outerHeight();
            var table_table_header = $(".main-table-header").outerHeight();
            var table_theader_header = $(".table-main thead").height();
            var mainTop = table_section_header + table_table_header + table_theader_header + headerNav;
            var table_main = window_height - mainTop;
            var chart_main = window_height - table_section_header - headerNav;

            $('.table-main tbody').css('height',table_main );
            $('.main-chart').css('height',chart_main );
            var right_asidebar_chartbox1 = $(".right-asidebar-chartbox1").outerHeight();
            var right_asidebar_chartbox2 = $(".right-asidebar-chartbox2").outerHeight();
            var right_asidebar_chartbox3 = $(".right-asidebar-chartbox3").outerHeight();

            var optional_header = $(".optional-header").outerHeight();
            var optional_body_header = $(".optional-body thead").height();
            var optional_footer = $(".optional-footer").outerHeight();
            var optional_table = optional_header + optional_body_header + optional_footer;

            var optional_box = window_height - (table_section_header + headerNav + optional_table) ;

            $('.popup-optional .optional-body >table >tbody').css('height',optional_box );
            $('.chart-table3 .chart-table tbody').css('height',right_asidebar_chartbox3 - 100 );
            $('.chart-table4 .chart-table tbody').css('height',right_asidebar_chartbox3 - 384 );

        }
        else {

            var window_width = $(window).width();
            var window_height = $(window).height();
            var headerNav = $(".header-main nav").outerHeight();
            var table_section_header = $(".main-content-header").outerHeight();
            var table_table_header = $(".main-table-header").outerHeight();
            var table_theader_header = $(".table-main thead").height();
            var aside = $("aside").height();
            var mainTop = table_section_header + table_table_header+ aside + table_theader_header + headerNav;
            var table_main = window_height - mainTop;
            $('.table-main tbody').css('height',table_main );

        }


        if (window_width.between(1024,1280)) {
            var $rightElements = $("main, .right-asidebar-trigger,.right-asidebar");
            var $leftElements = $("main, aside, .shrink-nav");

            $rightElements.addClass('active-right');
            $('.right-asidebar-trigger div span').text("SHOW");

            $('.right-asidebar-trigger ,.shrink-nav').on('click',function(){

                if($rightElements.hasClass("active-right")) {
                    $($rightElements).removeClass("active-right");
                    $($leftElements).addClass("active-left");
                    $('.right-asidebar-trigger div span').text("HIDE");
                }else {
                    $($rightElements).addClass("active-right");
                    $($leftElements).removeClass("active-left");
                    $('.right-asidebar-trigger div span').text("SHOW");
                }

            });

        }else {
            $('.shrink-nav').on('click', function(){
                $("aside,main,.settings-article").toggleClass('active-left');
                $(this).toggleClass('active-left');
            });
            $('.right-asidebar-trigger').on('click', function(){
                $(".right-asidebar,main,.settings-article").toggleClass('active-right');
                $(this).toggleClass('active-right');
                if($(this).hasClass("active-right")){
                    $('.right-asidebar-trigger div span').text("SHOW");

                }else {
                    $('.right-asidebar-trigger div span').text("HIDE");

                }

            });
        }
        // if ((window_width < 1024)) {
        //     $(".right-asidebar").addClass("active-right");
        // }else {
        //     $(".right-asidebar").removeClass("active-right");
        // }

        window.isWizard = window.isWizard || false;

        /*-------------------------------------------------*/
        /* =  Notifications
         /*-------------------------------------------------*/

        // toastr.options = {
        //   "closeButton": true,
        //   "debug": false,
        //   "newestOnTop": false,
        //   "progressBar": false,
        //   "positionClass": "toast-top-right",
        //   "preventDuplicates": false,
        //   "showDuration": "300",
        //   "hideDuration": "1000",
        //   "timeOut": "5000",
        //   "extendedTimeOut": "1000",
        //   "showEasing": "swing",
        //   "hideEasing": "linear",
        //   "showMethod": "fadeIn",
        //   "hideMethod": "fadeOut"
        // }
        //
        // $('#warning').on('click',function(){
        //     toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!')
        // });
        //
        // $('#error').on('click',function(){
        //     toastr.error('I do not think that word means what you think it means.', 'Inconceivable!')
        // });
        //
        // $('#info').on('click',function(){
        //     toastr.info('Are you the 6 fingered man?')
        // });
        //
        // $('#success').on('click',function(){
        //     toastr.success('Have fun storming the castle!', 'Miracle Max Says')
        // });
        //



        /*-------------------------------------------------*/
        /* =  STICKY FOOTER TRICK
         /*-------------------------------------------------*/

        var bumpIt = function() {
                $('body').css('margin-bottom', $('.footer-main').outerHeight());
            },
            didResize = false;

        bumpIt();

        $(window).resize(function() {
            didResize = true;
        });
        setInterval(function() {
            if(didResize) {
                didResize = false;
                bumpIt();
            }
        }, 250);

        $('.customize-columns a').on('click', function(){
            $(this).siblings('.drop-down').toggleClass('active');
            $(this).parent().toggleClass('active');
        });

        $('.customize-columns .drop-down-header a').on('click', function(){
            $(".drop-down").removeClass('active');
            $(".customize-columns").removeClass('active');
        });
        $('.filter-options').on('click', function(){
            $(this).siblings('.drop-down').toggleClass('active');
        });

        $('.filter-options-box .drop-down-header a').on('click', function(){
            $(".drop-down").removeClass('active');
        });

        // $('.alerts-drop-down').on('click', function(){
        //     $(this).toggleClass('active');
        //     $("aside").removeClass('active');
        //     $('.button-drop-down').removeClass('active');
        //     $('.settings-drop-down').removeClass('active');
        // });
        //
        // $('.settings-drop-down').on('click', function(){
        //     $(this).toggleClass('active');
        //     $("aside").toggleClass('active');
        //     $('.alerts-drop-down').removeClass('active');
        //     $('.button-drop-down').removeClass('active');
        //
        // });

        // $('.button-drop-down').on('click', function(){
        //     $(this).toggleClass('active');
        //     $("aside").removeClass('active');
        //     $('.alerts-drop-down').removeClass('active');
        //     $('.settings-drop-down').removeClass('active');
        // });

        $('.popup-drop-down').on('click', function(){
            $(this).toggleClass('active');
        });

        $('.event-trigger-one').on('click', function(){
            $("aside article").toggleClass('active');
            $(this).toggleClass('active');
        });

        $('.delivery-methods-box input').on('change', function(){
            $("#delivery-methods .use-seatmetrics-recommendation input").prop( "checked", false );
        });

        $('.splits-box input').on('change', function(){
            $("#splits .use-seatmetrics-recommendation input").prop( "checked", false );
        });

        $('#row-range-page-form .radio-box input').on('change', function(){
            $("#row-range .use-seatmetrics-recommendation input").prop( "checked", false );
        });

        $('.increment-criteria-box input').on('change', function(){
            $("#increment-criteria .use-seatmetrics-recommendation input").prop( "checked", false );
        });

        $('.price-limits-box input').on('change', function(){
            $("#price-limits .use-seatmetrics-recommendation input").prop( "checked", false );
        });

        function placeHolder(that) {
            if($(that).val() == '') {
                $(that).parent().removeClass('active');
            }else {
                $(that).parent().addClass('active');
            }
        }

        var inputPlaceholder = $('.login-box label input, #login-form label input,#sign-up-form label input, #stubhub-page-form .form-group input');

        inputPlaceholder.on('change input keyup', function(){
            placeHolder(this);
        });



        $('.table-popup-tooltip').on('click', function(){
            $('.tooltip-seasons-box').removeClass('active');
            $(this).siblings('.tooltip-seasons-box').addClass('active');
            $(this).toggleClass('active');
        });

        $('.close-little-tooltip').on('click', function(){
            $('.tooltip-seasons-box').removeClass('active');
        });

        $('.modal-popup .popup-footer a.cancel').on('click', function(){
            $('#point-of-sale .id-aside-body input').prop("checked" , false);
        });


        $('#main-table-checkbox1').on('click', function(){

            if($(this).is(':checked')){
                $(".table-main .check-box-table").prop( "checked" ,"checked" );
            }else{
                $(".table-main .check-box-table").removeAttr('checked');
            }
        });
        $('#main-table-checkbox1').on('click', function(){

            if($(this).is(':checked')){
                $(".mobile-list-box .check-box-table").prop( "checked" ,"checked" );
            }else{
                $(".mobile-list-box .check-box-table").removeAttr('checked');
            }
        });

        $('#zone-checkbox1').on('click', function(){

            if($(this).is(':checked')){
                $(".zone-table .check-box-table").prop( "checked" ,"checked" );
            }else{
                $(".zone-table .check-box-table").removeAttr('checked');
            }
        });

        $('#section-checkbox1').on('click', function(){

            if($(this).is(':checked')){
                $(".sections-table .check-box-table").prop( "checked" ,"checked" );
            }else{
                $(".sections-table .check-box-table").removeAttr('checked');
            }
        });

        $('.all-split-box').on('click', function(){

            if($(this).is(':checked')){
                $(this).parent().siblings(".radio-box").children("input").prop( "checked" ,"checked" );
            }else{
                $(this).parent().siblings(".radio-box").children("input").removeAttr('checked');
            }
        });

        $('.all-split-settings').on('click', function(){

            if($(this).is(':checked')){
                $(this).parent().parent().siblings("li").find("input").prop( "checked" ,"checked" );
            }else{
                $(this).parent().parent().siblings("li").find("input").removeAttr('checked');
            }
        });

        $('.customize-col-all').on('click', function(){

            if($(this).is(':checked')){
                $(this).parent().siblings(".check-box").find("input").prop( "checked" ,"checked" );
                $(".all-customize-box").show();
            }else{
                $(this).parent().siblings(".check-box").find("input").removeAttr('checked');
                $(".all-customize-box").hide();

            }
        });

        $('.customize-col').on('click', function(){

            var thisCheckCol = $(this).data('columns');


            if($(this).is(':checked')){

                $("." + thisCheckCol).show()


            }else{
                $("." + thisCheckCol).hide()

            }
        });

        $('.check-box-header-table').on('click', function(){
            $('.check-box-header-table:checked').length ? $('.table-list-icons').addClass('active') : $('.table-list-icons').removeClass('active');

        });

        $('aside article').on('click', function(){
            $("aside article").removeClass('selected');
            $(this).toggleClass('selected');
        });


        $('.table-main tr td').on('click', function(){
            $('.table-main tr').removeClass('checked');
            $(this).parent().toggleClass('checked');

        });

        $('.asidebar-table tr td').on('click', function(){
            $('.asidebar-table tr').removeClass('checked');
            $(this).parent().toggleClass('checked');

        });

        $('.sales-data-table tr td').on('click', function(){
            $('.sales-data-table tr').removeClass('checked');
            $(this).parent().toggleClass('checked');

        });

        $('.ticket-listing-table tr td').on('click', function(){
            $('.ticket-listing-table tr').removeClass('checked');
            $(this).parent().toggleClass('checked');

        });

        $('.chart-table tr td').on('click', function(){
            $('.chart-table tr').removeClass('checked');
            $(this).parent().toggleClass('checked');

        });

        $('.mobile-list-box article').on('click', function(){
            $('.mobile-list-box article').removeClass('checked');
            $(this).toggleClass('checked');

        });

        $('.active-ex-check').on('click', function(){
            $(this).toggleClass('active');
        });

        $('a[data-role="tab"]').on('click', function(e) {
            e.preventDefault();

            var tab = $(this).attr('href');

            $('a[href="' + tab + '"]').tab('show');


        });

        $('.show-panel').on('click', function(e){
            e.preventDefault();
            $(this).addClass('active');
            $(".settings-article").addClass('active');
        });

        $('.hide-panel,.hide-panel-finis').on('click', function(){
            $(".show-panel").removeClass('active');
            $(".settings-article").removeClass('active');
        });


        $(document).on("click",function(e) {

            if ( $(e.target).closest('.search-box').length === 0 ) {
                $(".search-trigger").parent().removeClass('active');
            } else {

                $(".search-trigger").parent().addClass('active');
            }
        });

        $(document).on("click",function(e) {

            if ( $(e.target).closest('.weather-link').length === 0 ) {
                $(".tooltip-weather").removeClass('active');
            } else {

                $(".tooltip-weather").addClass('active');
            }
        });

        $(document).on('click', '[data-role="size"]', function(e) {

            if($(".right-stubhub-event").hasClass('hover-active'))  {
                $(".right-stubhub-event").removeClass('hover-active');
            } else {
                $(".right-stubhub-event").addClass('hover-active');
            }

        });

        $(document).on('click', '[data-role="size1"]', function(e) {

            if($(".right-ticket-listing").hasClass('hover-active'))  {
                $(".right-ticket-listing").removeClass('hover-active');
            } else {
                $(".right-ticket-listing").addClass('hover-active');
            }

        });

        $(document).on('click', '[data-role="size2"]', function(e) {

            if($(".right-sales-data").hasClass('hover-active'))  {
                $(".right-sales-data").removeClass('hover-active');
            } else {
                $(".right-sales-data").addClass('hover-active');
            }

        });

        $(document).on("click",function(e) {

            if ( $(e.target).closest('.select-box-quantity').length === 0 ) {
                $(".select-box-quantity").removeClass('active');
            } else {

                $(".select-box-quantity").addClass('active');
            }
        });


        var $filterItem = $('.filter-by .check-box input');

        $filterItem.on('change', function() {
            if($('.filter-by .check-box input:checked').length) {
                $('.filter-one').addClass('filter-effect');
            }else {
                $('.filter-one').removeClass('filter-effect');
            }
        })

        $('.filter-by .clear-link').on('click',function(){
            $('.filter-one').removeClass('filter-effect');
            $(".filter-by input").removeAttr('checked');
        });

        $('.drop-down-footer .clear-link').on('click',function(){
            $(".filter-options-box input").removeAttr('checked');
        });

        $('.sort-by .clear-link').on('click',function(){
            $(".sort-by a").removeClass('active active2');
        });

        $('.close-popup, .cancel').on('click',function(){
            $(".modal-popup").removeClass('active');

            if (typeof userPosType === 'string') {
                switch(userPosType) {

                    case 'stubhub':
                        $('#pos-radio1').prop('checked', true);
                        break;

                    case 'ticketnetwork':
                        $('#pos-radio2').prop('checked', true);
                        break;

                    case 'skybox':
                        $('#pos-radio6').prop('checked', true);
                        break;
                }
            }
        });

        // $('.datepicker .clear-link').on('click',function(){
        //     $(".dates input").val("Pick a Date (From - To)");
        //     $('.ui-datepicker-calendar td').removeClass("date-range-selected");
        // });

        $('.popups-forms,.popup .logo').on('click', function(e) {

            var element = $(this).data("form");
            $('.popup-form-article').removeClass('active');

            $( "#" + element ).addClass("active");

        });

        $('.modal-trigger').on('click', function(e) {

            var element = $(this).data("popup");
            $('.modal-popup').removeClass('active');

            $( "#" + element ).addClass("active");

        });

        $('.sort-by .clear-link').on('click',function(){
            $(".sort-by a").removeClass('active active2');
        });

        $('.bars').on('click',function(){
            $("nav ul").toggleClass('active');
            $("html").toggleClass('active');
        });

        // $('.forgot-password, .back-login').on('click',function(){
        //     $(".login").toggleClass('active');
        //     $(".login").removeClass('show-first');
        // });


        $(window).on('resize', function() {

            if ($(window).width() >= 1024) {
                var window_width = $(window).width();
                var window_height = $(window).height();
                var headerNav = $(".header-main nav").outerHeight();
                var table_section_header = $(".main-content-header").outerHeight();
                var table_table_header = $(".main-table-header").outerHeight();
                var table_theader_header = $(".table-main thead").height();
                var mainTop = table_section_header + table_table_header + table_theader_header + headerNav;
                var table_main = window_height - mainTop;
                $('.table-main tbody').css('height',table_main );
                var optional_header = $(".optional-header").outerHeight();
                var optional_body_header = $(".optional-body thead").height();
                var optional_footer = $(".optional-footer").outerHeight();
                var optional_table = optional_header + optional_body_header + optional_footer;

                var optional_box = window_height - (table_section_header + headerNav + optional_table) ;

                $('.popup-optional .optional-body >table >tbody').css('height',optional_box );

            }
            else {

                var window_width = $(window).width();
                var window_height = $(window).height();
                var headerNav = $(".header-main nav").outerHeight();
                var table_section_header = $(".main-content-header").outerHeight();
                var table_table_header = $(".main-table-header").outerHeight();
                var table_theader_header = $(".table-main thead").height();
                var mainTop = table_section_header + table_table_header + table_theader_header + headerNav;
                var table_main = window_height - mainTop;
                $('.table-main tbody').css('height',table_main );

            }

            // if ((window_width < 1024)) {
            //     $(".right-asidebar").addClass("active-right");
            // }else {
            //     $(".right-asidebar").removeClass("active-right");
            // }


            if (window_width.between(1024,1280)) {
                var $rightElements = $("main, .right-asidebar-trigger,.right-asidebar");
                var $leftElements = $("main, aside, .shrink-nav");

                $rightElements.addClass('active-right');
                $('.right-asidebar-trigger div span').text("SHOW");


                $('.right-asidebar-trigger ,.shrink-nav').on('click',function(){

                    if($rightElements.hasClass("active-right")) {
                        $($rightElements).removeClass("active-right");
                        $($leftElements).addClass("active-left");
                        $('.right-asidebar-trigger div span').text("HIDE");
                    }else {
                        $($rightElements).addClass("active-right");
                        $($leftElements).removeClass("active-left");
                        $('.right-asidebar-trigger div span').text("SHOW");
                    }

                });

            }else {
                $('.shrink-nav').on('click', function(){
                    $("aside,main,.settings-article").toggleClass('active-left');
                    $(this).toggleClass('active-left');
                });
                $('.right-asidebar-trigger').on('click', function(){
                    $(".right-asidebar,main,.settings-article").toggleClass('active-right');
                    $(this).toggleClass('active-right');
                    if($(this).hasClass("active-right")){
                        $('.right-asidebar-trigger div span').text("SHOW");

                    }else {
                        $('.right-asidebar-trigger div span').text("HIDE");

                    }
                });
            }
            // if ((window_width < 1024)) {
            //     $(".right-asidebar").addClass("active-right");
            // }else {
            //     $(".right-asidebar").removeClass("active-right");
            // }
        });


        // $('.link-drop-down').on("click", function(){
        //     $('.link-drop-down .drop-down ul').slideUp('fast');
        //     $(this).children(".drop-down").find("ul").slideToggle('fast');
        // });

        // $('body').on('inview', '.inview', function(event, isInView, visiblePartX, visiblePartY) {
        //     if (isInView) {
        //         $(this).addClass('show');
        //     }
        // });

        $(".slider-input").slider();



        var thCounter1 = 0;

        $.each($('.table-main th'), function(key, value) {

            $(value).attr('data-id', thCounter1);

            thCounter1++;

        });

        $.each($('.table-main tbody tr'), function(trkey, tr) {

            var trCounter1 = 0;

            $(tr).find('td').each(function() {
                $(this).attr('data-id', trCounter1);

                trCounter1++;
            });

        });
        $(".table-main th").on('click', function(){

            $(".table-main th").removeClass('selected');

            $(this).addClass('selected');

            var selector = $(this).data('id');

            $('.table-main td').removeClass('selected');

            $.each($('.table-main tbody td[data-id="' + selector + '"]'), function(key, value) {

                $(value).addClass('selected');

            });

        });

        var thCounter2 = 0;

        $.each($('.asidebar-table th'), function(key, value) {

            $(value).attr('data-id', thCounter2);

            thCounter2++;

        });

        $.each($('.asidebar-table tbody tr'), function(trkey, tr) {

            var trCounter1 = 0;

            $(tr).find('td').each(function() {
                $(this).attr('data-id', trCounter1);

                trCounter1++;
            });

        });
        $(".asidebar-table th").on('click', function(){

            $(".asidebar-table th").removeClass('selected');

            $(this).addClass('selected');

            var selector = $(this).data('id');

            $('.asidebar-table td').removeClass('selected');

            $.each($('.asidebar-table tbody td[data-id="' + selector + '"]'), function(key, value) {

                $(value).addClass('selected');

            });

        });

        var thCounter3 = 0;

        $.each($('.ticket-listing-table th'), function(key, value) {

            $(value).attr('data-id', thCounter3);

            thCounter3++;

        });

        $.each($('.ticket-listing-table tbody tr'), function(trkey, tr) {

            var trCounter1 = 0;

            $(tr).find('td').each(function() {
                $(this).attr('data-id', trCounter1);

                trCounter1++;
            });

        });
        $(".ticket-listing-table th").on('click', function(){

            $(".ticket-listing-table th").removeClass('selected');

            $(this).addClass('selected');

            var selector = $(this).data('id');

            $('.ticket-listing-table td').removeClass('selected');

            $.each($('.ticket-listing-table tbody td[data-id="' + selector + '"]'), function(key, value) {

                $(value).addClass('selected');

            });

        });

        var thCounter4 = 0;

        $.each($('.sales-data-table th'), function(key, value) {

            $(value).attr('data-id', thCounter4);

            thCounter4++;

        });

        $.each($('.sales-data-table tbody tr'), function(trkey, tr) {

            var trCounter1 = 0;

            $(tr).find('td').each(function() {
                $(this).attr('data-id', trCounter1);

                trCounter1++;
            });

        });
        $(".sales-data-table th").on('click', function(){

            $(".sales-data-table th").removeClass('selected');

            $(this).addClass('selected');

            var selector = $(this).data('id');

            $('.sales-data-table td').removeClass('selected');

            $.each($('.sales-data-table tbody td[data-id="' + selector + '"]'), function(key, value) {

                $(value).addClass('selected');

            });

        });


        var staticIcon = $(".statistic-icon");
        staticIcon.on("click",function() {
            $(".right-ticket-listing").addClass('active');
            $(".right-stubhub-event").removeClass('active');
            $(".right-sales-data").removeClass('active');
        });

        var staticIcon = $(".current-listings-stat-icon a");
        staticIcon.on("click",function() {
            $(".right-stubhub-event").removeClass('active');
            $(".right-ticket-listing").removeClass('active');
            $(".right-sales-data").addClass('active');
        });
        var staticIcon = $(".stats-link,.statistic-button");
        staticIcon.on("click",function() {
            $(".right-stubhub-event").addClass('active');
            $(".right-ticket-listing").removeClass('active');
            $(".right-sales-data").removeClass('active');
        });

        var staticIcon = $(".statistic-icon");
        staticIcon.on("click",function() {
            $(".right-ticket-listing").addClass('active');
            $(".right-stubhub-event").removeClass('active');
            $(".right-sales-data").removeClass('active');
        });

        $('.statistic-icon-chart-table').on('click',function(){
            $(".switch-box-table1").addClass('change-elements');
        });

        $('.go-back-icon').on('click',function(){
            $(".switch-box-table1").removeClass('change-elements');
        });




        /*-------------------------------------------------*/
        /* =  popup-table-slider
         /*-------------------------------------------------*/

        $('.popup-table-slider').owlCarousel({
            center: true,
            items:3,
            loop:true,
            navigation:true,
            responsive:{
                600:{
                    items:3
                }
            }
        });

        /*-------------------------------------------------*/
        /* =  switch tables
         /*-------------------------------------------------*/

        $('#switch-chartbox1').on('change', function(e){
            if(e.target.checked){

                $('.chart-table3, .view-link').removeClass('active');
                $('.chart-table4').addClass('active');
                $(".view-link-sales").addClass('active');

            }else {

                $('.chart-table4, .view-link').removeClass('active');
                $('.chart-table3').addClass('active');
                $(".view-link-ticket").addClass('active');

            }
        });

        $('.view-link-ticket').on('click', function(){
            $('.switch-box-table').removeClass('active');
            $(".view-link").removeClass('active');
            $(this).addClass('active');
            $('.chart-table3').addClass('active');
            $('#switch-chartbox1').prop('checked',false);
        });
        $('.view-link-sales').on('click', function(){
            $('.chart-table3, .view-link').removeClass('active');
            $(".view-link").removeClass('active');
            $(this).addClass('active');
            $('.chart-table4').addClass('active');
            $('#switch-chartbox1').prop('checked',true);
        });

        $('#switch-chartbox2').on('change', function(e){
            if(e.target.checked){

                $('.switch-box-table1').removeClass('active-show');
                $('.switch-box-table2').addClass('active-show');
                $('#main-chart2 .justifize').addClass('active');

            }else {

                $('.switch-box-table2').removeClass('active-show');
                $('.switch-box-table1').addClass('active-show');
                $('#main-chart2 .justifize').removeClass('active');

            }
        });

        $('#grouping-checkbox1').on('change', function(e){

            if(e.target.checked){

                $('body').addClass('optional-active');
                $('.popup-optional3').addClass('active');
                var window_height = $(window).height();
                var headerNav = $(".header-main nav").outerHeight();
                var table_section_header = $(".main-content-header").outerHeight();
                var optional_header2 = $(".popup-optional3 .optional-header1").outerHeight();
                var optional_body_header2 = $(".popup-optional3 .optional-body1 thead").height();
                var optional_footer2 = $(".popup-optional3 .optional-footer1").outerHeight();
                var optional_table2 = optional_header2 + optional_body_header2 + optional_footer2;
                var optional_box2 = window_height - (table_section_header + headerNav + optional_table2) ;

                $('.popup-optional .popup-optional3-table tbody').css('height',optional_box2 );

            }else {

                $('body').removeClass('optional-active');
                $('.popup-optional3').removeClass('active');
                var window_height = $(window).height();
                var headerNav = $(".header-main nav").outerHeight();
                var table_section_header = $(".main-content-header").outerHeight();
                var optional_header2 = $(".popup-optional3 .optional-header1").outerHeight();
                var optional_body_header2 = $(".popup-optional3 .optional-body1 thead").height();
                var optional_footer2 = $(".popup-optional3 .optional-footer1").outerHeight();
                var optional_table2 = optional_header2 + optional_body_header2 + optional_footer2;
                var optional_box2 = window_height - (table_section_header + headerNav + optional_table2) ;

                $('.popup-optional .popup-optional3-table tbody').css('height',optional_box2 );

            }

        });

        /*-------------------------------------------------*/
        /* =  charts-boxes toggle
         /*-------------------------------------------------*/

        $('#go-back, .go-back, .interactive-link').on('click', function(){
            $("main").removeClass('change-chart');
            $("body").removeClass('optional-active');
            $(".main-chart,.stadion-icon").removeClass("active");
            var window_width = $(window).width();
            var window_height = $(window).height();
            var headerNav = $(".header-main nav").outerHeight();
            var table_section_header = $(".main-content-header").outerHeight();
            var table_table_header = $(".main-table-header").outerHeight();
            var right_asidebar_chartbox = $(".right-asidebar-chartbox").outerHeight();
            var table_theader_header = $(".table-main thead").height();
            var optional_header = $(".optional-header").outerHeight();
            var optional_body_header = $(".optional-body thead").height();
            var optional_footer = $(".optional-footer").outerHeight();
            var right_asidebar_chartbox1 = $(".right-asidebar-chartbox1").outerHeight();
            var right_asidebar_chartbox2 = $(".right-asidebar-chartbox2").outerHeight();
            var right_asidebar_chartbox3 = $(".right-asidebar-chartbox3").outerHeight();


            var mainTop = table_section_header + table_table_header + table_theader_header + headerNav;
            var table_main = window_height - mainTop;
            var chart_main = window_height - table_section_header - headerNav;

            var optional_table = optional_header + optional_body_header + optional_footer;
            var optional_box = window_height - (table_section_header + headerNav + optional_table) ;

            $('.popup-optional .optional-body >table >tbody').css('height',optional_box );

            $('.main-chart').css('height',chart_main );
            $('.table-main tbody').css('height',table_main );
            $('.chart-table1 tbody').css('height',right_asidebar_chartbox - 100 );
            $('.chart-table2 tbody').css('height',right_asidebar_chartbox - 100 );
            $('.chart-table3 .chart-table tbody').css('height',right_asidebar_chartbox3 - 384 );
            $('.chart-table4 .chart-table tbody').css('height',right_asidebar_chartbox3 - 280 );

            $('.popup-optional').hide();
            $('body').removeClass('optional-active');

        });

        $('.stadion-icon').on('click', function(){
            var stadion_box = $(this).data('stadion');
            $(".main-chart,.stadion-icon").removeClass("active");
            $("#" + stadion_box).addClass("active");
            $(this).addClass("active");
            $("main").addClass("change-chart");

            var window_height = $(window).height();
            var headerNav = $(".header-main nav").outerHeight();
            var table_section_header = $(".main-content-header").outerHeight();
            var right_asidebar_chartbox1 = $(".right-asidebar-chartbox1").outerHeight();
            var right_asidebar_chartbox2 = $(".right-asidebar-chartbox2").outerHeight();
            var right_asidebar_chartbox3 = $(".right-asidebar-chartbox3").outerHeight();
            var chart_main = window_height - table_section_header - headerNav;
            $('.main-chart').css('height',chart_main );
            $('.chart-table1 tbody').css('height',right_asidebar_chartbox1 - 100 );
            $('.chart-table2 tbody').css('height',right_asidebar_chartbox2 - 100 );
            $('.chart-table3 .chart-table tbody').css('height',right_asidebar_chartbox3 - 190 );
            $('.chart-table4 .chart-table tbody').css('height',right_asidebar_chartbox3 - 280 );

        });


        /*-------------------------------------------------*/
        /* =  edit price ticket listing table
         /*-------------------------------------------------*/

        var editPriceTrigger = $('.edit-price-elements');

        var closeEditMode = $(".close-edit-mode");

        editPriceTrigger.on('click', function(){
            var actionList = $(this).parent().parent();
            var editableElement = $(this).parent().parent().parent().siblings("td").find('.editable');
            var editableCurrnet = $(this).parent().parent().parent().siblings("td").find('.editable-current');
            var editableFloor = $(this).parent().parent().parent().siblings("td").find('.editable-floor');
            var editableInput = $(this).parent().parent().parent().siblings("td").find('.edit-input');
            var editList = actionList.siblings('.edit-list');

            editableCurrnet.siblings(".edit-input").val(editableCurrnet.text())
            editableFloor.siblings(".edit-input").val(editableFloor.text())



            editableElement.addClass('active') && editableInput.addClass('active') && actionList.addClass('active') && editList.addClass('active');
        });

        closeEditMode.on('click', function(){
            var actionList = $(this).parent().parent().siblings('.actions-list');
            var editableElement = $(this).parent().parent().parent().siblings("td").find('.editable');
            var editableCurrnet = $(this).parent().parent().parent().siblings("td").find('.editable-current');
            var editableFloor = $(this).parent().parent().parent().siblings("td").find('.editable-floor');
            var editableInput = $(this).parent().parent().parent().siblings("td").find('.edit-input');
            var editList = actionList.siblings('.edit-list');

            editableElement.removeClass('active') && editableInput.removeClass('active') && actionList.removeClass('active') && editList.removeClass('active');

        });


        $('.save-btn-small').on('click',function(){
            var actionList = $(this).parent().parent().siblings('.actions-list');
            var editableElement = $(this).parent().parent().parent().siblings("td").find('.editable');
            var editableCurrnet = $(this).parent().parent().parent().siblings("td").find('.editable-current');
            var editableFloor = $(this).parent().parent().parent().siblings("td").find('.editable-floor');
            var editableInput = $(this).parent().parent().parent().siblings("td").find('.edit-input');
            var editList = actionList.siblings('.edit-list');
            editableCurrnet.text(editableCurrnet.siblings(".edit-input").val())
            editableFloor.text(editableFloor.siblings(".edit-input").val())

            editableElement.removeClass('active') && editableInput.removeClass('active') && actionList.removeClass('active') && editList.removeClass('active');
        });

        /*-------------------------------------------------*/
        /* =  Price limits Floor Price ISP popup
         /*-------------------------------------------------*/

        $('label[for="switch-checkbox5"]')
            .tooltip({'title': 'ISP: Initial Suggested Price'});

        /*-------------------------------------------------*/
        /* =  open modal on checkbox
         /*-------------------------------------------------*/

        $('#pos-radio1').on('change, click', function(e){
            if(e.target.checked){
                $('#stubhub-info').addClass('active');

            }else {
                $('#stubhub-info').removeClass('active');

            }
        });

        $('#pos-radio2').on('change, click', function(e){
            if(e.target.checked){
                $('#ticketnetwork').addClass('active');

            }else {
                $('#ticketnetwork').removeClass('active');

            }
        });

        $('#pos-radio6').on('change, click', function(e){
            if(e.target.checked){
                $('#skybox').addClass('active');

            }else {
                $('#skybox').removeClass('active');

            }
        });

        $('#pos-radio7').on('change, click', function(e){
            if(e.target.checked){
                $('#ticketutils').addClass('active');

            }else {
                $('#ticketutils').removeClass('active');

            }
        });


        $('.finish-button').on('click', function(e){


            function calculate(a,b,c,d,e){
                var window_height = $(window).height();
                var headerNav = a.outerHeight();
                var table_section_header = b.outerHeight();
                var optional_header = c.outerHeight();
                var optional_body_header = d.height();
                var optional_footer = e.outerHeight();
                var optional_table = optional_header + optional_body_header + optional_footer;
                var optional_box = window_height - (table_section_header + headerNav + optional_table) ;
                console.log(optional_box);
                return optional_box;
            };


            if ($("#optional-selections-radio1").is(':checked') && $("#optional-selections-radio2").is(':checked')) {

                $('.popup-optional2').show();
                $('body').addClass('optional-active');


                $('.popup-optional2 .optional-body >table >tbody').css('height',
                    calculate($(".header-main nav"),$(".main-content-header"),$(".popup-optional2 .optional-header"),$(".popup-optional2 .optional-body thead"),$(".popup-optional2 .optional-footer")));


            }
            if ($("#optional-selections-radio1").is(':checked')  == false && $("#optional-selections-radio2").is(':checked') == false) {
                $('#push-save').addClass('active');

            }
            if ($("#optional-selections-radio1").is(':checked') == false && $("#optional-selections-radio2").is(':checked')) {

                $('.popup-optional1').show();
                $('body').addClass('optional-active');
                var window_height = $(window).height();
                var headerNav = $(".header-main nav").outerHeight();
                var table_section_header = $(".main-content-header").outerHeight();
                var optional_header = $(".popup-optional1 .optional-header").outerHeight();
                var optional_body_header = $(".popup-optional1 .optional-body thead").height();
                var optional_footer = $(".popup-optional1 .optional-footer").outerHeight();
                var optional_table = optional_header + optional_body_header + optional_footer;
                var optional_box = window_height - (table_section_header + headerNav + optional_table) ;
                $('.popup-optional1 .optional-body >table >tbody').css('height',optional_box );




            }
            if ($("#optional-selections-radio1").is(':checked') && $("#optional-selections-radio2").is(':checked') == false) {
                $('#venue-profile').addClass('active');

            }


        });


        /*-------------------------------------------------*/
        /* =  Validation
         /*-------------------------------------------------*/

        var signUpValidator = $('#sign-up-form').on('submit', function (e) {
            e.preventDefault();
        }).validate({

            rules: {
                first_name: {
                    required: true,
                },

                last_name: {
                    required: true,
                },

                phone: {
                    required: true,
                    minlength: 10

                },
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true
                },
                company: {
                    required: true
                },
                agree: {
                    required: true
                }
            },
            // submitHandler: function (form) {
            //     $.ajax({
            //         url: '../assets/logic/php/ajax_registerUser.php',
            //         type: 'POST',
            //         dataType: 'json',
            //         data: $('#sign-up-form').serialize(),
            //         success: function(response) {
            //             if(response.success) {
            //                 toastr.success('Registration success','Success')
            //                 document.location = 'wizard.php';
            //             } else {
            //                 toastr.error(response.error,'Error!')
            //             }
            //
            //             console.log(response);
            //
            //         },
            //         error: function (err, msg) {
            //
            //         }
            //     })
            // }
        });

        var signUpInputs = [
            'first_name',
            'last_name',
            'phone',
            'email',
            'password',
            'company',
        ];

        var enableSignupButton = function() {
            if (signUpValidator.numberOfInvalids() !== 0) {
                $('#register-button').attr('disabled', true);
                return;
            }

            for (var i = 0; i < signUpInputs.length; i++) {
                if (!$('#sign-up-form input[name="' + signUpInputs[i] + '"]').val()) {
                    $('#register-button').attr('disabled', true);
                    return;
                }
            }

            if (!$('#sign-up-form input[name="agree"]').prop('checked')) {
                $('#register-button').attr('disabled', true);
                return;
            }

            $('#register-button').attr('disabled', false);
        };

        var signUpSimpleValidation = function() {
            signUpValidator.element(this);
            enableSignupButton();
        };

        for (var i = 0; i < signUpInputs.length; i++) {
            $('#sign-up-form input[name="' + signUpInputs[i] + '"]').on('change, blur', signUpSimpleValidation);
            $('#sign-up-form input[name="' + signUpInputs[i] + '"]').on('change, blur, input, click, keydown, keyup', enableSignupButton);
        }

        $('#sign-up-form input[name="agree"]').on('change, blur', signUpSimpleValidation);
        $('#sign-up-form input[name="agree"]').on('change, blur, input, click', enableSignupButton);

        $('#login-form').validate({

            rules: {
                email: {
                    required: true,
                    email: true,
                },
                password: {
                    required: true
                }
            }

        });

        $('#forgot-pw-form').validate({

            rules: {
                email_forgot: {
                    required: true,
                    email: true
                }
            }

        });

        var $sortItem = $('.sort-by .overflow-hidden a')

        $sortItem.on("click",function() {
            var clicks = $(this).data('clicks');
            $(this).siblings().removeClass('active2');
            $(this).siblings().removeClass('active');
            if (clicks) {
                $(this).removeClass('active');
                $(this).addClass('active2');
            } else {
                $(this).removeClass('active2');
                $(this).addClass('active');
            }
            $(this).data("clicks", !clicks);

            if($sortItem.hasClass("active") || $sortItem.hasClass("active2")) {
                $(".sort-one").addClass("sort-effect");
            }else {
                $(".sort-one").removeClass("sort-effect");

            }

        });

        $('.sort-by .clear-link').on('click', function(){
            if($sortItem.hasClass("active") || $sortItem.hasClass("active2")) {
                $(".sort-one").addClass("sort-effect");
            }else {
                $(".sort-one").removeClass("sort-effect");

            }
        });



        // $("#date").show().datepicker({
        //
        //     numberOfMonths:1,
        //     onSelect: function( selectedDate ) {
        //         if(!$(this).data().datepicker.first){
        //             $(this).data().datepicker.inline = true
        //             $(this).data().datepicker.first = selectedDate;
        //         }else{
        //             if(selectedDate > $(this).data().datepicker.first){
        //                 $(this).val($(this).data().datepicker.first+" - "+selectedDate);
        //             }else{
        //                 $(this).val(selectedDate+" - "+$(this).data().datepicker.first);
        //             }
        //             $(this).data().datepicker.inline = false;
        //         }
        //     },
        //     onClose:function(){
        //         delete $(this).data().datepicker.first;
        //         $(this).data().datepicker.inline = false;
        //     }
        // })
        //
        // $('#test').datepicker({
        //     onSelect: function(date, obj){
        //         $('#datepicker').val(date);
        //         if(!$(this).data().datepicker.first){
        //             $(this).data().datepicker.inline = true
        //             $(this).data().datepicker.first = selectedDate;
        //         }else{
        //             if(selectedDate > $(this).data().datepicker.first){
        //                 $(this).val($(this).data().datepicker.first+" - "+selectedDate);
        //             }else{
        //                 $(this).val(selectedDate+" - "+$(this).data().datepicker.first);
        //             }
        //             $(this).data().datepicker.inline = false;
        //         }
        //     }
        // });
        //
        // $.datepicker._defaults.onAfterUpdate = null;
        // var datepicker__updateDatepicker = $.datepicker._updateDatepicker;
        // $.datepicker._updateDatepicker = function( inst ) {
        //     datepicker__updateDatepicker.call( this, inst );
        //     var onAfterUpdate = this._get(inst, 'onAfterUpdate');
        //     if (onAfterUpdate)
        //         onAfterUpdate.apply((inst.input ? inst.input[0] : null),
        //             [(inst.input ? inst.input.val() : ''), inst]);
        // }
        // $(function() {
        //     var cur = -1, prv = -1;
        //     $('#datepicker div').datepicker({
        //         //numberOfMonths: 3,
        //         changeMonth: false,
        //         changeYear: false,
        //         showButtonPanel: true,
        //         beforeShowDay: function ( date ) {
        //             return [true, ( (date.getTime() >= Math.min(prv, cur) && date.getTime() <= Math.max(prv, cur)) ? 'date-range-selected' : '')];
        //
        //         },
        //         onSelect: function ( dateText, inst ) {
        //             var d1, d2;
        //             prv = cur;
        //             cur = (new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay)).getTime();
        //             if ( prv == -1 || prv == cur ) {
        //                 prv = cur;
        //                 $('#datepicker input').val( dateText );
        //             } else {
        //                 d1 = $.datepicker.formatDate( 'mm/dd/yy', new Date(Math.min(prv,cur)), {} );
        //                 d2 = $.datepicker.formatDate( 'mm/dd/yy', new Date(Math.max(prv,cur)), {} );
        //                 $('#datepicker input').val( d1+' - '+d2 );
        //             }
        //         },
        //         onChangeMonthYear: function ( year, month, inst ) {
        //             //prv = cur = -1;
        //         },
        //         onAfterUpdate: function ( inst ) {
        //             $('<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">Done</button>')
        //                 .appendTo($('#datepicker div .ui-datepicker-buttonpane'))
        //                 .on('click', function () { $('#datepicker div').hide(); });
        //         }
        //     });
        //     // .position({
        //     //       my: 'left top',
        //     //       at: 'left bottom',
        //     //       of: $('#datepicker input')
        //     //    })
        //     // .hide();
        //     $('#datepicker input').on('focus', function (e) {
        //         var v = this.value,
        //             d;
        //         try {
        //             if ( v.indexOf(' - ') > -1 ) {
        //                 d = v.split(' - ');
        //                 prv = $.datepicker.parseDate( 'mm/dd/yy', d[0] ).getTime();
        //                 cur = $.datepicker.parseDate( 'mm/dd/yy', d[1] ).getTime();
        //             } else if ( v.length > 0 ) {
        //                 prv = cur = $.datepicker.parseDate( 'mm/dd/yy', v ).getTime();
        //             }
        //         } catch ( e ) {
        //             cur = prv = -1;
        //         }
        //         if ( cur > -1 )
        //             $('#datepicker div').datepicker('setDate', new Date(cur));
        //         $('#datepicker div').datepicker('refresh').show();
        //
        //     });
        //
        // });


        $(".broadcast").on('click', function(){
            $(this).toggleClass('active');
        });
        $(".zone-box-drop a").on('click', function(){
            $('.zone-drop-down').toggleClass('active');
        });

        $(".zone-drop-down a").on('click', function() {
            $(".zone-drop-down").removeClass('active');

            $(".zone-box-drop a").removeClass('active');
            $(this).addClass('active');
            var text_zone = $(this).text();
            $('.zone-box-drop a .text').html(text_zone);
        });

        $(".top-panel-trigger").on("click",function(){
            var that = $(this);

            $(".info-desk").slideToggle("fast", function() {

                var right_asidebar_chartbox1 = $(".right-asidebar-chartbox1");
                var right_asidebar_chartbox2 = $(".right-asidebar-chartbox2");
                var right_asidebar_chartbox3 = $(".right-asidebar-chartbox3");
                chartTable(right_asidebar_chartbox1, ".chart-table1 tbody", 100);
                chartTable(right_asidebar_chartbox2, ".chart-table2 tbody", 100);
                chartTable(right_asidebar_chartbox3, ".chart-table3 tbody", 180);
                chartTable(right_asidebar_chartbox3, ".chart-table4 tbody", 280);
                if ($(this).is(":visible")) {
                    $(".top-panel-trigger").removeClass('active');
                    $(".info-desk-collapse").removeClass('active');
                    that.children(".text-change").text("HIDE");
                    var window_height = $(window).height();
                    var headerNav = $(".header-main nav").outerHeight();
                    var table_section_header = $(".main-content-header").outerHeight();
                    var table_table_header = $(".main-table-header").outerHeight();
                    var table_theader_header = $(".table-main thead").height();
                    var mainTop = table_section_header + table_table_header + table_theader_header + headerNav;
                    var table_main = window_height - mainTop;
                    var chart_main = window_height - table_section_header - headerNav;
                    $('.table-main tbody').css('height',table_main );
                    $('.main-chart').css('height',chart_main );

                    chartTable(right_asidebar_chartbox1, ".chart-table1 tbody", 100);
                    chartTable(right_asidebar_chartbox2, ".chart-table2 tbody", 100);
                    chartTable(right_asidebar_chartbox3, ".chart-table3 tbody", 180);
                    chartTable(right_asidebar_chartbox3, ".chart-table4 tbody", 280);

                } else {
                    $(".top-panel-trigger").addClass('active');
                    $(".info-desk-collapse").addClass('active');
                    that.children(".text-change").text("SHOW");

                    var window_height = $(window).height();
                    var headerNav = $(".header-main nav").outerHeight();
                    var table_section_header = $(".main-content-header").outerHeight();
                    var table_table_header = $(".main-table-header").outerHeight();
                    var table_theader_header = $(".table-main thead").height();
                    var mainTop = table_section_header + table_table_header + table_theader_header + headerNav;
                    var table_main = window_height - mainTop;
                    var chart_main = window_height - table_section_header - headerNav;
                    $('.table-main tbody').css('height',table_main );
                    $('.main-chart').css('height',chart_main );

                    chartTable(right_asidebar_chartbox1, ".chart-table1 tbody", 100);
                    chartTable(right_asidebar_chartbox2, ".chart-table2 tbody", 100);
                    chartTable(right_asidebar_chartbox3, ".chart-table3 tbody", 180);
                    chartTable(right_asidebar_chartbox3, ".chart-table4 tbody", 280);

                }
            });


        });

        $(".down-aside-trigger,.top-aside-trigger").on("click",function(){
            var that = $(this);
            $("aside").slideToggle("fast", function() {
                if ($(this).is(":visible")) {
                    $("body").removeClass('tablet-active');
                    $(".down-aside-trigger").removeClass('active');
                    that.children(".text-change").text("SHOW");


                } else {
                    $("body").addClass('tablet-active');
                    $(".down-aside-trigger").addClass('active');
                    that.children(".text-change").text("HIDE");

                }
            });
            var window_height = $(window).height();
            var headerNav = $(".header-main nav").outerHeight();
            var table_section_header = $(".main-content-header").outerHeight();
            var table_table_header = $(".main-table-header").outerHeight();
            var table_theader_header = $(".table-main thead").height();
            var mainTop = table_section_header + table_table_header + table_theader_header + headerNav;
            var table_main = window_height - mainTop;
            $('.table-main tbody').css('height',table_main );

        });



        // $(document).on('click','.event-trigger',function(){
        //
        //     var data = $(this).data('event');
        //
        //     if($(this).hasClass('active')) {
        //         $(this).removeClass('active');
        //     }else {
        //         $(".event-trigger").removeClass('active');
        //         $(this).addClass('active');
        //     }
        //     if($('#' + data).hasClass('active')) {
        //         $('#' + data).removeClass('active');
        //     }else {
        //         $(".event-tooltip").removeClass('active');
        //         $('#' + data).addClass('active');
        //     }
        //
        // });
        //
        // $('.close-tooltip').on('click', function(){
        //     $(this).parent().removeClass('active');
        //     $(".event-trigger").removeClass('active');
        // });

        var color1 = '#77dc8a', // ENTER YOUR COLORS HERE
            color2 = '#f58994',
            color3 = '#7da2f5';
        // color4 = '#ff699d',
        // color5 = '#f367d7',
        // color6 = '#7bca63',
        // color7 = '#ffbe3b',
        // color8 = '#8e9092';

        var colors = [color3, color2, color1];

        var colorChoice = false;   //true - random colors
        //false - color1,color2,color3

        /*-------------------------------------------------*/
        /* =  Wizard Tab Progression
         /*-------------------------------------------------*/

        if (isWizard) {
            var allSteps = ['pos', 'stubhub', 'delivery', 'splits', 'rows', 'increment', 'limits'];
            var allTabs = ['point-of-sale', 'stubhub', 'delivery-methods', 'splits', 'row-range', 'increment-criteria', 'price-limits'];
            var curStepIdx = allSteps.indexOf(wizardStep);

            var unlockedWizardTabs = {
                '#point-of-sale': true,
                '#stubhub': curStepIdx >= 1,
                '#delivery-methods': curStepIdx >= 2,
                '#splits': curStepIdx >= 3,
                '#row-range': curStepIdx >= 4,
                '#increment-criteria': curStepIdx >= 5,
                '#price-limits': curStepIdx >= 6,
            };

            if (curStepIdx >= 1) {
                var curStepElem = $('#tabs-wizard a[href="#' + allTabs[curStepIdx] + '"]');
                curStepElem.tab('show');
                curStepElem.parent().prevAll().addClass('done');
            }

            $('#tabs-wizard').on('show.bs.tab', function (e) {

                var target = $(e.target);
                var href = target.attr('href');

                if (typeof href === 'string' && unlockedWizardTabs.hasOwnProperty(href) && !unlockedWizardTabs[href]) {
                    target.blur();
                    e.preventDefault();
                    return false;
                }

                target.parent().prevAll().addClass('done');
            });


        }

        /*-------------------------------------------------*/
        /* =  Settings-page-pos `Continue` button updates
         /*-------------------------------------------------*/

        $('#settings-page-ticketnetwork-continue, #settings-page-skybox-continue, #settings-page-ticketutils-continue').addClass('disabled');

        $('#ticketnetwork-checkbox1, #settings-page-ticketnetwork-customer-id').on('change paste keyup input', function() {
            if ($('#ticketnetwork-checkbox1').prop('checked') && $('#settings-page-ticketnetwork-customer-id').val()) {
                $('#settings-page-ticketnetwork-continue').removeClass('disabled');
            } else {
                $('#settings-page-ticketnetwork-continue').addClass('disabled');
            }
        });

        $('#skybox-checkbox1, #settings-page-skybox-email, #settings-page-skybox-password').on('change paste keyup input', function() {
            if ($('#skybox-checkbox1').prop('checked') &&
                $('#settings-page-skybox-email').val() &&
                $('#settings-page-skybox-password').val()) {

                $('#settings-page-skybox-continue').removeClass('disabled');

            } else {
                $('#settings-page-skybox-continue').addClass('disabled');
            }
        });

        $('#settings-page-ticketutils-api-token, #settings-page-ticketutils-api-secret').on('change paste keyup input', function() {
            if ($('#settings-page-ticketutils-api-token').val() &&
                $('#settings-page-ticketutils-api-secret').val()) {

                $('#settings-page-ticketutils-continue').removeClass('disabled');

            } else {
                $('#settings-page-ticketutils-continue').addClass('disabled');
            }
        });

        /*-------------------------------------------------*/
        /* =  Splits-page `ALL` button updates
         /*-------------------------------------------------*/

        var createCheckAllFunc = function(splitVal) {
            return function() {
                for (var i = 2; i <= 11; i++) {
                    if (!$('#splits' + splitVal + '-radio' + i).prop('checked')) {
                        $('#splits' + splitVal + '-radio1').prop('checked', false);
                        return;
                    }
                }
                $('#splits' + splitVal + '-radio1').prop('checked', true);
            };
        };

        for (var i = 1; i <= 10; i++) {
            var checkAllFunc = createCheckAllFunc(i);
            for (var j = 2; j <= 11; j++) {
                $('#splits' + i + '-radio' + j).on('change', checkAllFunc);
            }
        }

        /*-------------------------------------------------*/
        /* =  Load User's Settings
         /*-------------------------------------------------*/

        if (typeof userPosType === 'string') {
            switch(userPosType) {

                case 'stubhub':
                    $('#pos-radio1').prop('checked', true);
                    break;

                case 'ticketnetwork':
                    $('#pos-radio2').prop('checked', true);
                    break;

                case 'skybox':
                    $('#pos-radio6').prop('checked', true);
                    break;
            }
        }

        if (typeof userStubhubEmail === 'string') {
            $('#currently-connected-email')
                .text(userStubhubEmail)
                .attr('href', 'mailto:' + userStubhubEmail);
        }

        if (typeof deliverySettings === 'object') {

            var types = [
                'electronic',
                'instant',
                'ups',
                'pickup',
            ];

            for (var i = 0; i < types.length; i++) {
                if (deliverySettings.hasOwnProperty(types[i])) {
                    for (var j = 0; j < deliverySettings[types[i]].length; j++) {
                        for (var k = 0; k < types.length; k++) {
                            if (types[k] === deliverySettings[types[i]][j]) {
                                $('#delivery-radio' + ( (i*4) + k + 1)).prop('checked', true);
                                break;
                            }
                        }
                    }
                }
            }
        }

        if (typeof splitSettings === 'object') {
            for (var i = 1; i <= 10; i++) {
                if (splitSettings.hasOwnProperty(i.toString())) {
                    for (var j = 0; j < splitSettings[i].length; j++) {
                        $('#splits' + i + '-radio' + (splitSettings[i][j] + 1)).prop('checked', true);
                    }
                }
                createCheckAllFunc(i)();
            }
        }

        if (typeof otherSettings !== 'undefined' && otherSettings.row_range_default) {
            switch (otherSettings.row_range_default) {
                case 'same':
                    $('#row-range-radio1').prop('checked', true);
                    break;

                case 'oneback':
                    $('#row-range-radio2').prop('checked', true);
                    break;

                case 'none':
                    $('#row-range-radio3').prop('checked', true);
                    break;
            }
        }

        if (typeof otherSettings !== 'undefined') {
            var isFlat = false;

            if (typeof otherSettings.increment_type_default !== 'undefined') {
                switch (otherSettings.increment_type_default) {
                    // case 'equal':
                    //   $('#pricings-criteria-radiobox1').prop('checked', true);
                    //   break;

                    case 'flat':
                        if (typeof otherSettings.increment_value_default !== 'undefined' &&
                            parseFloat(otherSettings.increment_value_default) === 0) {
                            $('#pricings-criteria-radiobox1').prop('checked', true);
                            isFlat = true;
                        } else {
                            $('#pricings-criteria-radiobox2').prop('checked', true);
                            $('#increment-criteria-switch-checkbox1').prop('checked', true);
                        }
                        break;

                    case 'percent':
                        $('#pricings-criteria-radiobox2').prop('checked', true);
                        $('#increment-criteria-switch-checkbox1').prop('checked', false);
                        break;
                }
            }

            if (!isFlat && typeof otherSettings.increment_value_default !== 'undefined') {
                var price = parseFloat(otherSettings.increment_value_default);

                if (price > 0) {
                    $('#increment-criteria-switch-checkbox2').prop('checked', true);
                } else {
                    price = 0 - price;
                }

                $('#pricings-criteria-figure-input').val(price);
                // $('#pricings-criteria-figure-input').autoNumeric('init');
            }

            if (typeof otherSettings.increment_relative_default !== 'undefined') {
                if (otherSettings.increment_relative_default === 'avg') {
                    $('#pricings-criteria-radiobox4').prop('checked', true);
                    if (typeof otherSettings.increment_average_of_default !== 'undefined') {
                        $('#pricings-criteria-average-input').val(otherSettings.increment_average_of_default);
                    }
                } else {
                    $('#pricings-criteria-radiobox3').prop('checked', true);
                    $('#pricings-criteria-lowest-select').val(otherSettings.increment_relative_default);
                    $('#pricings-criteria-lowest-select').selectOrDie('update');
                }
            }

            if (otherSettings.exclude_lowest_pct) {
                $('#pricings-criteria-exclude-input').val(otherSettings.exclude_lowest_pct);
                $('#pricings-criteria-radiobox5').prop('checked', true);
            }
        }

        if (typeof otherSettings !== 'undefined') {
            if (typeof otherSettings.floor_value_default !== 'undefined') {
                var price = parseFloat(otherSettings.floor_value_default);

                if (price > 0) {
                    $('#switch-checkbox4').prop('checked', true);
                } else {
                    price = 0 - price;
                }

                $('#price-limits-floor-input').val(price);
                // $('#price-limits-floor-input').autoNumeric('init');
            }

            if (otherSettings.floor_type_default && otherSettings.floor_type_default === 'flat') {
                $('#switch-checkbox3').prop('checked', true);
            }

            if (otherSettings.floor_relative_default && otherSettings.floor_relative_default === 'suggested') {
                $('#switch-checkbox5').prop('checked', true);
            }
        }

        /*-------------------------------------------------*/
        /* =  Update Settings Buttons
         /*-------------------------------------------------*/

        if (isWizard) {
            $('#wizard-next-stubhub').on('click', function() {
                if (typeof userPosType === 'undefined' || userPosType === '' || userPosType === ' ') {
                    toastr.error('Please select at least one provider', 'Error!')
                } else {
                    unlockedWizardTabs['#stubhub'] = true;
                    $('#tabs-wizard a[href="#stubhub"]').tab('show');
                }
            });
        }

        $('#settings-page-stubhub-continue').on('click', function (e) {

            var data = {
                'pos': 'stubhub',
            };

            $.ajax({
                url: '../assets/logic/php/ajax_storePOS.php',
                type: 'GET',
                dataType: 'json',
                data: data,
                beforeSend: function() {
                    $('.wiz-ajax-loader').fadeIn(500);
                    $(".modal-popup").removeClass('active');
                },
                success: function(response) {
                    if(response.success) {
                        toastr.success('Settings updated!','Success')
                        userPosType = 'stubhub';
                        $('#pos-radio1').prop('checked', true);
                        $(".modal-popup").removeClass('active');
                        if (isWizard) {
                            unlockedWizardTabs['#stubhub'] = true;
                            $('#tabs-wizard a[href="#stubhub"]').tab('show');
                        }
                    } else if (response.error) {
                        toastr.error(response.error, 'Error!')
                    } else {
                        toastr.error('Sorry, but an unknown error occurred.', 'Error!')
                    }

                    console.log(response);

                },
                error: function (err, msg) {

                },
                complete: function() {
                    $('.wiz-ajax-loader').fadeOut(500);
                },
            })
        })

        $('#settings-page-ticketnetwork-continue').on('click', function (e) {

            var data = {
                'pos': 'ticketnetwork',
                'brokerId': parseInt($('#settings-page-ticketnetwork-customer-id').val()),
            };

            $.ajax({
                url: '../assets/logic/php/ajax_storePOS.php',
                type: 'GET',
                dataType: 'json',
                data: data,
                beforeSend: function() {
                    $('.wiz-ajax-loader').fadeIn(500);
                    $(".modal-popup").removeClass('active');
                },
                success: function(response) {
                    if(response.success) {
                        toastr.success('Settings updated!','Success')
                        userPosType = 'ticketnetwork';
                        $('#pos-radio2').prop('checked', true);
                        $(".modal-popup").removeClass('active');
                        if (isWizard) {
                            unlockedWizardTabs['#stubhub'] = true;
                            $('#tabs-wizard a[href="#stubhub"]').tab('show');
                        }
                    } else if (response.error) {
                        toastr.error(response.error, 'Error!')
                    } else {
                        toastr.error('Sorry, but an unknown error occurred.', 'Error!')
                    }

                    console.log(response);

                },
                error: function (err, msg) {

                },
                complete: function() {
                    $('.wiz-ajax-loader').fadeOut(500);
                },
            })
        })

        $('#settings-page-skybox-continue').on('click', function (e) {

            var data = {
                'pos': 'skybox',
                'email': $('#settings-page-skybox-email').val(),
                'password': $('#settings-page-skybox-password').val(),
            };

            $.ajax({
                url: '../assets/logic/php/ajax_storePOS.php',
                type: 'GET',
                dataType: 'json',
                data: data,
                beforeSend: function() {
                    $('.wiz-ajax-loader').fadeIn(500);
                    $(".modal-popup").removeClass('active');
                },
                success: function(response) {
                    if(response.success) {
                        toastr.success('Settings updated!','Success')
                        userPosType = 'skybox';
                        $('#pos-radio6').prop('checked', true);
                        $(".modal-popup").removeClass('active');
                        if (isWizard) {
                            unlockedWizardTabs['#stubhub'] = true;
                            $('#tabs-wizard a[href="#stubhub"]').tab('show');
                        }
                    } else if (response.error) {
                        toastr.error(response.error, 'Error!')
                    } else {
                        toastr.error('Sorry, but an unknown error occurred.', 'Error!')
                    }

                    console.log(response);

                },
                error: function (err, msg) {

                },
                complete: function() {
                    $('.wiz-ajax-loader').fadeOut(500);
                },
            })
        })

        $('#settings-page-ticketutils-continue').on('click', function (e) {

            var data = {
                'pos': 'ticketutils',
                'token': $('#settings-page-ticketutils-api-token').val(),
                'secret': $('#settings-page-ticketutils-api-secret').val(),
            };

            $.ajax({
                url: '../assets/logic/php/ajax_storePOS.php',
                type: 'GET',
                dataType: 'json',
                data: data,
                beforeSend: function() {
                    $('.wiz-ajax-loader').fadeIn(500);
                    $(".modal-popup").removeClass('active');
                },
                success: function(response) {
                    if(response.success) {
                        toastr.success('Settings updated!','Success')
                        userPosType = 'ticketutils';
                        $('#pos-radio7').prop('checked', true);
                        $(".modal-popup").removeClass('active');
                        if (isWizard) {
                            unlockedWizardTabs['#stubhub'] = true;
                            $('#tabs-wizard a[href="#stubhub"]').tab('show');
                        }
                    } else if (response.error) {
                        toastr.error(response.error, 'Error!')
                    } else {
                        toastr.error('Sorry, but an unknown error occurred.', 'Error!')
                    }

                    console.log(response);

                },
                error: function (err, msg) {

                },
                complete: function() {
                    $('.wiz-ajax-loader').fadeOut(500);
                },
            })
        })

        $('#stubhub-page-form-button, #wizard-next-delivery-methods').on('click', function (e) {

            var email = $('#stubhub-page-form input[name="email"]').val();

            $.ajax({
                url: '../assets/logic/php/ajax_storeStubhub.php',
                type: 'GET',
                dataType: 'json',
                data: $('#stubhub-page-form').serialize(),
                beforeSend: function() {
                    $('.wiz-ajax-loader').fadeIn(500);
                },
                success: function(response) {
                    if(response.success) {
                        toastr.success('Settings updated!','Success')
                        if (isWizard) {
                            unlockedWizardTabs['#delivery-methods'] = true;
                            $('#tabs-wizard a[href="#delivery-methods"]').tab('show');
                        }
                        if (typeof userStubhubEmail === 'string') {
                            userStubhubEmail = email;
                            $('#currently-connected-email')
                                .text(userStubhubEmail)
                                .attr('href', 'mailto:' + userStubhubEmail);
                        }
                    } else if (response.error) {
                        toastr.error(response.error, 'Error!')
                    } else {
                        toastr.error('Sorry, but an unknown error occurred.', 'Error!')
                    }

                    console.log(response);

                },
                error: function (err, msg) {

                },
                complete: function() {
                    $('.wiz-ajax-loader').fadeOut(500);
                },
            })
        })

        $('#delivery-page-form-button, #wizard-next-splits').on('click', function (e) {

            var data = {
                'electronic': [],
                'instant': [],
                'ups': [],
                'pickup': [],
            };

            var hasData = {
                'electronic': false,
                'instant': false,
                'ups': false,
                'pickup': false,
            };

            for (var i = 0; i < 16; i++) {
                if ($('#delivery-radio' + (i + 1)).prop('checked')) {

                    var ourTicket;
                    var compareWith;

                    switch ((i - (i % 4)) / 4) {
                        case 0:
                            ourTicket = 'electronic';
                            break;

                        case 1:
                            ourTicket = 'instant';
                            break;

                        case 2:
                            ourTicket = 'ups';
                            break;

                        case 3:
                            ourTicket = 'pickup';
                            break;

                        default:
                            continue;
                    }

                    switch (i % 4) {
                        case 0:
                            compareWith = 'electronic';
                            break;

                        case 1:
                            compareWith = 'instant';
                            break;

                        case 2:
                            compareWith = 'ups';
                            break;

                        case 3:
                            compareWith = 'pickup';
                            break;

                        default:
                            continue;
                    }

                    data[ourTicket].push(compareWith);
                    hasData[ourTicket] = true;
                }
            }

            if (!hasData.electronic || !hasData.instant || !hasData.ups || !hasData.pickup) {
                toastr.error('Please select at least one delivery method for each type of ticket', 'Error!');
                return;
            }

            data.electronic = data.electronic.join();
            data.instant = data.instant.join();
            data.ups = data.ups.join();
            data.pickup = data.pickup.join();

            console.log('Delivery Method Data: ' + JSON.stringify(data));

            $.ajax({
                url: '../assets/logic/php/ajax_storeDeliverySettings.php',
                type: 'GET',
                dataType: 'json',
                data: data,
                beforeSend: function() {
                    $('.wiz-ajax-loader').fadeIn(500);
                },
                success: function(response) {
                    if(response.success) {
                        toastr.success('Settings updated!','Success')
                        if (isWizard) {
                            unlockedWizardTabs['#splits'] = true;
                            $('#tabs-wizard a[href="#splits"]').tab('show');
                        }
                    } else if (response.error) {
                        toastr.error(response.error, 'Error!')
                    } else {
                        toastr.error('Sorry, but an unknown error occurred.', 'Error!')
                    }

                    console.log(response);

                },
                error: function (err, msg) {

                },
                complete: function() {
                    $('.wiz-ajax-loader').fadeOut(500);
                },
            })
        })

        $('#splits-page-form-button, #wizard-next-row-range').on('click', function (e) {

            var data = {};

            var hasData = {};
            for (var i = 1; i <= 10; i++) {
                hasData[i] = false;
            }

            for (var i = 1; i <= 10; i++) {
                var nextSplit = [];
                for (var j = 1; j <= 10; j++) {
                    if ($('#splits' + i + '-radio' + (j + 1)).prop('checked')) {
                        nextSplit.push(j);
                        hasData[i] = true;
                    }
                }
                data[i] = nextSplit.join();
            }

            var hasAllData = true;
            for (var i = 1; i <= 10; i++) {
                hasAllData = hasAllData && hasData[i];
            }

            if (!hasAllData) {
                toastr.error('Please select at least one split for each quantity', 'Error!');
                return;
            }

            console.log('Splits Data: ' + JSON.stringify(data));

            $.ajax({
                url: '../assets/logic/php/ajax_storeSplitsSettings.php',
                type: 'GET',
                dataType: 'json',
                data: data,
                beforeSend: function() {
                    $('.wiz-ajax-loader').fadeIn(500);
                },
                success: function(response) {
                    if(response.success) {
                        toastr.success('Settings updated!','Success')
                        if (isWizard) {
                            unlockedWizardTabs['#row-range'] = true;
                            $('#tabs-wizard a[href="#row-range"]').tab('show');
                        }
                    } else if (response.error) {
                        toastr.error(response.error, 'Error!')
                    } else {
                        toastr.error('Sorry, but an unknown error occurred.', 'Error!')
                    }

                    console.log(response);

                },
                error: function (err, msg) {

                },
                complete: function() {
                    $('.wiz-ajax-loader').fadeOut(500);
                },
            })
        })

        $('#row-range-page-form-button, #wizard-next-increment-criteria').on('click', function (e) {

            var data = {
                'default': $('input[name="default"]:checked').val(),
            };

            if (typeof data.default === 'undefined') {
                toastr.error('Please select a row range', 'Error!');
                return;
            }

            console.log('Range Data: ' + JSON.stringify(data));

            $.ajax({
                url: '../assets/logic/php/ajax_storeRowSettings.php',
                type: 'GET',
                dataType: 'json',
                data: data,
                beforeSend: function() {
                    $('.wiz-ajax-loader').fadeIn(500);
                },
                success: function(response) {
                    if(response.success) {
                        toastr.success('Settings updated!','Success')
                        if (isWizard) {
                            unlockedWizardTabs['#increment-criteria'] = true;
                            $('#tabs-wizard a[href="#increment-criteria"]').tab('show');
                        }
                    } else if (response.error) {
                        toastr.error(response.error, 'Error!')
                    } else {
                        toastr.error('Sorry, but an unknown error occurred.', 'Error!')
                    }

                    console.log(response);

                },
                error: function (err, msg) {

                },
                complete: function() {
                    $('.wiz-ajax-loader').fadeOut(500);
                },
            })
        })

        $('#increment-criteria-page-form-button, #wizard-next-price-limits').on('click', function (e) {

            var step1Complete = !!(
                $('#pricings-criteria-radiobox1').prop('checked') || (
                    $('#pricings-criteria-radiobox2').prop('checked') &&
                    !isNaN(parseFloat($('#pricings-criteria-figure-input').val())) &&
                    parseFloat($('#pricings-criteria-figure-input').val()) !== null
                )
            );

            var step2Complete = !!(
                $('#pricings-criteria-radiobox3').prop('checked') || (
                    $('#pricings-criteria-radiobox4').prop('checked') &&
                    !isNaN(parseInt($('#pricings-criteria-average-input').val())) &&
                    parseInt($('#pricings-criteria-average-input').val()) !== null
                )
            );

            if (!step1Complete || !step2Complete) {
                toastr.error('Please complete steps 1 and 2', 'Error!');
                return;
            }

            var data = {};

            data.incVal = parseFloat($('#pricings-criteria-figure-input').val());

            if (isNaN(data.incVal) || data.incVal === null) {
                data.incVal = 0;
            }

            if ($('#pricings-criteria-radiobox1').prop('checked')) {
                data.incType = 'flat';
                data.incVal = 0;
            } else if ($('#increment-criteria-switch-checkbox1').prop('checked')) {
                data.incType = 'flat';
            } else {
                data.incType = 'percent';
            }

            if (!($('#increment-criteria-switch-checkbox2').prop('checked'))) {
                data.incVal = 0 - data.incVal;
            }

            if ($('#pricings-criteria-radiobox4').prop('checked')) {
                data.incRelative = 'avg';
            } else {
                data.incRelative = $('#pricings-criteria-lowest-select').val();
            }

            data.incAverageOf = parseInt($('#pricings-criteria-average-input').val());

            if (isNaN(data.incAverageOf) || data.incAverageOf === null) {
                data.incAverageOf = 0;
            }

            if ($('#pricings-criteria-radiobox5').prop('checked')) {
                data.excludeLowestPct = parseInt($('#pricings-criteria-exclude-input').val());
                if (isNaN(data.excludeLowestPct) || data.excludeLowestPct === null) {
                    data.excludeLowestPct = 0;
                }
            }

            console.log('Increment Data: ' + JSON.stringify(data));

            $.ajax({
                url: '../assets/logic/php/ajax_storeIncrementSettings.php',
                type: 'GET',
                dataType: 'json',
                data: data,
                beforeSend: function() {
                    $('.wiz-ajax-loader').fadeIn(500);
                },
                success: function(response) {
                    if(response.success) {
                        toastr.success('Settings updated!','Success')
                        if (isWizard) {
                            unlockedWizardTabs['#price-limits'] = true;
                            $('#tabs-wizard a[href="#price-limits"]').tab('show');
                        }
                    } else if (response.error) {
                        toastr.error(response.error, 'Error!')
                    } else {
                        toastr.error('Sorry, but an unknown error occurred.', 'Error!')
                    }

                    console.log(response);

                },
                error: function (err, msg) {

                },
                complete: function() {
                    $('.wiz-ajax-loader').fadeOut(500);
                },
            })
        })

        $('#price-limits-page-form-button, #wizard-next-complete').on('click', function (e) {

            var data = {};

            if ($('#switch-checkbox3').prop('checked')) {
                data.floorType = 'flat';
            } else {
                data.floorType = 'percent';
            }

            data.floorVal = parseFloat($('#price-limits-floor-input').val());

            if (isNaN(data.floorVal) || data.floorVal === null) {
                data.floorVal = 0;
            }

            if (!($('#switch-checkbox4').prop('checked'))) {
                data.floorVal = 0 - data.floorVal;
            }

            if ($('#switch-checkbox5').prop('checked')) {
                data.floorRelative = 'suggested';
            } else {
                data.floorRelative = 'cost';
            }

            console.log('Limits Data: ' + JSON.stringify(data));

            $.ajax({
                url: '../assets/logic/php/ajax_storeLimitSettings.php',
                type: 'GET',
                dataType: 'json',
                data: data,
                beforeSend: function() {
                    $('.wiz-ajax-loader').fadeIn(500);
                },
                success: function(response) {
                    if(response.success) {
                        toastr.success('Settings updated!','Success')
                        if (isWizard) {
                            // If the user has a slow internet connection, it could be a while before the next page loads
                            // It's probably better to check off this tab even if we're immediately loading a new page afterwards
                            $('#tabs-wizard a[href="#price-limits"]').parent().addClass('done');

                            window.open("/dashboard/index.php", "_self");
                        }
                    } else if (response.error) {
                        toastr.error(response.error, 'Error!')
                    } else {
                        toastr.error('Sorry, but an unknown error occurred.', 'Error!')
                    }

                    console.log(response);

                },
                error: function (err, msg) {

                },
                complete: function() {
                    $('.wiz-ajax-loader').fadeOut(500);
                },
            })
        })

        /*-------------------------------------------------*/
        /* =  Use SeatMetrics Recommendations Checkboxes
         /*-------------------------------------------------*/

        $('#recommendation-delivery-page').on('change', function (e) {

            var i;

            for (i = 1; i <= 16; i++) {
                $('#delivery-radio' + i).prop('checked', false);
            }

            if ($(this).prop('checked')) {
                var recommendations = [
                    '#delivery-radio1',
                    '#delivery-radio2',
                    '#delivery-radio5',
                    '#delivery-radio6',
                    '#delivery-radio11',
                    '#delivery-radio12',
                    '#delivery-radio15',
                    '#delivery-radio16',
                ];

                for (i = 0; i < recommendations.length; i++) {
                    $(recommendations[i]).prop('checked', true);
                }
            }
        })

        $('#recommendation-splits-page').on('change', function (e) {

            var i;
            var j;

            for (var i = 1; i <= 10; i++) {
                for (var j = 1; j <= 11; j++) {
                    $('#splits' + i + '-radio' + j).prop('checked', false);
                }
            }

            if ($(this).prop('checked')) {
                var recommendations = [
                    '#splits1-radio2',
                    '#splits2-radio3',
                    '#splits3-radio4',
                    '#splits4-radio5',
                    '#splits5-radio4',
                    '#splits5-radio6',
                    '#splits6-radio7',
                    '#splits7-radio5',
                    '#splits7-radio6',
                    '#splits7-radio7',
                    '#splits7-radio8',
                    '#splits8-radio7',
                    '#splits8-radio8',
                    '#splits8-radio9',
                    '#splits9-radio6',
                    '#splits9-radio7',
                    '#splits9-radio8',
                    '#splits9-radio9',
                    '#splits9-radio10',
                    '#splits10-radio7',
                    '#splits10-radio8',
                    '#splits10-radio9',
                    '#splits10-radio10',
                    '#splits10-radio11',
                ];

                for (i = 0; i < recommendations.length; i++) {
                    $(recommendations[i]).prop('checked', true);
                }
            }

        })

        $('#recommendation-row-range-page').on('change', function (e) {

            var i;

            for (i = 1; i <= 3; i++) {
                $('#row-range-radio' + i).prop('checked', false);
            }

            if ($(this).prop('checked')) {
                $('#row-range-radio1').prop('checked', true);
            }
        })

        $('#recommendation-increment-criteria-page').on('change', function (e) {

            if ($(this).prop('checked')) {

                var i;

                var recommendations = [
                    '#pricings-criteria-radiobox1',
                    '#increment-criteria-switch-checkbox1',
                    '#pricings-criteria-radiobox4',
                    '#pricings-criteria-radiobox5',
                ];

                for (i = 0; i < recommendations.length; i++) {
                    $(recommendations[i]).prop('checked', true);
                }

                $('#increment-criteria-switch-checkbox2').prop('checked', false);

                $('#pricings-criteria-average-input').val('3');
                $('#pricings-criteria-exclude-input').val('15');
            }
        })
        $('#pricings-criteria-average-input').autoNumeric('init',{vMin: '0', vMax: '999999999' });
        $('#pricings-criteria-exclude-input').autoNumeric('init',{vMin: '0', vMax: '999999999' });
        $("#pricings-criteria-exclude-input").on('input propertychange paste change', function () {
            var val = $(this).val();
            if( val.indexOf("0") == 0 ) {
                $(this).val("");
            }
        });
        $("#pricings-criteria-average-input").on('input propertychange paste change', function () {
            var val = $(this).val();
            if( val.indexOf("0") == 0 ) {
                $(this).val("");
            }
        });


        $('#recommendation-price-limits-page').on('change', function (e) {

            if ($(this).prop('checked')) {

                $('#switch-checkbox3').prop('checked', false);
                $('#switch-checkbox4').prop('checked', false);
                $('#switch-checkbox5').prop('checked', true);

                $('#price-limits-floor-input').val('25');
            }
        })

        /*---------------------------------------------- HELPER FUNCTIONS --------------------*/

        var randomScalingFactor = function () {
            return (Math.random() > 0.5 ? 1.0 : 0.5) * Math.round(Math.random() * 100);
        };
        var randomColorFactor = function () {
            return Math.round(Math.random() * 255);
        };
        var randomColor = function () {
            return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',1)';
        };
        var preRandomColor = function (colorChoice) {
            if (colorChoice == true) {
                return [colors[Math.round(Math.random() * 2)], colors[Math.round(Math.random() * 2)], colors[Math.round(Math.random() * 2)]];
            } else {
                return colors;
            }
        }

        var ChartData = {
            labels: ["May", "June", "July", "Aug", "Sept", "Oct"],
            datasets: [{
                label: "Dataset 1",
                backgroundColor: "rgba(125,162,245,0.1)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
                borderColor: preRandomColor(colorChoice)[0],
                pointBorderColor: preRandomColor(colorChoice)[0],
                pointBackgroundColor:"#fff",
                lineTension: 0,
                fill: true
            },{
                label: "Dataset 2",
                backgroundColor: "rgba(245,137,148,0.1)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
                borderColor: preRandomColor(colorChoice)[1],
                pointBorderColor: preRandomColor(colorChoice)[1],
                pointBackgroundColor:"#fff",
                lineTension: 0,
                fill: true
            },{
                label: "Dataset 3",
                backgroundColor: "rgba(134,169,246,0.1)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
                borderColor: preRandomColor(colorChoice)[2],
                pointBorderColor: preRandomColor(colorChoice)[2],
                pointBackgroundColor:"#fff",
                lineTension: 0,
                fill: true
            }]
        };
        var ChartData1 = {
            labels: ["May", "June", "July", "Aug", "Sept", "Oct"],
            datasets: [{
                label: "Dataset 1",
                backgroundColor: "rgba(125,162,245,0.1)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
                borderColor: preRandomColor(colorChoice)[0],
                pointBorderColor: preRandomColor(colorChoice)[0],
                pointBackgroundColor:"#fff",
                lineTension: 0,
                fill: true
            }]
        };

        var lineChart = {
            type: 'line',
            data: ChartData,

            options: {
                margins: {
                    left: 0,
                    right: 20,
                    top: 0,
                    bottom: 0,
                },
                responsive: true,
                legend: {
                    display:false
                },
                hover: {
                    mode: 'label'
                },
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines : {
                            display : false
                        },
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: false,
                        gridLines : {
                            display : true
                        },

                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        }
                    }]
                },
                title: {
                    display: false,
                    text: 'Chart.js Line Chart - Legend'
                }
            }
        };
        var lineChart1 = {
            type: 'line',
            data: ChartData1,

            options: {
                margins: {
                    left: 0,
                    right: 20,
                    top: 0,
                    bottom: 0,
                },
                responsive: true,
                legend: {
                    display:false
                },
                hover: {
                    mode: 'label'
                },
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines : {
                            display : false
                        },
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: false,
                        gridLines : {
                            display : true
                        },

                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        }
                    }]
                },
                title: {
                    display: false,
                    text: 'Chart.js Line Chart - Legend'
                }
            }
        };

    });

})(jQuery);





