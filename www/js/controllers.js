angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('ParticipantesCtrl', function($scope, $ionicPopup) {
  $scope.exibirOsmir = function(){
    $ionicPopup.alert({
      title: 'Olá Osmir',
      template: 'Minicurso ministrado no laboratória 15'
    });
  }

  $scope.exibirFulandoTal = function(){
    $ionicPopup.alert({
      title: 'Olá Fulano de Tal',
      template: 'Minicurso ministrado no laboratória 15'
    });
  }
});
