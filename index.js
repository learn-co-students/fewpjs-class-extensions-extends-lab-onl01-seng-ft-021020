class Polygon {
  constructor(array) {
    this.sides = array
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((total, el) => total += el)
  }
  
}

class Triangle extends Polygon {
  get isValid() {
    let x = this.sides
    return ((x[0]+x[1] > x[2]) && (x[0]+x[2] > x[1]) && (x[2]+x[1] > x[0]))
  }
}

class Square extends Polygon {
  get isValid() {
    return (this.sides.filter((el) => el === this.sides[0]).length === 4)
  }

  get area() {
    return this.sides[0] ** 2
  }
}
