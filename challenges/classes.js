// 1. Copy and paste your prototype in here and refactor into class syntax.


class CuboidMakerv2 {
    constructor(props) {
    this.length = props.length;
    this.width = props.width;
    this.height = props.height;
    }
    volume() {
        return `${this.length}` * `${this.width}` * `${this.height}`;
      }  
    surfaceArea() {
        return 2 * (`${this.length}` * `${this.width}` + `${this.length}` * `${this.height}` + `${this.width}` * `${this.height}`);
      }
}

const cuboidNew = new CuboidMakerv2({
    length: 4,
    width: 5,
    height: 5
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidNew.volume()); // 100
console.log(cuboidNew.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerv2 {
    constructor(cube) {
    super(cube);
  }
  cubeVolume() {
    return `${this.length}` * `${this.length}` * `${this.length}`;
  }  
  cubeSurfaceArea(){
    return 6 * (`${this.height}`^2);
  }
}

const cubie = new CubeMaker({
    length: 4,
    width: 5,
    height: 5
  });

console.log(cubie.cubeVolume())
console.log(cubie.cubeSurfaceArea());