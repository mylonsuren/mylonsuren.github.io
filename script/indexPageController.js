
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
    $scope.linkedInButton = '';
    $scope.githubButton = '';
    $scope.resumeButton = '';

    $scope.menuClick = function(button) {
        if (button === 'homeButton') {
            $scope.linkedInButton = '';
            $scope.resumeButton = '';
            $scope.githubButton = '';
            $scope.homeButton = 'active';
        } else if (button === 'linkedInButton') {
            // $scope.linkedInButton = 'active';
            // $scope.githubButton = '';
            // $scope.resumeButton = '';
            // $scope.homeButton = '';

            window.open("https://www.linkedin.com/in/mylonsuren/", '_blank');

        } else if (button === 'githubButton'){
            // $scope.githubButton = 'active';
            // $scope.linkedInButton = '';
            // $scope.homeButton = '';
            // $scope.resumeButton = '';

            window.open("https://github.com/mylonsuren", '_blank');

        } else {
            // $scope.githubButton = '';
            // $scope.linkedInButton = '';
            // $scope.homeButton = '';
            // $scope.resumeButton = 'active';

            window.open("../Resume/Mylon_Surenthiran_Resume.pdf");


        }
    }

});
