var app = angular.module("gonevisEmails", []);

app.config(function ($compileProvider, $qProvider) {
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|data):/);
  $qProvider.errorOnUnhandledRejections(false);
});

app.controller("AppController", function ($scope, $sce, $http) {

  function constructor() {

    $scope.sizes = ["Desktop", "Tablet", "Mobile"];
    $scope.views = ["Preview", "Editor", "Source"];

    $scope.currentSize = $scope.sizes[0];
    $scope.currentView = $scope.views[0];

    $scope.email = "Hello world!\n\nHow are you?";
    $scope.source = "Loading...";

    $http.get("email.html").then(function (data) {
      $scope.source = data.data;
    });
  }

  $scope.setSize = function (size) {
    $scope.currentSize = size;
  };

  $scope.setView = function (view) {
    $scope.currentView = view;
  };

  $scope.getSource = function (noStyle) {
  };

  $scope.getPreview = function () {
    return $sce.trustAsHtml($scope.getSource(true));
  };

  constructor();
});
