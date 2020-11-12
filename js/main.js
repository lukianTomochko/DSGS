$(document).ready(function () {

    // burger menu open/close

    $(".burger-manu-btn-open").on("click", function (event) {
        event.preventDefault();
        $(".burger-manu-btn-close").css("display", "block");
        $(".burger-manu-btn-open").css("display", "none");
        $(".burger-manu-block").toggleClass("burger-manu-block-active");
    });

    $(".burger-manu-btn-close").on("click", function (event) {
        event.preventDefault();
        $(".burger-manu-btn-open").css("display", "block");
        $(".burger-manu-btn-close").css("display", "none");
        $(".burger-manu-block").toggleClass("burger-manu-block-active");
    });

    // btn touch - screen move

    $(".up").on("click", function (event) {
        event.preventDefault();
        var top = $("#top-page").offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });

    $(".scroll-down").on("click", function (event) {
        event.preventDefault();
        var form_section = $("#form_section").offset().top;
        $('body,html').animate({
            scrollTop: form_section
        }, 1000);
    });
    $(".btn_down").on("click", function (event) {
        event.preventDefault();
        var footer_block = $("#footer_info_container").offset().top;
        $('body,html').animate({
            scrollTop: footer_block
        }, 1000);
    });

    // slider-1 move

    var images = ["before", "after"];
    var num = 0;

    $(".slider-btn-right").on("click", function (event) {
        num += 100;
        if (num >= images.length * 100) {
            num = 0;
        }
        $(".slider_header_container").css("margin-left", -num + "%");
    });

    $(".slider-btn-left").on("click", function (event) {
        num -= 100;
        if (num < 0) {
            num = (images.length - 1) * 100;
        }

        $(".slider_header_container").css("margin-left", -num + "%");
    });

    // slider-2 move

    var ceiling_img_array = ["1", "2", "3", "4", "5"];
    var num_2 = 0;

    function slider() {
        if ($("body, html").width() < 770) {
            ceiling_img_array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        } else {
            ceiling_img_array = ["1", "2", "3", "4", "5"];
        }
    }
    setInterval(slider, 10);



    $(".slider-info-btn-right").on("click", function (event) {
        num_2 += 100;
        if (num_2 >= ceiling_img_array.length * 100) {
            num_2 = 0;
        }
        $(".slider-block-move").css("margin-left", -num_2 + "%");
    });

    $(".slider-info-btn-left").on("click", function (event) {
        num_2 -= 100;
        if (num_2 < 0) {
            num_2 = (ceiling_img_array.length - 1) * 100;
        }

        $(".slider-block-move").css("margin-left", -num_2 + "%");
    });

    // list fadeOn/fadeOff

    var b = 0;
    $(".block-info-page-2").on("click", function () {        
        if (b == 0) {
            $(".btn-plus").css("transform", "rotate(-45deg)");
            b = 1;
        } else {
            $(".btn-plus").css("transform", "rotate(0deg)");
            b = 0;
        }

    });
    
    $(".block-info-page-2-n1").on("click", function () {
        $(".block-fadeOff-n1").slideToggle();
    });
    $(".block-info-page-2-n2").on("click", function () {
        $(".block-fadeOff-n2").slideToggle();
    });
    $(".block-info-page-2-n3").on("click", function () {
        $(".block-fadeOff-n3").slideToggle();
    });
    $(".block-info-page-2-n4").on("click", function () {
        $(".block-fadeOff-n4").slideToggle();
    });
    $(".block-info-page-2-n5").on("click", function () {
        $(".block-fadeOff-n5").slideToggle();
    });
    
    // sertificate
    
    $(".block-carousel img").on("click", function(){
        $(".sertificates-container-fade").fadeIn(100);
    });
    
    $(".sertificate-cross").on("click", function(){
        $(".sertificates-container-fade").fadeOut(100);
    });
    
    
    $(".block-carousel img").on("click", function(){
        var ImgPath = $(this).attr('data-img-path');
        $(".sertificate-img img").attr('src', ImgPath);
    });
    
    
    // Img gallary


    function crossFade(){
        $(".btn-cross").fadeIn(0);
    }
    
    $(".image-gallery").on("click", function(){
           $(".images-container-fadeOff").toggleClass("images-container-fadeOff-active");  
           $(".images-block-bg").fadeToggle(700); 
            setTimeout(crossFade, 600);
    });
    
    $(".image-gallery-fadeOff").on("click", function(){
        $(".images-container-fadeOff").toggleClass("images-container-fadeOff-active");  
        $(".images-block-bg").fadeToggle(700);
        $(".btn-cross").fadeOut(0);
    });
    
    $(".btn-cross").on("click", function(){
            $(".image-gallery-fadeOff").removeClass("image-gallery-fadeOff-active");
            $(".images-container-fadeOff").removeClass("images-container-fadeOff-active");  
            $(".images-block-bg").fadeOut(700);  
            $(".btn-cross").fadeOut(0);  
    });
    
    
    
    $(".image-gallery:nth-child(1), .image-gallery-fadeOff:nth-child(1)").on("click", function(){
            $(".image-gallery-fadeOff:nth-child(1)").toggleClass("image-gallery-fadeOff-active");
    });
    $(".image-gallery:nth-child(2), .image-gallery-fadeOff:nth-child(2)").on("click", function(){
            $(".image-gallery-fadeOff:nth-child(2)").toggleClass("image-gallery-fadeOff-active");
    });
    $(".image-gallery:nth-child(3), .image-gallery-fadeOff:nth-child(3)").on("click", function(){
            $(".image-gallery-fadeOff:nth-child(3)").toggleClass("image-gallery-fadeOff-active");
    });
    $(".image-gallery:nth-child(4), .image-gallery-fadeOff:nth-child(4)").on("click", function(){
            $(".image-gallery-fadeOff:nth-child(4)").toggleClass("image-gallery-fadeOff-active");
    });
    $(".image-gallery:nth-child(5), .image-gallery-fadeOff:nth-child(5)").on("click", function(){
            $(".image-gallery-fadeOff:nth-child(5)").toggleClass("image-gallery-fadeOff-active");
    });
    $(".image-gallery:nth-child(6), .image-gallery-fadeOff:nth-child(6)").on("click", function(){
            $(".image-gallery-fadeOff:nth-child(6)").toggleClass("image-gallery-fadeOff-active");
    });
    $(".image-gallery:nth-child(7), .image-gallery-fadeOff:nth-child(7)").on("click", function(){
            $(".image-gallery-fadeOff:nth-child(7)").toggleClass("image-gallery-fadeOff-active");
    });
    $(".image-gallery:nth-child(8), .image-gallery-fadeOff:nth-child(8)").on("click", function(){
            $(".image-gallery-fadeOff:nth-child(8)").toggleClass("image-gallery-fadeOff-active");
    });
    $(".image-gallery:nth-child(9), .image-gallery-fadeOff:nth-child(9)").on("click", function(){
            $(".image-gallery-fadeOff:nth-child(9)").toggleClass("image-gallery-fadeOff-active");
    });
    $(".image-gallery:nth-child(10), .image-gallery-fadeOff:nth-child(10)").on("click", function(){
            $(".image-gallery-fadeOff:nth-child(10)").toggleClass("image-gallery-fadeOff-active");
    });
    $(".image-gallery:nth-child(11), .image-gallery-fadeOff:nth-child(11)").on("click", function(){
            $(".image-gallery-fadeOff:nth-child(11)").toggleClass("image-gallery-fadeOff-active");
    });
    $(".image-gallery:nth-child(12), .image-gallery-fadeOff:nth-child(12)").on("click", function(){
            $(".image-gallery-fadeOff:nth-child(12)").toggleClass("image-gallery-fadeOff-active");
    });
    $(".image-gallery:nth-child(13), .image-gallery-fadeOff:nth-child(13)").on("click", function(){
            $(".image-gallery-fadeOff:nth-child(13)").toggleClass("image-gallery-fadeOff-active");
    });
    $(".image-gallery:nth-child(14), .image-gallery-fadeOff:nth-child(14)").on("click", function(){
            $(".image-gallery-fadeOff:nth-child(14)").toggleClass("image-gallery-fadeOff-active");
    });
    $(".image-gallery:nth-child(15), .image-gallery-fadeOff:nth-child(15)").on("click", function(){
            $(".image-gallery-fadeOff:nth-child(15)").toggleClass("image-gallery-fadeOff-active");
    });
    $(".image-gallery:nth-child(16), .image-gallery-fadeOff:nth-child(16)").on("click", function(){
            $(".image-gallery-fadeOff:nth-child(16)").toggleClass("image-gallery-fadeOff-active");
    });
    
    // Animate scroll

    new WOW().init();


    
});
