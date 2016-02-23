angular.module('starter.controllers', [])
//在这下面添加页面对应的控制器，每个控制器管理对应页面的功能，跳转等等
  .controller('startCtrl', function($scope, $state, showMsgService) {
    showMsgService.showMsg("首页控制器是startCtrl");
    $scope.goFirst = function() {
      $state.go('first');
    }
  })
  .controller('firstCtrl',function($scope ,$state) {
    $scope.goBackStart = function() {
      $state.go('start');

    };
    $scope.goBanquan = function() {
          $state.go('banquan');
     };
        $scope.goYishujia = function() {
            $state.go('yishujia');
        };
        $scope.goLiucheng = function() {
            $state.go('liucheng');
        };
        $scope.goGongyi = function() {
            $state.go('gongyi');
        };
        $scope.goTiyan = function() {
            $state.go('tiyan');
        };
        $scope.goZuopin = function() {
            $state.go('zuopin');
        }
  })
.controller('banquanCtrl',function($scope ,$state) {
    $scope.Goback = function() {
        history.back();
    }
})
.controller('yishujiaCtrl',function($scope ,$state) {
    $scope.Goback = function() {
        history.back();
    };
        $scope.Govideo1 = function() {
            $state.go('yishuvideo1')
        };
        $scope.Govideo2 = function() {
            $state.go('yishuvideo2')
        };
})
    .controller('yishuvideo1Ctrl',function($scope ,$state) {
        $scope.Goback = function() {
            history.back();
        }
    })
    .controller('yishuvideo2Ctrl',function($scope ,$state) {
        $scope.Goback = function() {
            history.back();
        }
    })
.controller('liuchengCtrl',function($scope ,$state) {
    $scope.Goback = function() {
        history.back();
    };
        $scope.Goqian = function() {
            $state.go('liucheng_1')
        };
        $scope.Goxiu = function() {
            $state.go('liucheng_2')
        };
        $scope.Gohou = function() {
            $state.go('liucheng_3')
        };

})
.controller('liucheng_1Ctrl',function($scope ,$state) {
    $scope.Goback = function() {
        history.back();
    };
})
    .controller('liucheng_2Ctrl',function($scope ,$state) {
        $scope.Goback = function() {
            history.back();
        };
    })
    .controller('liucheng_3Ctrl',function($scope ,$state) {
        $scope.Goback = function() {
            history.back();
        };
    })
.controller('gongyiCtrl',function($scope ,$state) {
    $scope.Goback = function() {
        history.back();
    };
        $scope.goOne = function() {
            $state.go('gongyi_1');
        };
        $scope.goTwo = function() {
            $state.go('gongyi_2');
        };
        $scope.goThree = function() {
            $state.go('gongyi_3');
        };
        $scope.goFour = function() {
            $state.go('gongyi_4');
        };
        $scope.goFive = function() {
            $state.go('gongyi_5');
        };
})
.controller('gongyi_1Ctrl',function($scope ,$state) {
    $scope.Goback = function() {
        history.back();
    };
})
    .controller('gongyi_2Ctrl',function($scope ,$state) {
        $scope.Goback = function() {
            history.back();
        };
    })
    .controller('gongyi_3Ctrl',function($scope ,$state) {
        $scope.Goback = function() {
            history.back();
        };
    })
    .controller('gongyi_4Ctrl',function($scope ,$state) {
        $scope.Goback = function() {
            history.back();
        };
    })
    .controller('gongyi_5Ctrl',function($scope ,$state) {
        $scope.Goback = function() {
            history.back();
        };
    })
