class Square {
  constructor (height, width) {
    this.name = 'Square create by Mario from Angola';
    this.height = height;
    this.width = width;
  };

  area() {
    console.log('the area of ', this.name, ' is ', this.height * this.width);
  };

  static sayMyName(square) {
    console.log(square.name);
  }
};

const square = new Square(12, 4);

square.area();
//square.sayMyName(); // Error
Square.sayMyName(square);
