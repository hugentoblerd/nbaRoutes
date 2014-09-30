var app = angular.module('nbaRoutes', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');

// changes template html, controller and data to use based on page user is on('/', '/teams/:team'. etc)
$routeProvider
  .when('/', {
    templateUrl: 'js/home/homeTmpl.html',
    controller: 'homeCtrl',
    // resolves promis from homeService getTeamData(GET request). The data from that promis is now in my homeCtrl.js
    resolve: {
      // data for Los Angeles Lakers
      teamDataLA: function (homeService, $route) {
        return homeService.getTeamData('losangeleslakers');
      },
      // data for Miami Heat
      teamDataMiami: function (homeService, $route) {
        return homeService.getTeamData('miamiheat');
      },
      // data for Utah Jazz
      teamDataUtah: function (homeService, $route) {
        return homeService.getTeamData('utahjazz');
      }
    }
  }).when('/teams/:team', {
    templateUrl: 'js/teams/teamTmpl.html',
    controller: 'teamCtrl',
    // resolves promise from teamServices getTeamData (GET request). The data from that promise is now available in my teamCtrl.js as teamData
    resolve: {
      teamData: function (teamService, $route) {
        // $route.current.params.team is the given based on where the user is(the links on the index.html set the url)
        return teamService.getTeamData($route.current.params.team);
      }
    }
  }).otherwise('/', {
    redirectTo: '/'
  });





});