class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  
  get countSides() {
    return this.sides.length;
  }
  
  get perimeter() {
    const sum = (total, side) => {return total + side};
    return this.sides.reduce(sum);
  }
}

class Triangle extends Polygon {
  get isValid() {
    const [side1, side2, side3] = this.sides;
    return side1 < side2 + side3 && side2 < side3 + side1 && side3 < side1 + side2 ? true : false;
  }
}

class Square extends Polygon {
  get isValid() {
    const [side1, side2, side3, side4] = this.sides;
    return side1 === side2 && side1 === side3 && side1 === side4 ? true : false;
  }
  get area() {
    const side = this.sides[0];
    return side ** 2;
  }
}

