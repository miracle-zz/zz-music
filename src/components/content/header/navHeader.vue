<template>
  <div class="header">
    <div class="logo">
      <a href="/">ninemusic</a>
    </div>
    <div class="tab">
      <routerLink tag="div" class="tab-item" to="/home">
        <span class="tab-link">发现音乐</span>
      </routerLink>
      <routerLink tag="div" class="tab-item" to="/rank">
        <span class="tab-link">排行榜</span>
      </routerLink>
      <routerLink tag="div" class="tab-item" to="/album">
        <span class="tab-link">歌单</span>
      </routerLink>
      <routerLink tag="div" class="tab-item" to="/singer">
        <span class="tab-link">歌手</span>
      </routerLink>
      <routerLink tag="div" class="tab-item" to="/mv">
        <span class="tab-link">MV</span>
      </routerLink>
    </div>
    <!-- <div class="search">搜索</div>
    <div class="login">登录</div>-->
  </div>
</template>

<script>
export default {
  name: 'nabHeader'
}
</script>

<style lang="scss">
@import 'assets/scss/config.scss';
.header {
  width: 100%;
  height: 70px;
  display: flex;
  // margin-left: 30px;
  // margin-right: 30px;
  align-items: center;
  background-color: #ffffff;
  // position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  .logo {
    cursor: pointer;
    margin-left: 20px;
    margin-right: 20px;
    font-weight: bold;
    font-size: 24px;
  }
  .tab {
    display: flex;
    align-items: center;
    .tab-item {
      cursor: pointer;
      margin-left: 40px;
      span {
        font-size: 16px;
        padding-bottom: 10px;
      }
      &.router-link-active {
        .tab-link {
          color: $colorA;
          border-bottom: 2px solid $colorA;
        }
      }
    }
  }
}
</style>
