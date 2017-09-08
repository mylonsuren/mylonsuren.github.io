
var app = angular.module("app", []);

app.controller('indexPageController', function($scope) {

  $scope.listofProjects = {
    "projectOne": {
      name: 'Stock Market Simulator',
      dateCompleted: new Date(),
      shortDescription: 'This was a project.',
      longDescription: 'This was a long project.',
      toolsUsed: ['Javascript', 'HTML', 'CSS', 'Angular']
    }
  }

});
