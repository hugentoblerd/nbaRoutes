var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q){
  
// addNewGame method that takes in game object as parameter and returns promise from POST request
   this.addNewGame = function (gameObj) {
    var url = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;
    // adds won property to object as a boolean
    if (parseInt(gameObj.homeTeamScore) > parseInt(gameObj.opponentScore)) {
      gameObj.won = true;
    }else {
      gameObj.won = false;
    };
    // POST request to Parse.com
    return $http ({
      method: 'POST',
      url: url,
      data: gameObj
    });
  };

  // getTeamData function that takes team parameter and gets data for that team
  this.getTeamData = function (team) {
   // deferred object
    var deferred = $q.defer();
    var url = 'https://api.parse.com/1/classes/' + team;
    // GET request from Parse.com
    $http ({
      method: 'GET',
      url: url
    }).then(function (response) {
      // actual games the team has played
      var results = response.data.results
      var wins = 0;
      var losses = 0;
      // adds to wins and losses variables to give win/loss record
      for (var i = 0; i < results.length; i++) {
        if (results[i].won) {
          ++wins;
        }else {
          ++losses;
        };
      };
      // adds properties to results array so we can use win/loss record outside of this scope
      results.wins = wins;
      results.losses = losses;
      // resolves the deferred object with results array
      deferred.resolve(results);
    });
    // returns the deferred promise object
    return deferred.promise;
  };





});