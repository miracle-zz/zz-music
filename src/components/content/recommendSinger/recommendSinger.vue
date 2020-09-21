<template>
  <div class="recommendSinger">
    <nav-title :title="title"></nav-title>
    <singer :singer="singer"></singer>
  </div>
</template>

<script>
import navTitle from 'components/content/navTitle/navTitle'
import singer from 'components/content/singer/singer'
import { getTopSinger } from 'api/method.js'
export default {
  name: 'recommendSinger',
  components: {
    navTitle,
    singer
  },
  data () {
    return {
      title: '推荐歌手',
      singer: []
    }
  },
  methods: {
    getTopSinger () {
      getTopSinger().then(res => {
        this.singer = res.data.list.artists.slice(0, 30)
      })
    }
  },
  mounted () {
    this.getTopSinger()
  }
}
</script>

<style>
</style>
