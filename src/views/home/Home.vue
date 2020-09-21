<template>
  <div class="home">
    <swiper :slideList="slideList"></swiper>
    <recommend-album></recommend-album>
    <recommend-song></recommend-song>
    <recommend-singer></recommend-singer>
  </div>
</template>

<script>
import swiper from 'components/content/swiper/swiper'
import recommendAlbum from 'components/content/recommend-album/recommend-album'
import recommendSong from 'components/content/recommendSong/recommendSong'
import recommendSinger from 'components/content/recommendSinger/recommendSinger'

// import scroll from 'components/common/scroll/scroll'

import { getSlideList } from 'api/method.js'
export default {
  name: 'home',
  data () {
    return {
      slideList: []
    }
  },
  components: {
    swiper,
    recommendAlbum,
    recommendSong,
    recommendSinger
    // scroll
  },
  methods: {
    getSlideList () {
      getSlideList().then(res => {
        // console.log(res.data.banners)
        this.slideList = res.data.banners
      })
    }
  },
  mounted () {
    this.getSlideList()
  }
}
</script>

<style>
</style>
