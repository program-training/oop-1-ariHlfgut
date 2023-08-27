// את הקוד שלכם תכתבו כאן

//  1. Rectangle - מלבן
// class Rectangle {
//   width: number;
//   height: number;
//   constructor(width: number, height: number) {
//     this.width = width;
//     this.height = height;
//   }
//   area(): number {
//     return this.width * this.height;
//   }

// }

//  2. Square - ריבוע
// class Square extends Rectangle {
//   constructor(rib: number) {
//     super(rib, rib);
//   }
// }
// 3. Shape - צורה
class Shape {
  info(): string {
    return "This is a Shape";
  }
}
// 4. Method Chaining
class Rectangle extends Shape {
  width: number;
  height: number;
  factor: number;
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
    this.factor = factor;
  }
  area(): number {
    return this.width * this.height;
  }
  info(): string {
    return "This is a Rectangle";
  }

  scale(factor: number): void {
    this.width = this.width * factor;
    this.height = this.height * factor;
  }
  static newRectangle(rectangle1: Rectangle, rectangle2: Rectangle): Rectangle {
    return new Rectangle(
      rectangle1.width + rectangle2.width,
      rectangle1.height + rectangle2.height
    );
  }
}
class ColoredRectangle extends Rectangle {
  color: string;
  constructor(width: number, height: number, color: string) {
    super(width, height);
    this.color = color;
  }
  info(): string {
    return `This is a ${this.color}`;
  }
}

// 5. Shape with draw method

// // את הקוד שלכם תכתבו כאן

// //  1. Rectangle - מלבן
// class Rectangle {
//     width: number;
//     height: number;
//     constructor(width: number, height: number) {
//       this.width = width;
//       this.height = height;
//     }
//     area(): number {
//       this.km += 10;
//       return;
//     }
//     getCarData(): string {
//       return `A ${this.model} ${this.color} car with ${this.km} kilometers`;
//     }
//   }
//   let car1 = new Car("red", "2020", 1000);
//   car1.drive();
//   car1.getCarData();
//   // A 2020 red car with 1010 kilometers

//   console.log(car1);
