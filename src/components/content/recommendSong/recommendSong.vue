<template>
  <div class="recommendSong">
    <nav-title :title="title"></nav-title>
    <song-list :songList="songList"></song-list>
  </div>
</template>

<script>
import navTitle from 'components/content/navTitle/navTitle'
import songList from 'components/content/songList/songList'

import { getNewSong, getSongDetail } from 'api/method'
import { createSong } from 'model/js/song.js'

export default {
  name: 'recommendSong',
  data () {
    return {
      title: '推荐歌曲',
      songList: []
    }
  },
  components: {
    navTitle,
    songList
  },
  methods: {
    getNewSong () {
      // 获取推荐歌曲的id
      getNewSong().then(res => {
        const list = []
        res.data.result.map(item => {
          list.push(item.id)
        })
        this.songList = this.getSongDetail(list)
      })
    },
    getSongDetail (list) {
      const song = []
      // 获取歌曲详情信息
      list.forEach((item) => {
        getSongDetail(item).then(res => {
          // console.log(createSong(res.data.songs[0]))
          song.push(createSong(res.data.songs[0]))
          // songs.push(res.data.songs[0])
        })
      })
      return song
    },

    // 处理歌曲
    _normalizeSongs (list) {
      const ret = []
      list.map(item => {
        if (item.id) {
          ret.push(createSong(item))
        }
      })
      return ret
    }
  },
  mounted () {
    this.getNewSong()
  }
}
</script>

<style>
</style>
