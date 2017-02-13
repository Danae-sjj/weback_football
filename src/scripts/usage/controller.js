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
    //��������
    $http.get("./livelist.json")
        .then(function(data){
            $scope.data=data.data.data;
            $scope.arr = [];//  ����һ��������
            for (var i = 0, len = $scope.data.length / 2; i < len; i++) {
                $scope.arr[i] = [];//  arr�������д���i����ά����
                $scope.arr[i].push($scope.data[i * 2]);//  ��arr��ÿ����ά����push data�±� 0  2 4����
                $scope.data[i * 2 + 1] && $scope.arr[i].push($scope.data[i * 2 + 1]);//  �ж�data[i]�±����� ���Ҷ�������û��  �о���arr��ÿ����ά��������push data�±� 1 3 5 ����
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