export default class Singer {
  // eslint-disable-next-line
  constructor({ name, briefDesc, albumSize, musicSize, mvSize, img }) {
    this.name = name
    this.briefDesc = briefDesc
    this.albumSize = albumSize
    this.musicSize = musicSize
    this.mvSize = mvSize
    this.img = img
  }
}

export function createSinger (singerData) {
  return new Singer({
    name: singerData.name,
    briefDesc: singerData.briefDesc,
    albumSize: singerData.albumSize,
    musicSize: singerData.musicSize,
    mvSize: singerData.mvSize,
    img: singerData.img1v1Url

  })
}
