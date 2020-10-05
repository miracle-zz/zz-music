<template>
  <div class="songListItem">
    <div class="left">
      <div class="index">
        <span>{{ utils.formatZero(index + 1, 2) }}</span>
        <i class="iconfont">&#xe60b;</i>
      </div>
      <div class="img">
        <el-image :src="songItem.image" lazy></el-image>
      </div>
      <div class="title">
        <div class="name">{{ songItem.album }}</div>
        <div class="author">{{ songItem.singer }}</div>
      </div>
    </div>
    <div class="center">
      <span>《{{ songItem.name }}》</span>
    </div>
    <div class="right">{{ utils.formatSecondTime(songItem.duration) }}</div>
  </div>
</template>

<script>
export default {
  name: 'songListItem',
  props: {
    songItem: Object,
    index: Number
  }
}
</script>

<style lang="scss">
@import 'assets/scss/config.scss';
.songListItem {
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  height: 100px;
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  color: #333333;
  margin-right: 30px;
  margin-bottom: 30px;
  border-radius: 20px;
  &:hover {
    .left {
      .index {
        span {
          display: none;
        }
        .iconfont {
          display: block;
        }
      }
    }
  }
  // border: 2px solid;
  // border-radius: 25px;
  .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    .index {
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
      .iconfont {
        display: none;
        font-size: 17px;
        color: $colorA;
      }
      // &:hover {
      //   span {
      //     display: none;
      //   }
      //   .iconfont {
      //     display: block;
      //   }
      // }
    }
    .img {
      width: 60px;
      height: 60px;
    }
    .title {
      font-size: 13px;
      width: 100px;
      .name {
        white-space: nowrap;
        overflow: hidden; /* 超出隐藏 */
        text-overflow: ellipsis; /* 超出部分显示省略号 */
        font-weight: bold;
        margin-bottom: 5px;
      }
    }
  }
  .center {
    width: 150px;
    font-weight: bold;
  }
}
</style>
