var Scrabble = function() {
  this._letterScores = [['a','e','i','o','u','l','n','r','s','t'], ['d','g'], ['b','c','m','p'], ['f','h','v','w','y'], ['k'], [], [], ['j','x'], [], ['q','z']];
};

Scrabble.prototype.score = function(string) {
  var word = string.toLowerCase();
  var wordScore = 0;

  for (i = 0; i < word.length; i++) {
    for (j = 0; j < this._letterScores.length; j++) {
      if (this._letterScores[j].includes(word[i])) {
        wordScore += (j + 1);
        break;
      }
    }
  }
  return wordScore;
};

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {

};

var s = new Scrabble();

console.log(s.score("HeLlO"));







module.exports = Scrabble;
