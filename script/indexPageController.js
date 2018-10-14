
var app = angular.module("app", []);

app.controller('indexPageController', function($scope) {

    document.getElementById('emailIcon').onmouseover = function(){
        document.getElementById('email').style.opacity = "1"
    }
    document.getElementById('emailIcon').onmouseout = function(){
        document.getElementById('email').style.opacity = "0";
    }

    document.getElementById('linkedinIcon').onmouseover = function(){
        document.getElementById('linkedin').style.opacity = "1"
    }
    document.getElementById('linkedinIcon').onmouseout = function(){
        document.getElementById('linkedin').style.opacity = "0";
    }

    document.getElementById('githubIcon').onmouseover = function(){
        document.getElementById('github').style.opacity = "1"
    }
    document.getElementById('githubIcon').onmouseout = function(){
        document.getElementById('github').style.opacity = "0";
    }

    $scope.openurl = function(url){
        window.open(url, '_blank');
    }

    $scope.openmail = function(url) {
        window.location.href = "mailto:msurenth@uwaterloo.ca";
    }

});
