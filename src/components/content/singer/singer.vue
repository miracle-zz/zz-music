<template>
  <div class="singer">
    <singer-item v-for="item in singer" :key="item.id" :singerItem="item"></singer-item>
  </div>
</template>

<script>
import singerItem from 'components/content/singer/singerItem'
export default {
  name: 'singer',
  props: {
    singer: Array
  },
  components: {
    singerItem
  }
}
</script>

<style lang="scss">
.singer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
