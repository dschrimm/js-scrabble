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

var s = new Scrabble();

console.log(s.highestScoreFrom(["HeLlOs", "acadlei", "hi", "zzzzzz"]));







module.exports = Scrabble;
