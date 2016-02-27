function testContext() {
    console.log(this);
}

console.log('From the global scope:');
testContext();
console.log();

console.log('As an object:');
var obj = new testContext();
console.log();

function anotherFunction() {
    testContext();
}

console.log('Within another function:');
anotherFunction();
console.log();