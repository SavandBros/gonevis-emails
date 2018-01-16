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

    $scope.email = "<p>Hello world!</p><p>How are you?</p>";
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
    return $scope.source.replace("<email-content-goes-here/>", $scope.email);
  };

  $scope.getPreview = function () {
    return $sce.trustAsHtml($scope.getSource(true));
  };

  constructor();
});
