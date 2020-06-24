var nameCandidate1 = "Sandy Olsson";
var nameCandidate2 = "Betty Rizzo";
var winner;

//declaring the candidates
var makeCandidate = function(name, color) {
  var candidate = {};
  candidate.electionResults = null;
  candidate.totalVotes = 0;
  candidate.name = name;
  candidate.color = color;

  candidate.announce = function() {
    console.log(this.name + " is running for office and her states' color is " + this.color);

  };
  candidate.announce();

  candidate.tallyResults = function() {
    for (var i = 0; i < candidate.electionResults.length; i++) {
      candidate.totalVotes = candidate.totalVotes + candidate.electionResults[i]
    }
  };

  return candidate;

};

candidate1 = makeCandidate(nameCandidate1, [132, 17, 11]);
candidate2 = makeCandidate(nameCandidate2, [245, 141, 136]);

//election results
candidate1.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

candidate2.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

//updating vote count
candidate1.electionResults[9] = 1;
candidate2.electionResults[9] = 28;

candidate1.electionResults[4] = 17;
candidate2.electionResults[4] = 38;

candidate1.electionResults[43] = 11;
candidate2.electionResults[43] = 27;

console.log(nameCandidate1 + "'s election results: " + candidate1.electionResults);
console.log(nameCandidate2 + "'s election results: " + candidate2.electionResults);

//determine winner by state
var setStateResults = function(state) {
  if (candidate1.electionResults[state] > candidate2.electionResults[state]) {
    theStates[state].winner = candidate1
  } else if (candidate1.electionResults[state] < candidate2.electionResults[state]) {
    theStates[state].winner = candidate2
  }

//change state color for winner
  var stateWinner = theStates[state].winner;
  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.color;
  } else {
    theStates[state].rgbColor = [11, 32, 57]
  }

  var stateInfoTable = document.getElementById('stateResults');
  var header = stateInfoTable.children[0].children[0];
  var stateName = header.children[0];
  var stateAbbrev = header.children[1];
  var row1 = stateInfoTable.children[1].children[0];
  var row2 = stateInfoTable.children[1].children[1];
  var row3 = stateInfoTable.children[1].children[2];
  stateName.innerText = theStates[state].nameFull;
  stateAbbrev.innerText = theStates[state].nameAbbrev;
  row1.children[0].innerText = nameCandidate1;
  row1.children[1].innerText = candidate1.electionResults[state];
  row2.children[0].innerText = nameCandidate2;
  row2.children[1].innerText = candidate2.electionResults[state];
  if (stateWinner !== null) {
    row3.children[1].innerText = stateWinner.name;
  } else {
    row3.children[1].innerText = "DRAW";
  }
};

//announcing total votes
candidate1.tallyResults();
candidate2.tallyResults();
console.log(nameCandidate1 + "'s total votes: " + candidate1.totalVotes);
console.log(nameCandidate2 + "'s total votes: " + candidate2.totalVotes);

//announcing the winner
if (candidate1.totalVotes > candidate2.totalVotes) {
  winner = nameCandidate1;
} else if (candidate1.totalVotes < candidate2.totalVotes) {
  winner = nameCandidate2;
} else {
  winner = "cannot be determined";
}
console.log("The winner is... " + winner + "!");

//filling in top country results table
var countryResultsTable = document.getElementById("countryResults");
var row = countryResultsTable.children[0].children[0];
row.children[0].innerText = nameCandidate1;
row.children[1].innerText = candidate1.totalVotes;
row.children[2].innerText = nameCandidate2;
row.children[3].innerText = candidate2.totalVotes;
row.children[5].innerText = winner;
