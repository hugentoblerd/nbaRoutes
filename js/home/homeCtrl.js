var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function($scope, homeService, teamDataLA, teamDataMiami, teamDataUtah){

  // array to ngRepeat and loop through the 3 teams
  $scope.loopNum = [0, 1, 2]

  // home object with data about each team as key, value pairs(could have just used 3 different, individual arrays)
  $scope.home = {
    teams: ['losangeleslakers', 'miamiheat', 'utahjazz'],
    homeTeam: ['Los Angeles Lakers', 'Miami Heat', 'Utah Jazz'],
    logoPath: ['images/lakers-logo.png', 'images/heat-logo.png', 'images/jazz-logo.png']
  };

    // pushes data from server into teamData array
  $scope.teamData = [];
  $scope.teamData.push(teamDataLA);
  $scope.teamData.push(teamDataMiami);
  $scope.teamData.push(teamDataUtah);





});