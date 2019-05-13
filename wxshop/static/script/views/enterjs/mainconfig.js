require.config({
    paths:{
        jquery:"../../libs/jquery",
        swiper:"../../plugs/swiper.min",
        commonobj:"../js/commonobj"
    }
})

require(["jquery","swiper","commonobj"],function($,swiper,commonobj){
       $(function(){
        var topSlider=new Swiper('#topSlider', {
            slidesPerView: 1,
            centeredSlides: true,
            //autoplay: 3000,
            loop: true,
            autoplayDisableOnInteraction: true
        });

         //购物车减
        $(".reduce").on("click",commonobj.reducenums);

        //购物车加
        $(".add").on("click",commonobj.addnums);
    })


    
})