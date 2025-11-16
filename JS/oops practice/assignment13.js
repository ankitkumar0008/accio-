// E1: Storage Family
class Storage {
  // TODO: save(data)
  save(data){
    console.log(data);
  }
}
class MemoryStorage extends Storage {
  // TODO: constructor() // internal array
  constructor(){
    super()
    this.datas = [];
  }
  // TODO: save(data)
  save(data){
    this.datas.push(data);
    console.log(this.datas.length);
  }
}
class FileStorage extends Storage {
  // TODO: save(data)
  save(data){
    console.log(`saved to file  ${data}`);
  }
}

// TODO: demo: mixed storages saving "hello"

let storage = new Storage();
storage.save('dsf');
let obj1 = new MemoryStorage();
obj1.save('sdfs');
obj1.save('sdfr');
obj1.save('sdfers');
let obj2 = new FileStorage();
obj2.save('sfs');

