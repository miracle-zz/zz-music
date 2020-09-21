<template>
  <div class="recommend-album">
    <nav-title :title="title"></nav-title>
    <!-- <h2 class="title">推荐歌单</h2> -->
    <song-sheet :sheetList="hotPlayList"></song-sheet>
  </div>
</template>

<script>
import songSheet from 'components/content/songSheet/songSheet'
import navTitle from 'components/content/navTitle/navTitle'

import { getHotPlayList } from 'api/method'
export default {
  name: 'recommend-album',
  components: {
    songSheet,
    navTitle
  },
  data () {
    return {
      hotPlayList: [],
      limit: 24,
      title: '推荐歌单'
    }
  },
  methods: {
    getHotPlayList (limit) {
      getHotPlayList(limit).then(res => {
        console.log(res)
        this.hotPlayList = res.data.result
      })
    }
  },
  mounted () {
    this.getHotPlayList(this.limit)
  }
}
</script>

<style lang="scss">
.recommend-album {
  margin-top: 40px;
  h2 {
    margin: 0 0 15px 0;
    font-size: 16px;
  }
}
</style>
