const hello = () => 'Hi!';

class Block {
  constructor(private data: string) {
    this.data = 'Initial Data';
  }

  printData() {
    console.log(this.data);
  }
}

const b = new Block('data');

b.printData();
