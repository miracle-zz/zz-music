<template>
  <div class="singerItem">
    <div class="img">
      <el-image :src="singerItem.img1v1Url" lazy></el-image>
    </div>
    <div class="singer">{{singerItem.name}}</div>
    <div class="number">{{singerItem.musicSize}}</div>
  </div>
</template>

<script>
export default {
  name: 'singerItem',
  props: {
    singerItem: Object
  }
}
</script>

<style lang="scss">
@import 'assets/scss/config.scss';
.singerItem {
  width: 100px;
  height: 150px;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 30px;
  .img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border: 1px solid #cccccc;
    overflow: hidden;
  }
  .singer {
    display: inline-block;
    font-weight: bold;
    font-size: 15px;
    margin-top: 5px;
  }
  .number {
    color: $colorA;
    margin-top: 5px;
  }
}
</style>
