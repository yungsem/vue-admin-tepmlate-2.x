export default class Song {
  constructor ({songid, songmid, songname, singername, albumname, interval, albumimage, playurl}) {
    this.songid = songid
    this.songmid = songmid
    this.songname = songname
    this.singername = singername
    this.albumname = albumname
    this.interval = interval
    this.albumimage = albumimage
    this.playurl = playurl
  }
}

export function createSong (musicData) {
  return new Song({
    songid: musicData.songid,
    songmid: musicData.songmid,
    songname: musicData.songname,    
    singername: getSingerName(musicData.singer),
    albumname: musicData.albumname,
    interval: musicData.interval,
    albumimage: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    playurl: `http://dl.stream.qqmusic.qq.com/${musicData.songid}.m4a?fromtag=46`
  })
}

export function getSingerName (singers) {
  let ret = []
  if (!singers) {
    return ''
  }
  singers.forEach((s) => {
    ret.push(s.name)
  })
  return ret.join('/')
}