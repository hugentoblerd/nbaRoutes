var app = angular.module('nbaRoutes', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');

$routeProvider
  .when('/', {
    templateUrl: 'js/home/homeTmpl.html',
    controller: 'homeCtrl',
    resolve: {
      teamDataLA: function (homeService, $route) {
        return homeService.getTeamData('losangeleslakers');
      },
      teamDataMiami: function (homeService, $route) {
        return homeService.getTeamData('miamiheat');
      },
      teamDataUtah: function (homeService, $route) {
        return homeService.getTeamData('utahjazz');
      }
    }
  }).when('/teams/:team', {
    templateUrl: 'js/teams/teamTmpl.html',
    controller: 'teamCtrl',
    // resolves promise from teamServices getTeamData (GET request). The data from that promise is now available in our controller as teamData
    resolve: {
      teamData: function (teamService, $route) {
        return teamService.getTeamData($route.current.params.team);
      }
    }
  }).otherwise('/', {
    redirectTo: '/'
  });





});