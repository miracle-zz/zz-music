<template>
  <div class="singerDetail">
    <div class="top">
      <div class="introduction">
        <div class="img">
          <img :src="artist.img" alt />
        </div>
        <div class="name">{{ artist.name }}</div>
        <div class="button">
          <el-button round class="el-button">+ 关注TA</el-button>
        </div>
        <div class="description-box">
          <div class="description">{{ artist.briefDesc }}</div>
        </div>
        <div class="info">
          <span>单曲数: {{ artist.musicSize }}</span>
          <span>专辑数: {{ artist.albumSize }}</span>
          <span>MV数: {{ artist.mvSize }}</span>
        </div>
      </div>
      <div class="bottom-trangle"></div>
    </div>
    <div class="bottom container">
      <div class="navHeader">
        <span>作品</span>
        <span>专辑</span>
        <span>MV</span>
        <span>歌手详情</span>
      </div>
      <div class="button-box">
        <el-button round class="button">
          <i class="iconfont">&#xe63a;</i>播放全部
        </el-button>
      </div>
      <div class="content">
        <div class="musicList container">
          <table>
            <tr>
              <th>序号</th>
              <th>歌曲</th>
              <th>歌手</th>
              <th>专辑</th>
              <th>时长</th>
            </tr>
            <tr v-for="(item, index) in songList.slice(0, 50)" :key="index">
              <td>
                <span>{{ utils.formatZero(index + 1, 2) }}</span>
                <i class="iconfont">&#xe60b;</i>
              </td>
              <td>
                <el-image :src="item.image" lazy class="img"></el-image>
                {{ item.name }}
              </td>
              <td>{{ item.singer }}</td>
              <td>{{ item.album }}</td>
              <td>{{ utils.formatSecondTime(item.duration) }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSingerTopSong, getSingerDesc, getSingerAlbum, getSingerDetail } from 'api/method'
import { createSong } from 'model/js/song.js'
import { createSinger } from 'model/js/singer.js'
// import musicList from 'components/content/musicList/musicList'
export default {
  name: 'singerDetail',
  components: {
    // musicList
  },
  data () {
    return {
      artist: {},
      briefDesc: '',
      songList: [],
      albumList: [],
      id: this.$route.params.id,
      limit: 50
    }
  },
  methods: {
    getSingerDesc (id) {
      getSingerDesc(id).then(res => {
        this.briefDesc = res.data.briefDesc
      })
    },
    getSingerTopSong (id, limit) {
      getSingerTopSong(id, limit).then(res => {
        // console.log(res.data.songs)
        // eslint-disable-next-line
        let songs = res.data.songs
        const songList1 = []
        songs.forEach((item) => {
          songList1.push(createSong(item))
        })
        this.songList = songList1
      })
    },
    getSingerAlbum (id) {
      getSingerAlbum(id).then(res => {
        // console.log(res)
      })
    },
    getSingerDetail (id) {
      getSingerDetail(id).then(res => {
        this.artist = createSinger(res.data.artist)
        console.log(res.data.artist)
      })
    },
    _initData (id, limit) {
      this.getSingerDesc(id)
      this.getSingerTopSong(id, limit)
      this.getSingerAlbum(id)
      this.getSingerDetail(id)
    }
  },
  watch: {
    watch: {
      $route: {
        handler (val, oldval) {
          const id = this.$route.params.id
          if (id) {
            this.getSingerDesc(this.$route.params.id)
            this.getSingerTopSong(this.$route.params.id, this.limit)
            this.getSingerAlbum(this.$route.params.id)
            this.getSingerDetail(this.$route.params.id)
          }
        },
        // 深度观察监听
        deep: true
      }

    }
  },
  activated () {
    this.getSingerDesc(this.$route.params.id)
    this.getSingerTopSong(this.$route.params.id, this.limit)
    this.getSingerAlbum(this.$route.params.id)
    this.getSingerDetail(this.$route.params.id)
  }
}
</script>

<style lang="scss">
@import 'assets/scss/config.scss';
.singerDetail {
  background-color: #ffffff;
  .top {
    position: relative;
    .introduction {
      text-align: center;
      width: 100%;
      height: 580px;
      background: url(../../../assets/image/top-bg.jpg);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      .img {
        display: inline-block;
        width: 120px;
        height: 120px;
        border-radius: 60px;
        overflow: hidden;
        margin-top: 100px;
        margin-bottom: 20px;
        img {
          width: 120px;
          height: 120px;
        }
      }
      .name {
        font-size: 20px;
        font-weight: 600;
        color: #ffffff;
      }
      .button {
        margin-top: 10px;
        .el-button {
          background-color: rgba(201, 195, 195, 0.2);
          color: #ffffff;
        }
      }
      .description-box {
        margin-top: 40px;
        display: inline-block;
        width: 600px;
        margin-bottom: 30px;
        .description {
          font-weight: bold;
          font-size: 15px;
          color: #ffffff;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
      .info {
        span {
          margin: 0 30px;
          font-size: 20px;
          font-weight: 500;
          color: #ffffff;
        }
      }
    }
    .bottom-trangle {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 137px;
      background: url(../../../assets/image/arrow-lr.png);
      background-position: center;
      z-index: 1;
    }
  }
  .bottom {
    .navHeader {
      text-align: center;
      span {
        margin: 0 20px;
        font-size: 14px;
        font-weight: bold;
      }
    }
    .button-box {
      float: right;
      font-size: 16px;
      margin-top: 30px;
      margin-bottom: 10px;
      .button {
        background-color: $colorA;
        color: #ffffff;
      }
    }
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
  }
}
</style>
