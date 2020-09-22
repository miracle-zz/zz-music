<template>
  <div class="musicList container">
    <table>
      <tr>
        <th>序号</th>
        <th>歌曲</th>
        <th>歌手</th>
        <th>专辑</th>
        <th>时长</th>
      </tr>
      <tr v-for="(item,index) in songList.slice(0,50)" :key="index">
        <td>
          <span>{{utils.formatZero(index + 1, 2)}}</span>
          <i class="iconfont">&#xe60b;</i>
        </td>
        <td>
          <el-image :src="item.image" lazy class="img"></el-image>
          {{item.name}}
        </td>
        <td>{{item.singer}}</td>
        <td>{{item.album}}</td>
        <td>{{ utils.formatSecondTime(item.duration) }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'musicList',
  props: {
    songList: Array
  }
}
</script>

<style lang="scss">
@import 'assets/scss/config.scss';

.musicList {
  table {
    width: 100%;
    border: none;
    border-collapse: collapse;

    tr {
      height: 50px;
      text-align: left;
      th {
        font-size: 16px;
      }
      td {
        font-size: 13px;
        .iconfont {
          display: none;
          color: $colorA;
        }
        .img {
          width: 30px;
          height: 30px;
          vertical-align: middle;
        }
      }
      &:hover {
        background-color: #f7f7f7;
        td {
          span {
            display: none;
          }
          .iconfont {
            display: block;
          }
        }
      }
      &:nth-child(odd) {
        background-color: #f7f7f7;
      }
    }
  }
}
</style>
