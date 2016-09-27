var toDoList = angular.module('toDoList', []);
toDoList.controller('toDoCtrl', function($scope) {
  $scope.toDoArr = [];
  $scope.allDone = false;

  $scope.submit = function() {
    if ($scope.toDoInput) {
      $scope.toDoArr.push({
        title: $scope.toDoInput,
        done: false,
        editing: false
      });
      $scope.toDoInput = '';
    }
  }

  $scope.countLeft = function() {
    var count = 0;
    angular.forEach($scope.toDoArr, function(toDo) {
      if (!toDo.done) {
        count++;
      }
    });
    return count;
  }

  $scope.delete = function() {
    var pre = $scope.toDoArr;
    $scope.toDoArr = [];
    angular.forEach(pre, function(toDo) {
      if (!toDo.done) {
        $scope.toDoArr.push(toDo);
      }
    });
    $scope.allDone = false;
  }
  
  $scope.delete2 = function(item) {
    item.done = true;
    var pre = $scope.toDoArr;
    $scope.toDoArr = [];
    angular.forEach(pre, function(toDo) {
      if (!toDo.done) {
        $scope.toDoArr.push(toDo);
      }
    });
    $scope.allDone = false;
  }

  $scope.itemText = function() {
    if ($scope.toDoArr.length - $scope.countLeft() > 1) {
      return 'items';
    }
    return 'item';
  }

  $scope.allDoneFunc = function() {
    angular.forEach($scope.toDoArr, function(toDo) {
      toDo.done = $scope.allDone;
    });
  }

  $scope.edit = function(item) {
    item.editing = true;
  }
  
  $scope.doneEdit = function(item) {
    if (event.keyCode == 13 && item.title) {
      item.editing = false;
    }
    if (event.keyCode == 13 && !item.title) {
      alert('The item cannot be empty. Otherwise please delete it.');
    }
  }

})
