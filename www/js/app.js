// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controllers','starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

  .config(function($stateProvider, $urlRouterProvider){
    //一个页面为一个状态，在下面配置其路径，控制器等，添加了首页和第一个跳转页的示例
    $stateProvider
      .state('start', {
        url: '/start',
        templateUrl: 'templates/start.html',
        controller: "startCtrl"
      })
      .state('first',{
        url: '/first',
        templateUrl: 'templates/first.html',
        controller: "firstCtrl"
      })
        .state('banquan',{
            url: '/banquan',
            templateUrl: 'templates/banquan.html',
            controller: "banquanCtrl"
        })
        .state('yishujia',{
            url: '/yishujia',
            templateUrl: 'templates/yishujia.html',
            controller: "yishujiaCtrl"
        })
        .state('yishuvideo1',{
            url: '/yishuvideo1',
            templateUrl: 'templates/yishuvideo1.html',
            controller: "yishuvideo1Ctrl"
        })
        .state('yishuvideo2',{
            url: '/yishuvideo2',
            templateUrl: 'templates/yishuvideo2.html',
            controller: "yishuvideo2Ctrl"
        })
        .state('liucheng',{
            url: '/liucheng',
            templateUrl: 'templates/liucheng.html',
            controller: "liuchengCtrl"
        })
        .state('liucheng_1',{
            url: '/liucheng_1',
            templateUrl: 'templates/liucheng_1.html',
            controller: "liucheng_1Ctrl"
        })
        .state('liucheng_2',{
            url: '/liucheng_2',
            templateUrl: 'templates/liucheng_2.html',
            controller: "liucheng_2Ctrl"
        })
        .state('liucheng_3',{
            url: '/liucheng_3',
            templateUrl: 'templates/liucheng_3.html',
            controller: "liucheng_3Ctrl"
        })
        .state('zuopin',{
            url: '/zuopin',
            templateUrl: 'templates/zuopin.html',
            controller: "zuopinCtrl"
        })
        .state('zuopin_1',{
            url: '/zuopin_1',
            templateUrl: 'templates/zuopin_1.html',
            controller: "zuopin_1Ctrl"
        })
        .state('zuopin_2',{
            url: '/zuopin_2',
            templateUrl: 'templates/zuopin_2.html',
            controller: "zuopin_2Ctrl"
        })
        .state('zuopin_3',{
            url: '/zuopin_3',
            templateUrl: 'templates/zuopin_3.html',
            controller: "zuopin_3Ctrl"
        })
        .state('zuopin_4',{
            url: '/zuopin_4',
            templateUrl: 'templates/zuopin_4.html',
            controller: "zuopin_4Ctrl"
        })
        .state('zuopin_5',{
            url: '/zuopin_5',
            templateUrl: 'templates/zuopin_5.html',
            controller: "zuopin_5Ctrl"
        })
        .state('zuopin_6',{
            url: '/zuopin_6',
            templateUrl: 'templates/zuopin_6.html',
            controller: "zuopin_6Ctrl"
        })
        .state('zuopin_7',{
            url: '/zuopin_7',
            templateUrl: 'templates/zuopin_7.html',
            controller: "zuopin_7Ctrl"
        })
        .state('tiyan',{
            url: '/tiyan',
            templateUrl: 'templates/tiyan.html',
            controller: "tiyanCtrl"
        })
        .state('tiyan_1',{
            url: '/tiyan_1',
            //cache刷新页面数据
            cache:'false',
            templateUrl: 'templates/tiyan_1.html',
            controller: "tiyan_1Ctrl"
        })
        .state('tiyan_2',{
            url: '/tiyan_2',
            cache:'false',
            templateUrl: 'templates/tiyan_2.html',
            controller: "tiyan_2Ctrl"
        })
        .state('tiyan_3',{
            url: '/tiyan_3',
            cache:'false',
            templateUrl: 'templates/tiyan_3.html',
            controller: "tiyan_3Ctrl"
        })
        .state('gongyi',{
            url: '/gongyi',
            templateUrl: 'templates/gongyi.html',
            controller: "gongyiCtrl"
        })
        .state('gongyi_1',{
            url: '/gongyi_1',
            templateUrl: 'templates/gongyi_1.html',
            controller: "gongyi_1Ctrl"
        })
        .state('gongyi_2',{
            url: '/gongyi_2',
            templateUrl: 'templates/gongyi_2.html',
            controller: "gongyi_2Ctrl"
        })
        .state('gongyi_3',{
            url: '/gongyi_3',
            templateUrl: 'templates/gongyi_3.html',
            controller: "gongyi_3Ctrl"
        })
        .state('gongyi_4',{
            url: '/gongyi_4',
            templateUrl: 'templates/gongyi_4.html',
            controller: "gongyi_4Ctrl"
        })
        .state('gongyi_5',{
            url: '/gongyi_5',
            templateUrl: 'templates/gongyi_5.html',
            controller: "gongyi_5Ctrl"
        });




    //当没有状态匹配到时默认显示的状态
    $urlRouterProvider.otherwise('/start');
  });
