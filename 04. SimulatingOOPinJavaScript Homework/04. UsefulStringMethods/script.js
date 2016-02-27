function startsWith (input) {
    if (this.substring(0, input.length) === input) {
        return true;
    }
    else {
        return false;
    }
}

function endsWith (input) {
    if (this.substring(this.length - input.length, this.length) === input) {
        return true
    }
    else {
        return false
    }
}

function left (count) {
    if (this.length >= count) {
        return this.substring(0, count);
    }
    else {
        return this.toString();
    }
}

function right (count) {
    if (this.length >= count) {
        return this.substring(this.length - count, this.length);
    }
    else {
        return this.toString();
    }
}

function padLeft (count, character) {
    var output = '';
    if (character === undefined) {
        character = ' ';
    }
    for (var i = 0; i < count; i++) {
        output += character;
    }
    return output + this;
}

function padRight (count, character) {
    var output = '';
    if (character === undefined) {
        character = ' ';
    }
    for (var i = 0; i < count; i++) {
        output += character;
    }
    return this + output;
}

function repeat (count) {
    var output = '';
    for (var i = 0; i < count; i++) {
        output += this;
    }
    return output;
}

String.prototype.startsWith = startsWith;
String.prototype.endsWith = endsWith;
String.prototype.left = left;
String.prototype.right = right;
String.prototype.padLeft = padLeft;
String.prototype.padRight = padRight;
String.prototype.repeat = repeat;



var example = "This is an example string used only for demonstration purposes.";
console.log(example.startsWith("This"));
console.log(example.startsWith("this"));
console.log(example.startsWith("other"));
console.log();

var example = "This is an example string used only for demonstration purposes.";
console.log(example.endsWith("poses."));
console.log(example.endsWith ("example"));
console.log(example.startsWith("something else"));
console.log();

var example = "This is an example string used only for demonstration purposes.";
console.log(example.left(9));
console.log(example.left(90));
console.log();

var example = "This is an example string used only for demonstration purposes.";
console.log(example.right(9));
console.log(example.right(90));
console.log();

// Combinations must also work
var example = "abcdefgh";
console.log(example.left(5).right(2));
console.log();

var hello = "hello";
console.log(hello.padLeft(5));
console.log(hello.padLeft(10));
console.log(hello.padLeft(5, "."));
console.log(hello.padLeft(10, "."));
console.log(hello.padLeft(2, "."));
console.log();

var hello = "hello";
console.log(hello.padRight(5));
console.log(hello.padRight(10));
console.log(hello.padRight(5, "."));
console.log(hello.padRight(10, "."));
console.log(hello.padRight(2, "."));
console.log();

var character = "*";
console.log(character.repeat(5));
// Alternative syntax
console.log("~".repeat(3));
console.log();

// Another combination
console.log("*".repeat(5).padLeft(10, "-").padRight(15, "+"));

