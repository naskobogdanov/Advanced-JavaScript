function add(num){
    var add = num;
    function sum(secondNum){
        add+= secondNum;
        return sum;
    }
    sum.toString = function() {return add};
    return sum;
}

var clog = console.log();

console.log(add(1).toString());
console.log(add(2)(3).toString());
console.log(add(1)(1)(1)(1)(1).toString());
console.log(add(1)(0)(-1)(-1).toString());

var addTwo = add(2);
console.log(addTwo.toString());

var addTwo = add(2);
console.log(addTwo(3).toString());

var addTwo = add(2);
console.log(addTwo(3)(5).toString());

