function flatten () {
    var result = [];
    function arrIndex (arr) {
        for (var i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                arrIndex(arr[i]);
            }
            else {
                result.push(arr[i]);
            }
        }
    }
    arrIndex(this);
    return result
}

//I just played here trying to make it look (just look) like an array without recursion.
//Almost worked :)
//function flatten() {
//    return "[ " + array.toString().replace(/,/g, ', ') + " ]";
//}

Array.prototype.flatten = flatten;
var array = [1, 2, 3, 4];
console.log(array.flatten());
console.log(array);

var array = [1, 2, [3, 4], [5, 6]];
console.log(array.flatten());
console.log(array); // Not changed

var array = [0, ["string", "values"], 5.5, [[1, 2, true], [3, 4, false]], 10];
console.log(array.flatten());

