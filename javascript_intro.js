u = require("underscore")

var log = function(x) {
  console.log(x);
};

var myUniq = function(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (newArray.indexOf(array[i]) === -1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};


// log(myUniq([1, 2, 1, 3, 3]));

var twoSum = function(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = (i + 1); j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        return true;
      }
    }
  }
  return false;
};

// log(twoSum([0, 1, 4]))
// log(twoSum([0, 1, 0, 4]))
// log(twoSum([1, 4, 3, -1]))

Array.prototype.myTranspose = function() {
  var length = this.length;
  var width  = this[0].length;
  var newArray = new Array();
  for (var i = 0; i < width; i++) {
    newArray.push([]);
  }

  for (var i = 0; i < length; i++) {
    for (var j = 0; j < width; j++) {
      newArray[j][i] = this[i][j];
    }
  }
  return newArray;
};

var rows = [
    [0, 1, 2],
    [3, 4, 5]
  ];

// log(rows.myTranspose())

Array.prototype.multiples = function(){
  var newArray = [];
  for (var i = 0; i < this.length; i++){
    newArray.push(this[i] * 2);
  }
  return newArray;
};

// var a = [1,2,3,1];
// log(a.multiples());
// log(a);

Array.prototype.myEach = function(func){
  for (var i = 0; i < this.length; i++){
    func(this[i]);
  }
  return this;
};

// [1,2,3].myEach(log).myEach(log)

Array.prototype.inject = function(func, startValue) {
  var sum = (startValue || startValue === 0) ? startValue : this[0];
  var i   = (startValue || startValue === 0) ?          0 : 1;

  for (i; i < this.length; i++) {
    sum = func(sum, this[i]);
  }
  return sum;
};

var add = function (start, value){
  return start + value;
};

// log([2,4,6].inject(add, 5));

Array.prototype.bubbleSort = function() {
  var sorted = false;
  while (!sorted) {
    sorted = true;
    for(var i = 0; i < this.length; i++) {
      if (this[i] > this[i+1]) {
        var temp = this[i];
        this[i] = this[i+1];
        this[i+1] = temp;
        sorted = false;
      }
    }
  }
  return this;
};

//log([4,1,5,6,2].bubbleSort());

var substrings = function(str){
  var arr = [];
  for (var i = 0; i < str.length; i++){
    for (var j = i+1; j <= str.length; j++){
      arr.push(str.slice(i,j));
    }
  }
  return arr;
};

// log(myUniq(substrings("cataz")));

var range = function(start, end){
  if (start === end) {
    return [end];
  } else {
   return [start].concat(range(start+1, end));
  }
};

// log(range(1, 5));

var arraySumRec = function(array) {
  if (array.length === 1) {
    return array[0];
  } else {
    return array[0] + arraySumRec(array.slice(1));
  }
};

// log(arraySumRec([1, 2, 3]));

var exponent1 = function(num, power) {
  if (power === 0) {
    return 1;
  } else {
    return num * exponent1(num, power - 1);
  }
};

//log(exponent1(4,3));

var exponent2 = function(num, power){
  if (power === 0){
    return 1;
  } else if( power % 2 === 0){
      var value = exponent2(num, power/2);
      return value * value;
  } else {
      var value = exponent2(num, (power - 1) / 2);
      return num * (value * value);
  }
};

// log(exponent2(4,4));

var fib = function(n){
  //var array = [1,1]
  if (n===1){
    return [1];
  } else if (n===2){
    return [1, 1];
  } else {
    var val = fib(n-1);
    val = val[val.length - 1] + val[val.length - 2];
    return fib(n-1).concat(val);
  }
};

// log(fib(5));

var bsearch = function(array, target) {
  var middleIndex = Math.floor(array.length/2);
  var middleVal = array[middleIndex];

  if (target === middleVal) {
    return middleIndex;
  } else if (target < middleVal) {
    return bsearch(array.slice(0, middleIndex), target);
  } else {
    var search = bsearch(array.slice(middleIndex, array.length), target);
    return middleIndex + search;
  }
}

// log(bsearch([2,4,7,9,11,14], 9))
// log(bsearch([2,4,7,9,11,14], 2))
// log(bsearch([2,4,7,9,11,14], 7))
// log(bsearch([2,4,7,9,11,14], 14))

var makeChange = function(coins, value){
  if (u(coins).contains(value)) {
    return [value];
  } else {
    var currBest = []
    var allCombos = u(coins).each ( function(coin) {
      if (coin < value) {
        var coin_choice = [coin].concat(makeChange(coins, value - coin));
        currBest = (coin_choice.length < currBest.length ||
          currBest.length === 0) ? coin_choice : currBest
      }
    });
    return currBest
  }
};

// log(makeChange([10, 7, 1], 14));

// var Cat = function(name, owner) {
//   this.name  = name;
//   this.owner = owner;
// }
//
// Cat.prototype.cute_statement = function() {
//   return this.owner + " loves " + this.name
// }
//
// c = new Cat("whiskers", "fred")
// log(c.cute_statement())
//
// d = new Cat("dog", "weirdo")
// log(d.cute_statement())
//
// Cat.prototype.cute_statement = function() {
//   return "everybody loves " + this.name
// }
//
// log(c.cute_statement())
// log(d.cute_statement())
//
// Cat.prototype.meow = function() {
//   log("meow")
// }
//
// c.meow()
// d.meow()
//
// c.meow = function() { log("meow meow") }
//
// c.meow()
// d.meow()

