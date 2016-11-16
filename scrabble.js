var Scrabble = function() {
  this.LETTER_SCORES = [['a','e','i','o','u','l','n','r','s','t'], ['d','g'], ['b','c','m','p'], ['f','h','v','w','y'], ['k'], [], [], ['j','x'], [], ['q','z']];
};

Scrabble.prototype.score = function(string) {
  var word = string.toLowerCase();
  var wordScore = 0;
  // Loop through each letter of the word
  for (k = 0; k < word.length; k++) {
    // Loop through letter scores
    for (j = 0; j < this.LETTER_SCORES.length; j++) {
      if (this.LETTER_SCORES[j].includes(word[k])) {
        wordScore += (j + 1);
        break;
      }
    }
  }
  // Add bonus points for 7 letter words
  if (word.length == 7) {
    wordScore += 50;
  }
  return wordScore;
};

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  var scores = [];
  for (i = 0; i < arrayOfWords.length; i++) {
    var played_word = arrayOfWords[i];
    var word_score = this.score(arrayOfWords[i]);

    var obj = {
      word: played_word,
      score: word_score
    };

    scores.push(obj);
  }
  // return Math.max(scores);
  return scores;
};

var s = new Scrabble();

console.log(s.highestScoreFrom(["HeLlOs", "hi", "asdfjkl"]));







module.exports = Scrabble;
