<template>
  <div class="findSwiper">
    <div class="wrapper">
      <swiper ref="mySwiper" :options="swiperOptions" v-if="slideList.length">
        <swiper-slide v-for="(item,index) in slideList" :key="index">
          <a href>
            <img :src="item.imageUrl" alt />
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// import 'swiper/css/swiper.css'

export default {
  name: 'Swiper',
  props: {
    slideList: {
      type: Array,
      default () {
        return []
      }
    }

  },
  data () {
    return {
      swiperOptions: {
        // 同时显示的数量
        slidesPerView: 3,
        // 每张图的间距
        spaceBetween: 30,
        // 多少slide为一组
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        centeredSlides: true,
        paginationClickable: true,
        grabCursor: true,
        autoplay: true,
        // effect: 'coverflow',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang='scss'>
@import 'assets/scss/base.scss';
.findSwiper {
  .wrapper {
    .swiper-pagination {
      margin-top: 40px;
    }
  }
}
</style>
