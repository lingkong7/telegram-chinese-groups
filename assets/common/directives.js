/**
 * Created by ling on 15-9-17.
 */
var footer = '<div class="ui inverted vertical footer segment">'+
    '<div class="ui center aligned container">'+
    '<div class="ui stackable inverted divided grid">'+
    '<div class=" wide column">'+
    '<div class="ui inverted link list">'+
    '<a href="https://github.com/jqs7/telegram-chinese-groups" class="item">群组娘的源代码基于 GPL v3 协议发布</a>'+
    '</div>'+
    '<div class="ui horizontal inverted item small divided link list">'+
    '© 2015'+
    '<a class="item" href="https://github.com/jqs7">@Jqs_7</a>'+
    '<a class="item" href="https://github.com/lingkong7">@jiadaeleven</a></div></div></div></div></div>';
var user;

(function(angular){
  'use strict';
  angular.element("div:last").after(footer);
  angular.module('directives',[])
        .directive('datepicker',function(){
           return {
               restrict: 'ECMA',
               template: '<div id="search" align="center" class="item search">'+
                '<h1>群组娘第二舰队活动图</h1>'+
                '<div class="ui icon input">'+
                '<input id="user" type="text" placeholder="UserName..." ng-model="user" ng-click="update(user)">'+
                '<i id="us" class="search link icon"></i></div></div>'
           }
        })
      .directive('line',function(){
           return {
               restrict: 'ECMA',
               template: '<div class="ui total" id="total"></div>'
           }
        })
      .directive('pie',function(){
           return {
               restrict: 'ECMA',
               template: '<div class="ui pie" id="pie" hidden style="height:500px;width:1200px"></div>'
           }
        });
      /*.factory('getData',function($http,$q){
       *   return function(){
       *       var defer = $q.defer;
       *      $http.get('/test/2015-09-16')
       *           .done(function(data){
       *               console.log(data['rank']);
       *               defer._resolve(data['rank'])
       *           });
       *       return defer.promise
       *   }
       *})
       *.controller('lineController',function($scope,getData){
       *  $scope.data = getData()
       * });
       * */

})(window.angular);

