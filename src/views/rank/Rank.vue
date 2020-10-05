<template>
  <div class="rank container">
    <nav-title :title="title1"></nav-title>
    <song-sheet :sheetList="rankList.slice(0, 4)"></song-sheet>
    <nav-title :title="title2"></nav-title>
    <song-sheet :sheetList="rankList.slice(4)"></song-sheet>
  </div>
</template>

<script>
import navTitle from 'components/content/navTitle/navTitle'
import songSheet from 'components/content/songSheet/songSheet'
import { getRankList } from 'api/method.js'
export default {
  name: 'rank',
  data () {
    return {
      title1: '云音乐特殊榜',
      title2: '全球媒体榜',
      rankList: []
    }
  },
  components: {
    navTitle,
    songSheet
  },
  methods: {
    _getRankList () {
      getRankList().then(res => {
        this.rankList = res.data.list
      })
    }
  },
  mounted () {
    this._getRankList()
  }
}
</script>

<style lang="scss">
.rank {
}
</style>
