class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `(${this.x},${this.y})`;
    }

    set prop(val) {
        console.log('setter:' + val);
    }

    get prop() {
        console.log('getter');
    }
}
console.log(Object.keys(Point.prototype)); //[]
let instance = new Point();
instance.prop = 123; // setter:123
instance.prop; // getter
const descriptor = Object.getOwnPropertyDescriptor(Point.prototype, 'prop');
console.log('get' in descriptor);
console.log('set' in descriptor);

class Foo {
    constructor() {
        return Object.create(null);
    }
}

console.log(new Foo() instanceof Foo); // false


class Foo1 {
    static bar() {
      this.baz();
    }
    static baz() {
      console.log('hello');
    }
    baz() {
      console.log('world');
    }
  }
  
Foo1.bar();// hello

class Shape {
    constructor() {
      if (new.target === Shape) {
        throw new Error('本类不能实例化');
      } else {
        console.log('success')
      }
    }
  }
  
  class Rectangle extends Shape {
    constructor(length, width) {
      super();
      // ...
    }
  }
  
//   var x = new Shape();  // 报错
  var y = new Rectangle(3, 4);  // 正确