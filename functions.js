//1
function concat(a,b) {
    console.log(a+b);
    return a + b;
}

//2
function repeatPhrase(phrase, n) {
    for (var i = 0; i < n; i++) {
        console.log(phrase);
    }
    return phrase;
}

//3
function nPower(num,pow) {
    var ans = 1
    for (var i = 0; i < pow; i++) {
         ans *= num;
    }
    return ans;
}

//4
function areaCircle(radius) {
  return Math.PI * (radius*radius)
}

//5
function pythag(a,b) {
    return (a*a) + (b*b)
}

//6
function isXbyY(x,y) {
    return (x%y === 0);
}

//7
function vowelCount(word) {
    var count = 0;
    for (var i = 0; i < word.length; i++) {
        var letter = word[i];
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' || letter === 'y') {
            count++;
        }
    }
    return count;
}

//8
function wdi(arr) {
    arr.forEach(function(el) {
        if (el === "wdi") {
            return true;
        }
    });
    return false;
}

//9
function longestWord(str) {
    var splitStr = str.split(' ');
    var longest = splitStr[0];
    for (var i = 1; i < splitStr.length; i++) {
        if (longest.length < splitStr[i].length) {
            longest = splitStr[i];
        }
    }
    return longest;
}

//10
function printTriangle(length) {
    for (var i  = 1; i <= length; i++) {
        console.log("*".repeat(i));
    }
}

//11


//12
function printTriangle(length) {
    while (length > 0) {
        console.log(" ".repeat(length) + "*");
        length--;
    }
}
