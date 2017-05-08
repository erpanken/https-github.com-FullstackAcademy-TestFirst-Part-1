function concatString() {
    var args = Array.from(arguments);
    return args.join("");
}

function yourFunctionRunner() {
    var functions = Array.from(arguments);
    var result = "";
    functions.forEach(function(f) {
        result += f();
    });
    return result;
}

function makeAdder(x) {
    return function(y) {
        return x + y;
    };
};

function once(func) {
    func();
    return function() {};
}

var createObjectWithClosures = function() {
    var total = 0;
    return {
        oneIncrementer: function() {
            total += 1;
        },
        tensIncrementer: function() {
            total += 10;
        },
        getValue: function() {
            return total;
        },
        setValue: function(val) {
            total = val;
        }
    };
};

function guestListFns(guestsArray, secretCode) {
    var arr = [];
    for (var i = 0; i < guestsArray.length; i++) {
        arr.push(function(name) {
            return function(password) {
                if (password === secretCode) {
                    return name;
                } else {
                    return "Secret-Code: Invalid";
                }
            }
        }(guestsArray[i]))
    }

    return arr;
}

function generateGuestList(guestFncArray, secretCode) {
    return guestFncArray.map(function(guestListFns) {
        return guestListFns(secretCode);
    });
}