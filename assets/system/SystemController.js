/**
 * Created by ling on 15-9-17.
 */

var Controller = function($scope,$http,params){
  var date = linedata(params);
    $scope.tipData = new Array;
    $scope.pieData = new Array;
  $http.get('/test'+date)
      .done(function(data){
          for(var i in data['rank']){
              $scope.tipData[i].name = data['rank'][i]['name'];
              $scope.tipData[i].count = data['rank'][i]['count'];
              $scope.tipData[i].percent = data['rank'][i]['percent'].toFixed(2);
              $scope.pieData[i] = piedata($scope.tipData[i].count,$scope.tipData[i].name)
          }
      })
};