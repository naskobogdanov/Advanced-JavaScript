if (!Object.create) {
    Object.create = function(proto) {
        function F() {}
        F.prototype = proto;
        return new F();
    };
}

var Shape = {
    init: function init(color) {
        this._color = color;
        return this;
    },

    toString: function toString() {
        return 'Shape: ' + this._name + ' - Color: ' + this._color;
    }
};

var Circle = Object.create(Shape);
Circle.init = function (centerPoint, radius, color) {
    Shape.init.call(this, color);
    this._name = "Circle";
    this._centerPoint = centerPoint;
    this._radius = radius;

};
Circle.toString = function () {
    return Shape.toString.call(this)
        + '; Center: (' + this._centerPoint
        + '); Radius: ' + this._radius
        + ';';
};

var Rectangle = Object.create(Shape);
Rectangle.init = function (topLeftCorner, width, height, color) {
    Shape.init.call(this, color);
    this._name = "Rectangle";
    this._topLeftCorner = topLeftCorner;
    this._width = width;
    this._height = height;
};
Rectangle.toString = function () {
    return Shape.toString.call(this)
        + '; Top left: (' + this._topLeftCorner
        + '); Width: ' + this._width
        + '; Height: ' + this._height
        + ';';
};

var Triangle = Object.create(Shape);
Triangle.init = function (a, b, c, color) {
    Shape.init.call(this, color);
    this._name = "Triangle";
    this._a = a;
    this._b = b;
    this._c = c;
};
Triangle.toString = function () {
    return Shape.toString.call(this)
        + '; A: (' + this._a
        + '); B: (' + this._b
        + '); C: (' + this._c
        + ');';
};

var Line = Object.create(Shape);
Line.init = function (a, b, color) {
    Shape.init.call(this, color);
    this._name = "Line";
    this._a = a;
    this._b = b;
};
Line.toString = function () {
    return Shape.toString.call(this)
        + '; A: (' + this._a
        + '); B: (' + this._b
        + ');';
};

var Segment = Object.create(Shape);
Segment.init = function (a, b, color) {
    Shape.init.call(this, color);
    this._name = "Segment";
    this._a = a;
    this._b = b;
};
Segment.toString = function () {
    return Shape.toString.call(this)
        + '; A: (' + this._a
        + '); B: (' + this._b
        + ');';
};

var redCircle = Object.create(Circle);
redCircle.init([2, 4] , 5,"#ff0000");

var blueRectangle = Object.create(Rectangle);
blueRectangle.init([0, 0], 10, 20, "#0066ff");

var greenTriangle = Object.create(Triangle);
greenTriangle.init([1, 1],[2, 2],[3, 3], "#00ff55");

var yellowLine = Object.create(Line);
yellowLine.init([3, 3], [4, 4], "#ffff00");

var purpleSegment = Object.create(Segment);
purpleSegment.init([5, 5], [0, 0], "#cc0099");

console.log(redCircle.toString());
console.log(blueRectangle.toString());
console.log(greenTriangle.toString());
console.log(yellowLine.toString());
console.log(purpleSegment.toString());