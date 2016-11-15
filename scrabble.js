var Scrabble = function() {
  this._onePoint = ['a','e','i','o','u','l','n','r','s','t'];
  this._twoPoints = ['d','g'];
  this._threePoints = ['b','c','m','p'];
  this._fourPoints = ['f','h','v','w','y'];
  this._fivePoints = ['k'];
  this._eightPoints = ['j','x'];
  this._tenPoints = ['q','z'];
};

Scrabble.prototype.score = function(word) {
  
};

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {

};


// YOUR CODE HERE
Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

module.exports = Scrabble;

// var s = new Scrabble();
// console.log(s.helloWorld());
