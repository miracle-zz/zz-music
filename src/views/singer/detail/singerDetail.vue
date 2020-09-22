<template>
  <div class="singerDetail">
    <div class="top">
      <div class="introduction">
        <div class="img">
          <img :src="artist.img" alt />
        </div>
        <div class="name">{{artist.name}}</div>
        <div class="button">
          <el-button round class="el-button">+ 关注TA</el-button>
        </div>
        <div class="description-box">
          <div class="description">{{artist.briefDesc}}</div>
        </div>
        <div class="info">
          <span>单曲数: {{artist.musicSize}}</span>
          <span>专辑数: {{artist.albumSize}}</span>
          <span>MV数: {{artist.mvSize}}</span>
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
        <music-list :songList="songList"></music-list>
      </div>
    </div>
  </div>
</template>

<script>
import { getSingerTopSong, getSingerDesc, getSingerAlbum, getSingerDetail } from 'api/method'
import { createSong } from 'model/js/song.js'
import { createSinger } from 'model/js/singer.js'
import musicList from 'components/content/musicList/musicList'
export default {
  name: 'singerDetail',
  components: {
    musicList
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
        const songs = res.data.songs
        songs.forEach((item) => {
          this.songList.push(createSong(item))
        })
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
      // 监听相同路由下参数变化的时候，从而实现异步刷新
      '$route' (to, from) {
        // 做一些路由变化的响应
        // 打开加载动画
        // this.loading = true;
        // 重新获取数据
        // this.initData();
        /** 初始化其他数据 */
        const id = this.$route.params.id
        if (id) {
          this.getSingerDesc(id)
          this.getSingerTopSong(id, this.limit)
          this.getSingerAlbum(id)
          this.getSingerDetail(id)
        }
      }
    }
    // 使用了keep-alive数据会被缓存，所以使用activated钩子函数
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
  }
}
</style>
