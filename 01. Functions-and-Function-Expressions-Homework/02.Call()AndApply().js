console.log("•	Using call() without arguments:");
printArgsInfo.call();
console.log("•	Using call() with arguments:");
printArgsInfo.call(Object, [1, 2], ["string", "array"], ["single value"]);
console.log("•	Using apply() without arguments:");
printArgsInfo.apply();
console.log("•	Using apply() with arguments:");
printArgsInfo.apply(Object, ["some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20}]);

function printArgsInfo(elements) {
    var inputArguments = [];
    for (var i = 0; i < arguments.length; i++) {
        var argumentValue = arguments[i];
        var argumentType = Object.prototype.toString.call(arguments[i]).split(' ')[1].toLowerCase().replace(']', '');
        console.log((argumentValue + " (" + (argumentType === "null" ? "object" : argumentType) + ")").trim());
    }
    console.log();
}