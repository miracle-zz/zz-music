import { request } from './request'

// 获取轮播图数据
export function getSlideList () {
  return request({
    url: '/banner'
  })
}

// 获取推荐歌单
export function getHotPlayList (limit) {
  return request({
    url: '/personalized',
    params: {
      limit: limit
    }
  })
}

// 获取推荐新歌曲
export function getNewSong () {
  return request({
    url: '/personalized/newsong'
  })
}

// 获取排行榜数据
export function getRankList () {
  return request({
    url: '/toplist'
  })
}

// 获取歌单详情
export function getSongList (id) {
  return request({
    url: '/playlist/detail',
    params: {
      id: id
    }
  })
}

// 获取歌曲详情
export function getSongDetail (id) {
  return request({
    url: '/song/detail',
    params: {
      ids: id
    }
  })
}

// 获取热门歌手
export function getTopSinger () {
  return request({
    url: '/toplist/artist',
    params: {
      offset: 0,
      limit: 30
    }
  })
}

// 获取歌手热门50首歌曲
export function getSingerTopSong (id, limit) {
  return request({
    url: '/artist/top/song',
    params: {
      id: id,
      limit: limit
    }
  })
}

// 获取歌手描述
export function getSingerDesc (id) {
  return request({
    url: '/artist/desc',
    params: {
      id: id
    }
  })
}

// 获取歌手详情
export function getSingerDetail (id) {
  return request({
    url: '/artists',
    params: {
      id: id
    }
  })
}

// 获取歌手专辑
export function getSingerAlbum (id) {
  return request({
    url: '/artist/album',
    params: {
      id: id
    }
  })
}
