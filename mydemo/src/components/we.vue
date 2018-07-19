<template>
    <swiper :options="swiperOption" ref="mySwiper" style="overflow: hidden;">
        <!-- slides -->
        <swiper-slide class="one" style="background: antiquewhite"><img src="http://pic1.win4000.com/wallpaper/5/5487ebefc3228.jpg" alt=""></swiper-slide>
        <swiper-slide class="one" style="background: blue"><img src="http://img4.imgtn.bdimg.com/it/u=1827414005,361749863&fm=27&gp=0.jpg" alt=""></swiper-slide>
        <swiper-slide class="one" style="background: pink"><img src="http://img5.imgtn.bdimg.com/it/u=489374842,3075506065&fm=27&gp=0.jpg" alt=""></swiper-slide>
        <swiper-slide class="one" style="background: #cccccc"><img src="http://img3.imgtn.bdimg.com/it/u=585080908,1978921499&fm=27&gp=0.jpg" alt=""></swiper-slide>
        <swiper-slide class="one" style="background: red"><img src="http://img1.imgtn.bdimg.com/it/u=4099031750,4181728977&fm=27&gp=0.jpg" alt=""></swiper-slide>
        <swiper-slide class="one" style="background: yellow"><img src="http://img3.imgtn.bdimg.com/it/u=1137188492,321659251&fm=27&gp=0.jpg" alt=""></swiper-slide>
        <swiper-slide class="one" style="background: greenyellow"><img src="http://img1.imgtn.bdimg.com/it/u=4144665989,3104020614&fm=27&gp=0.jpg" alt=""></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default{
    components: {
        swiper,
        swiperSlide
    },
    data () {
    return {
        swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            waitForTransition: false,
        },
        grabCursor : true,
        setWrapperSize :true,
        loop:true,
        direction : 'horizontal',
        navigation:{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect : 'coverflow',
        slidesPerView: 3,
        centeredSlides: true,
        coverflowEffect: {
            rotate: 30,
            stretch: 10,
            depth: 60,
            modifier: 2,
            slideShadows : true
        },
        pagination : '.swiper-pagination',
        paginationClickable :true,
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        }
    }
  },

}
</script>
<style scoped>
    .text{
        width: 100%;
        height: 600px;
        background: pink;
        overflow: hidden;
    }
    .one{
        width: 100%;
        height: 600px;
    }
    .one img {
        width: 100%;
        height: 100%;
    }
</style>