<template>
  <div class="songList">
    <song-list-item v-for="(item,index) in songList" :key="item.id" :songItem="item" :index="index"></song-list-item>
  </div>
</template>

<script>
import songListItem from 'components/content/songList/songListItem'
export default {
  name: 'songlist',
  props: {
    songList: {
      type: Array
    }
  },
  components: {
    songListItem
  }
}
</script>

<style lang="scss">
.songList {
  display: flex;
  flex-wrap: wrap;
}
</style>
