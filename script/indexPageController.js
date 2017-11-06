
var app = angular.module("app", []);

app.controller('indexPageController', function($scope) {

    // List of Projects
    $scope.listofProjects = {
        "projectOne": {
            name: 'Stock Market Simulator',
            dateCompleted: new Date(),
            shortDescription: 'This was a project.',
            longDescription: 'This was a long project.',
            toolsUsed: ['Javascript', 'HTML', 'CSS', 'Angular']
        }
    }

    // Menu Click Variable
    $scope.homeButton = 'active';
    $scope.linksButton = '';
    $scope.resumeButton = '';

    $scope.menuClick = function(button) {
        if (button === 'homeButton') {
            $scope.linksButton = '';
            $scope.resumeButton = '';
            $scope.homeButton = 'active';
        } else if (button === 'linksButton') {
            $scope.linksButton = 'active';
            $scope.resumeButton = '';
            $scope.homeButton = '';
        } else {
            $scope.resumeButton = 'active';
            $scope.linksButton = '';
            $scope.homeButton = '';
        }
    }


    $scope.name = 'Mylon Suren';

});
