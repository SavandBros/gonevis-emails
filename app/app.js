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
    $scope.mute = false;
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

  $scope.getSource = function () {

    var email = $scope.email;

    // Include mute link
    if ($scope.mute) {
      email += "\n<a class=\"mute\" href=\"{{ unsubscribe_url }}\">Mute this post</a>";
    }

    // Turn new lines to break lines
    email = email.replace(/\n/g, "\n<br>");

    // Replace dynamic content
    return $scope.source.replace("<email-content-goes-here/>", email);
  };

  $scope.getPreview = function () {
    return $sce.trustAsHtml($scope.getSource());
  };

  constructor();
});
