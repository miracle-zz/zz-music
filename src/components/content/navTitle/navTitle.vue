<template>
  <div class="navTitle">
    <h2 class="title">{{title}}</h2>
  </div>
</template>

<script >

export default {
  name: 'navTitle',
  props: {
    title: String
  }
}
</script>

<style lang="scss" >
@import 'assets/scss/config.scss';
.navTitle {
  h2 {
    margin: 0 0 15px 0;
    padding-left: 15px;
    font-size: 16px;
    border-left: 3px solid $colorA;
  }
}
</style>
