var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function($scope, homeService, teamDataLA, teamDataMiami, teamDataUtah){

  // makes teamData data now accessible in the view
  // $scope.teamData = teamData;

  // 
  $scope.loopNum = [0, 1, 2]

  // 
  $scope.home = {
    teams: ['losangeleslakers', 'miamiheat', 'utahjazz'],
    homeTeam: ['Los Angeles Lakers', 'Miami Heat', 'Utah Jazz'],
    logoPath: ['images/lakers-logo.png', 'images/heat-logo.png', 'images/jazz-logo.png']
  };

    // 
  $scope.teamData = [];
  $scope.teamData.push(teamDataLA);
  $scope.teamData.push(teamDataMiami);
  $scope.teamData.push(teamDataUtah);


  console.log($scope.home);
  console.log($scope.teamData[0].homeTeamScore);
  console.log($scope.teamData);

});