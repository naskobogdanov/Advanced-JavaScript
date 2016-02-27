printArgsInfo(2, 3, 2.5, -110.5564, false);

printArgsInfo(null, undefined, "", 0, [], {});
// Note that [].toString() returns ""

printArgsInfo([1, 2], ["string", "array"], ["single value"]);

printArgsInfo("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20});

printArgsInfo([[1, [2, [3, [4, 5]]]], ["string", "array"]]);

function printArgsInfo(elements) {
    var inputArguments = [];
    for (var i = 0; i < arguments.length; i++) {
        var argumentValue = arguments[i];
        var argumentType = Object.prototype.toString.call(arguments[i]).split(' ')[1].toLowerCase().replace(']', '');
        console.log((argumentValue + " (" + (argumentType === "null" ? "object" : argumentType) + ")").trim());
    }
    console.log();
}