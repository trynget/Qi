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
        var myVideo=document.getElementById("video1");
        $scope.Goback = function() {
            history.back();
        };
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
    .controller('zuopinCtrl',function($scope ,$state) {
        $scope.Goback = function() {
            history.back();
        };
        $scope.goOne = function() {
            $state.go('zuopin_1');
        };
        $scope.goTwo = function() {
            $state.go('zuopin_2');
        };
        $scope.goThree = function() {
            $state.go('zuopin_3');
        };
        $scope.goFour = function() {
            $state.go('zuopin_4');
        };
        $scope.goFive = function() {
            $state.go('zuopin_5');
        };
        $scope.goSix = function() {
            $state.go('zuopin_6');
        };
        $scope.goSeven = function() {
            $state.go('zuopin_7');
        };
    })
    .controller('zuopin_1Ctrl',function($scope ,$state) {
        $scope.Goback = function() {
            history.back();
        };
            $(".select_photo").click(function(){
                var img_src = $(this).attr('src');
                $("#zp_photo_1").attr("src",img_src);
            });
            $(".zp_photo").click(function(){
                var img_sr = $(this).attr('src');
                $(".display_photo").attr("src",img_sr);
                var pswpElement = document.querySelectorAll('.pswp')[0];
                var items = [
                    {
                        src: img_sr,
                        w: $(this).width(),
                        h: $(this).height()
                    }
                ];
                var options = {
                    index: 0,
                    tapToClose: true
                };
                var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
                gallery.init();
            });
    })
    .controller('zuopin_2Ctrl',function($scope ,$state) {
        $scope.Goback = function() {
            history.back();
        };
        $(".select_photo").click(function(){
            var img_src = $(this).attr('src');
            $("#zp_photo_2").attr("src",img_src);
        });
        $(".zp_photo").click(function(){
            var img_sr = $(this).attr('src');
            $(".display_photo").attr("src",img_sr);
            var pswpElement = document.querySelectorAll('.pswp')[0];
            var items = [
                {
                    src: img_sr,
                    w: $(this).width(),
                    h: $(this).height()
                }
            ];
            var options = {
                index: 0,
                tapToClose: true
            };
            var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        });

    })
    .controller('zuopin_3Ctrl',function($scope ,$state) {
        $scope.Goback = function() {
            history.back();
        };
        $(".select_photo").click(function(){
            var img_src = $(this).attr('src');
            $("#zp_photo_3").attr("src",img_src);
        });
        $(".zp_photo").click(function(){
            var img_sr = $(this).attr('src');
            $(".display_photo").attr("src",img_sr);
            var pswpElement = document.querySelectorAll('.pswp')[0];
            var items = [
                {
                    src: img_sr,
                    w: $(this).width(),
                    h: $(this).height()
                }
            ];
            var options = {
                index: 0,
                tapToClose: true
            };
            var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        });
    })
    .controller('zuopin_4Ctrl',function($scope ,$state) {
        $scope.Goback = function() {
            history.back();
        };
        $(".select_photo").click(function(){
            var img_src = $(this).attr('src');
            $("#zp_photo_4").attr("src",img_src);
        });
        $(".zp_photo").click(function(){
            var img_sr = $(this).attr('src');
            $(".display_photo").attr("src",img_sr);
            var pswpElement = document.querySelectorAll('.pswp')[0];
            var items = [
                {
                    src: img_sr,
                    w: $(this).width(),
                    h: $(this).height()
                }
            ];
            var options = {
                index: 0,
                tapToClose: true
            };
            var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        });
    })
    .controller('zuopin_5Ctrl',function($scope ,$state) {
        $scope.Goback = function() {
            history.back();
        };
        $(".select_photo").click(function(){
            var img_src = $(this).attr('src');
            $("#zp_photo_5").attr("src",img_src);
        });
        $(".zp_photo").click(function(){
            var img_sr = $(this).attr('src');
            $(".display_photo").attr("src",img_sr);
            var pswpElement = document.querySelectorAll('.pswp')[0];
            var items = [
                {
                    src: img_sr,
                    w: $(this).width(),
                    h: $(this).height()
                }
            ];
            var options = {
                index: 0,
                tapToClose: true
            };
            var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        });
    })
    .controller('zuopin_6Ctrl',function($scope ,$state) {
        $scope.Goback = function() {
            history.back();
        };
        $(".select_photo").click(function(){
            var img_src = $(this).attr('src');
            $("#zp_photo_6").attr("src",img_src);
        });
        $(".zp_photo").click(function(){
            var img_sr = $(this).attr('src');
            $(".display_photo").attr("src",img_sr);
            var pswpElement = document.querySelectorAll('.pswp')[0];
            var items = [
                {
                    src: img_sr,
                    w: $(this).width(),
                    h: $(this).height()
                }
            ];
            var options = {
                index: 0,
                tapToClose: true
            };
            var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        });
    })
    .controller('zuopin_7Ctrl',function($scope ,$state) {
        $scope.Goback = function() {
            history.back();
        };
        $(".select_photo").click(function(){
            var img_src = $(this).attr('src');
            $("#zp_photo_7").attr("src",img_src);
        });
        $(".zp_photo").click(function(){
            var img_sr = $(this).attr('src');
            $(".display_photo").attr("src",img_sr);
            var pswpElement = document.querySelectorAll('.pswp')[0];
            var items = [
                {
                    src: img_sr,
                    w: $(this).width(),
                    h: $(this).height()
                }
            ];
            var options = {
                index: 0,
                tapToClose: true
            };
            var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        });
    })
    .controller('tiyanCtrl',function($scope ,$state) {
        $scope.Goback = function() {
            history.back();
        };
        $scope.Gotiyan_1 = function() {
            $state.go('tiyan_1')
        };
        $scope.Gotiyan_2 = function() {
            $state.go('tiyan_2')
        };
        $scope.Gotiyan_3 = function() {
            $state.go('tiyan_3')
        };
    })
.controller('tiyan_1Ctrl',function($scope ,$state,showMsgService) {
    $scope.Goback = function() {
        history.back();
    };
        var n=0;
        $("#span_1").click(function(){
            n++;
            if(n>=5){
                $("#span_2,#success_1,#su_1").css("display","inline");
                $("#span_1").css("display","none");
                $('#gameAudio4')[0].play();
            }
            for(i=1;i<=n;i++){
                $("#circle_"+i).css("border-color","#C49020");
                $('#gameAudio1')[0].play();
            }
        });
        $("#su_1").click(function(){
            $("#main_1,#span_1,#span_2,#font_1,#success_1,#su_1").css("display","none");
            $("#main_2,#span_3,#font_2").css("display","inline");
            for(i=1;i<=5;i++){
                $("#circle_"+i).css("border-color","#CACACA");
            }
        });
        var m=0;
        $("#span_3").click(function(){
            m++;
            if(m>=5){
                $("#span_4,#success_1,#su_2").css("display","inline");
                $("#span_3").css("display","none");
                $('#gameAudio4')[0].play();
            }
            for(i=1;i<=m;i++){
                $("#circle_"+i).css("border-color","#C49020");
                $('#gameAudio2')[0].play();
            }
        });
        $("#su_2").click(function(){
            $("#span_3,#span_4,#font_2,#success_1,#su_2").css("display","none");
            $("#main_2,#span_5,#font_3").css("display","inline");
            $("#circle_1").css("border-color","#CACACA");
            for(i=2;i<=5;i++){
                $("#circle_"+i).css("display","none");
                $("#circle_border_"+i).css("display","none");
            }
        });
        $("#span_5").click(function(){
            $("#span_6,#success_1,#su_3").css("display","inline");
            $("#circle_1").css("border-color","#C49020");
            $('#gameAudio3')[0].play();
        });
        $("#su_3").click(function(){
            $("#success_1,#su_3").css("display","none");
            $("#font_4").css("display","inline");
            for(i=1;i<=5;i++){
                $("#circle_"+i).css("display","");
                $("#circle_border_"+i).css("display","inline");
                $("#circle_"+i).css("border-color","#CACACA");
                $("#circle_border_"+i).css("border-color","#CACACA");
            }
        });
        var q=0;
        $("#span_6").click(function(){
            q++;
            if(q>=5){
                $("#span_7,#success_1,#su_4,#span_5").css("display","inline");
                $("#span_5,#span_6").css("display","none");
                $('#gameAudio4')[0].play();
            }
            for(i=1;i<=q;i++){
                $("#circle_"+i).css("border-color","#C49020");
                $('#gameAudio3')[0].play();
            }
        });
        $("#su_4").click(function(){
            $("#success_1,#su_4,#font_4").css("display","none");
            $("#font_5").css("display","inline");
            for(i=1;i<=5;i++){
                $("#circle_"+i).css("border-color","#CACACA");
            }
        });
        var w=0;
        $("#span_7").click(function(){
            w++;
            if(w>=5){
                $("#save,#success_1,#main_3").css("display","inline");
                $("#span_7,#main_2").css("display","none");
                $('#gameAudio4')[0].play();
                $("#save").click(function() {
                    var canvas = document.createElement("canvas");
                    var image = new Image();
                    image.src = "img/tiyan/one/main_4.png";
                    canvas.width = image.width;
                    canvas.height = image.height;
                    canvas.id = "myCanvas";
                    canvas.getContext("2d").drawImage(image, 0, 0);
                    $('#toSave').append(canvas);
                    window.canvas2ImagePlugin.saveImageDataToLibrary(
                        function(msg){
                            console.log(msg);
                        },
                        function(err){
                            console.log(err);
                        },
                        document.getElementById('myCanvas')
                    );
                    showMsgService.showMsg("图片已保存到手机相册");
                })
            }
            for(i=1;i<=w;i++){
                $("#circle_"+i).css("border-color","#C49020");
                $('#gameAudio3')[0].play();
            }
        });

})
.controller('tiyan_2Ctrl',function($scope ,$state) {
    $scope.Goback = function() {
        history.back();
    };
        //第一步
        var nn=0;
        $("#span_2_1").click(function(){
            nn++;
            if(nn>=5){
                $("#success_1,#su_1,#span_2_2").css("display","inline");
                $("#span_2_1").css("display","none");
                $('#gameAudio4')[0].play();
            }
            for(i=1;i<=nn;i++){
                $("#circle_"+i).css("border-color","#C49020");
                $('#gameAudio1')[0].play();
            }
        });
//        点击至第二步
        $("#su_1").click(function(){
            $("#font_1,#main_1,#success_1,#su_1").css("display","none");
            $("#font_2,#main_2_2,#span_2_3").css("display","inline");
            for(i=1;i<=5;i++){
                $("#circle_"+i).css("border-color","#CACACA");
            }
        });
//        第二步
        var mm=0;
        $("#span_2_3").click(function(){
            mm++;
            if(mm>=5){
                $("#success_1,#su_2,#main_2_3,#span_2_3").css("display","inline");
                $("#main_2_2").css("display","none");
                $('#gameAudio4')[0].play();
            }
            for(i=1;i<=mm;i++){
                $("#circle_"+i).css("border-color","#C49020");
                $('#gameAudio2')[0].play();
            }
        });
//        点击至第三步
        $("#su_2").click(function(){
            $("#font_2,#success_1,#su_2,#span_2_3").css("display","none");
            $("#font_3,#main_2_2,#span_2_3_2").css("display","inline");
            $("#circle_1").css("border-color","#CACACA");
            for(i=2;i<=5;i++){
                $("#circle_"+i).css("display","none");
                $("#circle_border_"+i).css("display","none");
            }
        });
        //第三步
        $("#span_2_3_2").click(function(){
            $("#success_1,#su_3,#span_2_4").css("display","inline");
            $("#circle_1").css("border-color","#C49020");
            $('#gameAudio3')[0].play();
        });
//       点击至第四步
        $("#su_3").click(function() {
            $("#font_3,#success_1,#su_3").css("display","none");
            $("#font_4").css("display","inline");
            for(i=1;i<=5;i++){
                $("#circle_"+i).css("display","");
                $("#circle_border_"+i).css("display","inline");
                $("#circle_"+i).css("border-color","#CACACA");
                $("#circle_border_"+i).css("border-color","#CACACA");
            }
        });
    //    第四步
        var qq=0;
        $("#span_2_4").click(function(){
            qq++;
            if(qq>=5){
                $("#success_1,#su_4,#span_2_5").css("display","inline");
                $("#main_2_2,#span_2_4").css("display","none");
                $('#gameAudio4')[0].play();
            }
            for(i=1;i<=qq;i++){
                $("#circle_"+i).css("border-color","#C49020");
                $('#gameAudio3')[0].play();
            }
        });
    //    点击至第五步
        $("#su_4").click(function() {
            $("#font_4,#success_1,#su_4").css("display","none");
            $("#font_5").css("display","inline");
            for(i=1;i<=5;i++){
                $("#circle_"+i).css("border-color","#CACACA");
            }
        });
    //    第五步
        var ww=0;
        $("#span_2_5").click(function(){
            ww++;
            if(ww>=5){
                $("#success_1,#main_2_4,#save").css("display","inline");
                $("#main_2_3,#span_2_5,#span_2_4,#span_2_3_2").css("display","none");
                $('#gameAudio4')[0].play();
                $("#save").click(function() {
                    var canvas = document.createElement("canvas");
                    var image = new Image();
                    image.src = "img/tiyan/two/main_4.png";
                    canvas.width = image.width;
                    canvas.height = image.height;
                    canvas.id = "myCanvas1";
                    canvas.getContext("2d").drawImage(image, 0, 0);
                    $('#toSave1').append(canvas);
                    window.canvas2ImagePlugin.saveImageDataToLibrary(
                        function(msg){
                            console.log(msg);
                        },
                        function(err){
                            console.log(err);
                        },
                        document.getElementById('myCanvas1')
                    );
                    showMsgService.showMsg("图片已保存到手机相册");
                })
            }
            for(i=1;i<=ww;i++){
                $("#circle_"+i).css("border-color","#C49020");
                $('#gameAudio3')[0].play();
            }
        });
    })
.controller('tiyan_3Ctrl',function($scope ,$state) {
    $scope.Goback = function() {
        history.back();
    };
        //第一步
        var nnn=0;
        $("#span_3_1").click(function(){
            nnn++;
            if(nnn>=5){
                $("#success_1,#su_1,#span_3_2").css("display","inline");
                $("#span_3_1").css("display","none");
            }
            for(i=1;i<=nnn;i++){
                $("#circle_"+i).css("border-color","#C49020");
            }
        });
//        点击至第二步
        $("#su_1").click(function(){
            $("#font_1,#main_1,#success_1,#su_1,#span_3_2").css("display","none");
            $("#font_2,#main_3_2,#span_3_3").css("display","inline");
            $("#circle_1").css("border-color","#CACACA");
            for(i=2;i<=5;i++){
                $("#circle_"+i).css("display","none");
                $("#circle_border_"+i).css("display","none");
            }
        });
//        第二步
        $("#span_3_3").click(function(){
            $("#circle_1").css("border-color","#C49020");
                $("#success_1,#su_2,#span_3_4").css("display","inline");
                $("#span_3_3").css("display","none");
        });
//        点击至第三步
        $("#su_2").click(function() {
            $("#font_2,#success_1,#su_2").css("display","none");
            $("#font_3").css("display","inline");
            for(i=1;i<=5;i++){
                $("#circle_"+i).css("display","");
                $("#circle_border_"+i).css("display","inline");
                $("#circle_"+i).css("border-color","#CACACA");
                $("#circle_border_"+i).css("border-color","#CACACA");
            }
        });
//        第三步
        var mmm=0;
        $("#span_3_4").click(function(){
            mmm++;
            if(mmm>=5){
                $("#success_1,#su_3").css("display","inline");
            }
            for(i=1;i<=mmm;i++){
                $("#circle_"+i).css("border-color","#C49020");
            }
        });
//        点击至第四步
        $("#su_3").click(function(){
            $("#font_3,#success_1,#su_3,#span_3_4").css("display","none");
            $("#font_4,#span_3_5").css("display","inline");
            $("#circle_1").css("border-color","#CACACA");
            for(i=1;i<=5;i++){
                $("#circle_"+i).css("border-color","#CACACA");
            }
        });
//        第四步
        ppp=0;
        $("#span_3_5").click(function(){
            ppp++;
            if(ppp>=5){
                $("#success_1,#span_3_6,#save").css("display","inline");
                $("#span_3_5").css("display","none");
            }
            for(i=1;i<=ppp;i++){
                $("#circle_"+i).css("border-color","#C49020");
            }
        })
});
