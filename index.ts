// את הקוד שלכם תכתבו כאן

//  1. Rectangle - מלבן
class Rectangle {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  area(): number {
    return this.width * this.height;
  }
}

//  2. Square - ריבוע
class Square extends Rectangle {
  constructor(rib: number) {
    super(rib, rib);
  }
}

// 4. Method Chaining

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
