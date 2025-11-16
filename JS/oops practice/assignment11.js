// D2: FileCompressor
class FileCompressor {
  // TODO: compress(fileName) → orchestrate private steps
  compress(fileName){
    this.#readfile();
    this.#writeArchive();
    this.#pack();
    console.log(`${fileName}.zip`)
  }

  // TODO: #readFile()
  #readfile(){
    console.log('reading file');
  }
  // TODO: #pack()
  #pack(){
    console.log('packing file');
  }
  #writeArchive(){
    console.log('writing archive');
  }
  // TODO: #writeArchive()
}

// TODO: demo: compress("report.pdf")
let compress = new FileCompressor();
compress.compress('zip');
