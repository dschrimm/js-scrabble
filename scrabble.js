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
  var word_scores = [];
  var scores = [];
  for (i = 0; i < arrayOfWords.length; i++) {
    var played_word = arrayOfWords[i];
    var word_score = this.score(arrayOfWords[i]);

    var obj = {
      word: played_word,
      score: word_score
    };

    word_scores.push(obj);
    scores.push(word_score);
  }

  var max_score = Math.max.apply(null, scores);
  var max_words = [];

  // Collect words with value of high score
  for (i = 0; i < word_scores.length; i++) {
    if (word_scores[i].score == max_score) {
      max_words.push(word_scores[i].word);
    }
  }

  // Return correct word based on length
  var top_word = '';
  var top_word_length = 7;

  for (i = 0; i < max_words.length; i++) {
    if (max_words[i].length == 7) {
      return max_words[i];
    } else if (max_words[i].length < top_word_length) {
      top_word_length = max_words[i].length;
      top_word = max_words[i];
    }
  }

  // Return high score;
  return top_word;
};

// **************PLAYER******************

var Player = function(name) {
  this.name = name;
  this.plays = [];
};

// Adds the input word to the plays array. Returns false if already won.
Player.prototype.play = function(word) {
  if (this.hasWon() === true) {
    return false;
  }

  this.plays.push(word);
};

// Sums up and returns the score of the player words
Player.prototype.totalScore = function() {
  var totalScore = 0;

  for (i = 0; i < this.plays.length; i++) {
    var wordScore = s.score(this.plays[i]);
    totalScore += wordScore;
  }

  return totalScore;

};

// Checks if the player has over 100 points
Player.prototype.hasWon = function() {
  if (this.totalScore() > 100) {
    return true;
  } else {
    return false;
  }
};

// Returns the highest scoring word
Player.prototype.highestScoringWord = function() {
  return s.highestScoreFrom(this.plays);
};

// Returns the highest scoring word score
Player.prototype.highestWordScore = function() {
  return s.score(p.highestScoringWord());
};

var s = new Scrabble();

console.log(s.highestScoreFrom(["HeLlOs", "acadlei", "hi", "zzzzzz"]));

var p = new Player('d');
p.play('hello');
console.log(p.plays);
p.play('goodbye');
console.log(p.plays);
console.log(s.highestScoreFrom(p.plays));
console.log(p.hasWon());
p.play('zzz');
console.log(p.plays);
console.log(p.totalScore());
console.log(p.hasWon());
p.play('hi');
console.log(p.plays);
console.log(p.hasWon());
console.log(p.highestScoringWord());
console.log(p.highestWordScore());


module.exports = Scrabble;
