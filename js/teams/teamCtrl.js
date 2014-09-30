var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamService, teamData){

  // makes teamData data now accessible in the view
  $scope.teamData = teamData;

  // for adding new games - addNewGame
  $scope.newGame = {};

  // initially hides the add new game form
  $scope.showNewGameForm = false;

  // toggle the new game form
  $scope.toggleNewGameForm = function () {
    $scope.showNewGameForm = !$scope.showNewGameForm;
  };

  // add properties to scope based on the url
  switch ($routeParams.team) {
    case 'losangeleslakers':
    $scope.homeTeam = 'Los Angeles Lakers';
    $scope.logoPath = 'images/lakers-logo.png';
    break;
    case 'miamiheat': 
    $scope.homeTeam = 'Miami Heat';
    $scope.logoPath = 'images/heat-logo.png';
    break;
    case 'utahjazz': 
    $scope.homeTeam = 'Utah Jazz';
    $scope.logoPath = 'images/jazz-logo.png';
    break;
  };

  // gives newGame object a property of home team and sets it equal to stripped down hometown property(it's a string variable)
  $scope.submitGame = function () {
    $scope.newGame.homeTeam = $scope.homeTeam.split(' ').join('').toLowerCase();
    // adds new game created by the form to the Parse db
    teamService.addNewGame($scope.newGame)
      // returns new data from the Parse db
      .then(function () {
        teamService.getTeamData($scope.newGame.homeTeam)
          .then(function (data) {
            $scope.teamData = data;
            $scope.newGame = {};
            $scope.showNewGameForm = false;
          });
      });
  };








});