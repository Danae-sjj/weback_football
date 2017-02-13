/**
 * Created by Administrator on 2017/2/10.
 */
angular.module("myApp")
.controller("giuCtrl",function(){
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: false
    });
})
.controller("footerCtrl",function($state){
    $state.go("footer.home")
})
.controller("homeCtrl",function($scope,$http){
    //请求数据
    $http.get("./livelist.json")
        .then(function(data){
            $scope.data=data.data.data;
            $scope.arr = [];//  定义一个空数组
            for (var i = 0, len = $scope.data.length / 2; i < len; i++) {
                $scope.arr[i] = [];//  arr空数组中创建i个二维数组
                $scope.arr[i].push($scope.data[i * 2]);//  往arr中每个二维数组push data下标 0  2 4对象，
                $scope.data[i * 2 + 1] && $scope.arr[i].push($scope.data[i * 2 + 1]);//  判断data[i]下标奇数 并且对象中有没有  有就往arr中每个二维数组中再push data下标 1 3 5 对象，
            }
        });
    //Swiper
    var mySwipers = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: false,
        onSlideChangeStart:function(swiper){
            var idx=swiper.activeIndex;
            $("#listCont").children("li").eq(idx).addClass("nav-bg").siblings().removeClass()
            $("#navBar").children("span").eq(idx).addClass("active").siblings().removeClass()
        }
    });
    $("#listCont li").click(function () {
        var ind = $(this).index();
        $(this).addClass("nav-bg").siblings().removeClass();
        mySwipers[1].slideTo(ind, 1000, false);
    });
    $("#navBar span").click(function () {
        var inds = $(this).index();
        $(this).addClass("active").siblings().removeClass();
        mySwipers[0].slideTo(inds, 1000, false);
    });
    //Iscroll

});