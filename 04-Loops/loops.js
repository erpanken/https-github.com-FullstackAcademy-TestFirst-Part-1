function repeat(str, num) {
    var newstr = "";
    for (var i = 0; i < num; i++) {
        newstr += str;
    }
    return newstr;
}

function sum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function join(arr, param) {
    var join = "";
    if (param === undefined) param = "";
    for (var i = 0; i < arr.length; i++) {
        if (join !== "") join += param;
        join += arr[i];
    }
    return join;
}

function gridGenerator(size) {
    var str = "";
    for (var i = 1; i <= size; i++) {
        for (var j = 1; j <= size; j++) {
            str += (i + j) % 2 === 0 ? "#" : " ";
        }
        str += "\n";
    }
    return str;
}

function paramify(obj) {
    var newobj = "";
    var keys = [];
    for (var prop in obj) {
        keys.push(prop);

    }
    keys.sort();
    for (var i = 0; i < keys.length; i++) {
        var prop = keys[i];
        if (!obj.hasOwnProperty(prop)) continue;
        if (newobj !== "") newobj += "&";
        newobj += prop + "=" + obj[prop];
    }
    return newobj;
}

function paramifyObjectKeys(obj) {
    var newobj = "";
    var keys = Object.keys(obj);
    keys.sort();
    for (var i = 0; i < keys.length; i++) {
        var prop = keys[i];
        if (newobj !== "") newobj += "&";
        newobj += prop + "=" + obj[prop];
    }
    return newobj;
}

function renameFiles(arr) {
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        var file = arr[i];
        var newname = file;
        var counter = 1;
        while (newarr.indexOf(newname) !== -1) {
            newname = file + "(" + counter + ")";
            counter++;
        }
        newarr.push(newname);
    }
    return newarr;
}