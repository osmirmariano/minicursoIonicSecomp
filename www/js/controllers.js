angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('CronogramaCtrl', function($scope){
  $scope.cronograma = [{
    id: 0,
    dia: 1,

    evento: [{
      participante: 'Osmir',
      horario: '14:00 - 18:00'
    }]
  },{
    id: 1,
    dia: '19/10',
    evento: [{
      participante: 'Fulano',
      horario: '14:00 - 18:00'
    },{
      participante: 'Tal',
      horario: '18:00 - 20:00'
    }]
  }]
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
