var Player = function(name) {
  this.name = name;
  this.plays = [];
};

// Adds the input word to the plays array. Returns false if already won.
Player.prototype.play = function(word) {
  if (this.name.won === true) {
    return false;
  }

  this.plays.push(word);
};

// Sums up and returns the score of the player words
Player.prototype.totalScore = function() {

};

// Checks if the player has over 100 points
Player.prototype.hasWon = function() {

};

// Returns the highest scoring word
Player.prototype.highestScoringWord = function() {

};

// Returns the highest scoring word score
Player.prototype.highestWordScore = function() {

};


new Player('Friend');
