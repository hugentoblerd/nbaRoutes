var app = angular.module('nbaRoutes', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');

$routeProvider
  .when('/', {
    templateUrl: 'js/home/homeTmpl.html',
    controller: 'homeCtrl'
  }).when('/teams/:team', {
    templateUrl: 'js/teams/teamTmpl.html',
    controller: 'teamCtrl',
    // resolves promise from teamServices getTeamData (GET request). The data from that promis is now available in our controller as teamData
    resolve: {
      teamData: function (teamService, $route) {
        return teamService.getTeamData($route.current.params.team);
      }
    }
  }).otherwise('/', {
    redirectTo: '/'
  });







});