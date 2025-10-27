// B3: Content → Article/Video
class Content {
  // TODO: constructor(title)
  constructor(title){
    this.title = title;
  }

  // TODO: details()
  details(){
    console.log(`the title is ${this.title}`);
  }
}

class Article extends Content {
  // TODO: constructor(title, wordCount)
  constructor(title,wordCount){
    super(title);
    this.wordCount = wordCount;
  }
  // TODO: details() // override
  details(){
    super.details();
    console.log(`word count : ${this.wordCount}`);
  }
}

class Video extends Content {
  // TODO: constructor(title, durationSec)
  constructor(title,durationSec){
    super(title);
    this.durationSec = durationSec;
  }
  details(){
    super.details();
    console.log(`duration : ${this.durationSec} minutes`);
  }
  // TODO: details() // override
}

// TODO: demo list of mixed contents

let article = new Article('best phone',123);
article.details();

let video = new Video('best headphone',3);
video.details();

