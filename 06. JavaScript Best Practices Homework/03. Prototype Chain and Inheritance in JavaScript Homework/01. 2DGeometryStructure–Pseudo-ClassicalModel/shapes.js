if (!Object.prototype.extends) {
    Object.prototype.extends = function (parent) {
        this.prototype = Object.create(parent.prototype);
        this.prototype.constructor = this;
    }
}

if (!Object.create) {
    Object.create = function (proto) {
        function F() {}
        F.prototype = proto;
        return new F();
    };
}

var Shape = (function() {
    function Shape (color) {
        this._color = color || 'No color';
    }

    Shape.prototype.toString = function() {
        return 'Shape: ' + this.constructor.name + ' - Color: ' + this._color;
    };


    return Shape;
})();

var Circle = (function() {
    function Circle(centerPoint, radius, color) {
        Shape.call(this, color);

        this._centerPoint = centerPoint;
        this._radius = radius;
        return this;
    }
    Circle.extends(Shape);

    Circle.prototype.toString = function() {
        return Shape.prototype.toString.call(this)
            + '; Center: (' + this._centerPoint
            + '); Radius: ' + this._radius
            + ';';
    };

    return Circle;
})();

var Rectangle  = (function() {
    function Rectangle(topLeftCorner, width, height, color) {
        Shape.call(this, color);

        this._topLeftCorner = topLeftCorner;
        this._width = width;
        this._height = height;
        return this;
    }
    Rectangle.extends(Shape);

    Rectangle.prototype.toString = function() {
        return Shape.prototype.toString.call(this)
            + '; Top left: (' + this._topLeftCorner
            + '); Width: ' + this._width
            + '; Height: ' + this._height
            + ';';
    };

    return Rectangle;
})();

var Triangle  = (function() {
    function Triangle(a, b, c, color) {
        Shape.call(this, color);

        this._a = a;
        this._b = b;
        this._c = c;
        return this;
    }
    Triangle.extends(Shape);

    Triangle.prototype.toString = function() {
        return Shape.prototype.toString.call(this)
            + '; A: (' + this._a
            + '); B: (' + this._b
            + '); C: (' + this._c
            + ');';
    };

    return Triangle;
})();

var Line  = (function() {
    function Line(a, b, color) {
        Shape.call(this, color);

        this._a = a;
        this._b = b;
        return this;
    }
    Line.extends(Shape);

    Line.prototype.toString = function() {
        return Shape.prototype.toString.call(this)
            + '; A: (' + this._a
            + '); B: (' + this._b
            + ');';
    };

    return Line;
})();

var Segment   = (function() {
    function Segment(a, b, color) {
        Shape.call(this, color);

        this._a = a;
        this._b = b;
        return this;
    }
    Segment.extends(Shape);

    Segment.prototype.toString = function() {
        return Shape.prototype.toString.call(this)
            + '; A: (' + this._a
            + '); B: (' + this._b
            + ');';
    };

    return Segment;
})();

var redCircle = new Circle([2, 4] , 5,'#ff0000'),
    blueRectangle = new Rectangle([0, 0], 10, 20, '#0066ff'),
    greenTriangle = new Triangle([1, 1],[2, 2],[3, 3], '#00ff55'),
    yellowLine = new Line([3, 3], [4, 4], '#ffff00'),
    purpleSegment = new Segment([5, 5], [0, 0], '#cc0099');

console.log(redCircle.toString());
console.log(blueRectangle.toString());
console.log(greenTriangle.toString());
console.log(yellowLine.toString());
console.log(purpleSegment.toString());