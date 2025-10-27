// E2: Media Playlist
class Media {
  // TODO: constructor(title)
  constructor(title){
    this.title = title;
    
  }
  play(){
    console.log(`play ${this.title}`)
  }
  // TODO: play()
}
class Song extends Media {
    constructor(title){
    super(title);
    
  }
  play(){
    console.log(`play ${this.title}`)
  }
  // TODO: constructor(title)
  // TODO: play()
}
class Video extends Media {
    constructor(title){
    super(title);
    
  }
  play(){
    console.log(`play ${this.title}`)
  }
  // TODO: constructor(title)
  // TODO: play()
}

// TODO: demo: playlist array → loop → play()

let playlist = [ new Media('efsdfd'),new Song('sdfsdf'), new Video('dsasd')];
playlist.forEach((i)=>{
    i.play();
})
