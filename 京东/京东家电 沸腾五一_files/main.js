/**
 * Created by yang.liu on 2016/1/16.
 */
var Game=Game||{};
Game.sceneGroup={};
var pageSlider;
var hashs = 3;
var hashL = getData('pageID');
var  initstate=false;
var wa;
$(function(){

//横屏提示
    new WxMoment.OrientationTip();
    var share = new WxMoment.Share();//分享

    wa = new WxMoment.Analytics({
        //projectName 请与微信商务团队确认
        projectName: "20160418JD"
    });

    //加载素材
    var basePath = "http://wximg.qq.com/wxp/moment/EJgz5GeJZ/";

    var loader = new WxMoment.Loader();

//声明资源文件列表
    var fileList = [
        'img/assets.png', 'img/p1_bg.jpg', 'img/p2_bg.jpg', 'img/p3_bg.jpg','img/p4_bg.jpg'];

    for (var i = 0; i < fileList.length; i++) {
        loader.addImage(basePath + fileList[i]);
    }

//进度监听
    loader.addProgressListener(function (e) {
        var percent = Math.round((e.completedCount / e.totalCount) * 100);
        console.log("当前加载了", percent, "%");
        //在这里做 Loading 页面中百分比的显示
    });

//加载完成
    loader.addCompletionListener(function () {
        //可以在这里隐藏 Loading 页面开始进入主内容页面
        $("#loading").remove();
        $(".wrap").show();

        if(hashL){
            initstate=true;
            pageSlider.moveTo(hashL, true);
            Game.sceneGroup["scene"+(parseInt(hashL)+1)]["sceneIn"].apply(this);
        }else{
            Game.sceneGroup["scene1"]["sceneIn"].apply(this);
        }


    });

//启动加载
    loader.start();

    var prvIndex;
    // 滑动插件
        pageSlider = new WxMoment.PageSlider({
        pages: $('.screen'),            //必需，需要切换的所有屏
        direction: 'v',          //可选，vertical 或 v 为上下滑动，horizontal 或 h 为左右滑动，默认为 vertical
        currentClass: 'current',        //可选, 当前屏的class (方便实现内容的进场动画)，默认值为 'current'
        rememberLastVisited: false,      //可选，记住上一次访问结束后的索引值，可用于实现页面返回后是否回到上次访问的页面
        animationPlayOnce: false,       //可选，切换页面时，动画只执行一次
        oninit: init(),         //可选，初始化完成时的回调
        onbeforechange: function () {}, //可选，开始切换前的回调
        onchange: function () {},       //可选，每一屏切换完成时的回调
        onSwipeUp: function () {},      //可选，swipeUp 回调
        onSwipeDown: function () {},    //可选，swipeDown 回调
        onSwipeLeft: function () {},    //可选，swipeLeft 回调
        onSwipeRight: function () {}    //可选，swipeRight 回调
    });

    pageSlider.onchange=function(){
        if(initstate){
            initstate=false;
        }else{
             if(prvIndex!=pageSlider.index){
                Game.sceneGroup["scene"+(parseInt(prvIndex)+1).toString()]["sceneOut"].apply(this);
                var ind=(pageSlider.index+1).toString();
                Game.sceneGroup["scene"+ind]["sceneIn"].apply(this);
             }
        }
    }
    pageSlider.onbeforechange=function(){
                prvIndex=pageSlider.index;
    }

});
function init(){

    var audio = $("#audio")[0];
    $(".assets-music_btn1").on("touchstart",function(){
        music_btn()
    })
}
var count=0;
function music_btn(){
    var audio = $("#audio")[0];

    if(count%2==0){
        audio.pause();
        $(".assets-music_btn1").css({"background-position": "-538px -1344px"}) ///关喇叭位置

    }else{
        audio.play();
        $(".assets-music_btn1").css({"background-position":"-467px -1344px"}) ///开喇叭位置
    }

    count+=1;
}
Game.sceneGroup["scene1"]={};
var setTime1_1,setTime1_2,setTime1_3,setTime1_4;
Game.sceneGroup["scene1"]["sceneIn"]=function(){

    $(".assets-p1_logo").show()
    $(".assets-p1_car").show()
    $(".assets-p1_img1").show()

    $(".assets-p1_img2").show()
    $(".assets-p1_img3").show()
    $(".assets-p1_qian1").show()
    $(".assets-p1_qian2").show()
    $(".assets-p1_qian3").show()
    $(".assets-p1_qian4").show()
    $(".assets-p1_qian5").show()
    $(".assets-p1_qian6").show()
    $(".assets-p1_qian7").show()
    $(".assets-p1_qian8").show()
    $(".assets-p1_row").show()
    $(".assets-p1_txt").show()

    setTime1_1= setTimeout(function(){
        $(".assets-p1_img1").addClass("assets-p1_add")
        $(".assets-p1_car").addClass("assets-p1_car-add");
    },1800)

};
Game.sceneGroup["scene1"]["sceneOut"]=function(){

    clearTimeout(setTime1_1)

    $(".assets-p1_car").removeClass("assets-p1_car-add");

    $(".assets-p1_img1").removeClass("assets-p1_add")
    $(".assets-p1_logo").hide()
    $(".assets-p1_car").hide()
    $(".assets-p1_img1").hide()
    $(".assets-p1_img2").hide()
    $(".assets-p1_img3").hide()
    $(".assets-p1_qian1").hide()
    $(".assets-p1_qian2").hide()
    $(".assets-p1_qian3").hide()
    $(".assets-p1_qian4").hide()
    $(".assets-p1_qian5").hide()
    $(".assets-p1_qian6").hide()
    $(".assets-p1_qian7").hide()
    $(".assets-p1_qian8").hide()
    $(".assets-p1_row").hide()
    $(".assets-p1_txt").hide()
};
Game.sceneGroup["scene2"]={};

var timeAdd;
var timeAdd1,timeAdd2,timeAdd3;
Game.sceneGroup["scene2"]["sceneIn"]=function(){

    $(".assets-p2_mou1").show()
    $(".assets-p2_mou2").show()
    $(".assets-p2_logo").show()
    $(".assets-p2_row").show()
    $(".assets-p2_txt").show()

    timeAdd = setTimeout(function(){
        $(".assets-p2_mou1").addClass("assets-p2_mou1-add")
    },800)
    timeAdd1 = setTimeout(function(){
        $(".assets-p2_mou2").addClass("assets-p2_mou2-add")
    },1400)


};
Game.sceneGroup["scene2"]["sceneOut"]=function(){

    $(".assets-p2_mou1").removeClass("assets-p2_mou1-add")
    $(".assets-p2_mou2").removeClass("assets-p2_mou2-add")
    clearTimeout(timeAdd)
    clearTimeout(timeAdd1)
    $(".assets-p2_img1").hide()
    $(".assets-p2_img3").hide()
    $(".assets-p2_img4").hide()
    $(".assets-p2_mou1").hide()
    $(".assets-p2_mou2").hide()
    $(".assets-p2_logo").hide()
    $(".assets-p2_row").hide()
    $(".assets-p2_txt").hide()
};
Game.sceneGroup["scene3"]={};

var setXing;
Game.sceneGroup["scene3"]["sceneIn"]=function(){

    $(".assets-p3_xing1").show()
    $(".assets-p3_xing2").show()
    $(".assets-p3_xing3").show()
    $(".assets-p3_lei").show()
    $(".assets-p3_sale").show()
    $(".assets-p3_sale1").show()
    $(".assets-p3_logo").show()
    $(".assets-p3_row").show()
    $(".assets-p3_txt").show()
    $(".assets-p3_sale2").show()
    $(".assets-p3_sale_txt").show()
    setXing=setTimeout(function(){
        $(".assets-p3_xing1").addClass("assets-p3_xing1-add")
        $(".assets-p3_xing2").addClass("assets-p3_xing2-add")
        $(".assets-p3_xing3").addClass("assets-p3_xing3-add")
        $(".assets-p3_lei").addClass("assets-p3_lei-add")
    },1500)
};
Game.sceneGroup["scene3"]["sceneOut"]=function(){


    clearTimeout(setXing)
    $(".assets-p3_sale2").hide()
    $(".assets-p3_sale_txt").hide()
    $(".assets-p3_xing1").removeClass("assets-p3_xing1-add")
    $(".assets-p3_xing2").removeClass("assets-p3_xing2-add")
    $(".assets-p3_xing3").removeClass("assets-p3_xing3-add")
    $(".assets-p3_lei").removeClass("assets-p3_lei-add")
    $(".assets-p3_xing1").hide()
    $(".assets-p3_xing2").hide()
    $(".assets-p3_xing3").hide()
    $(".assets-p3_lei").hide()
    $(".assets-p3_sale").hide()
    $(".assets-p3_sale1").hide()
    $(".assets-p3_logo").hide()
    $(".assets-p3_row").hide()
    $(".assets-p3_txt").hide()
};
Game.sceneGroup["scene4"]={};
var setT,set1;

Game.sceneGroup["scene4"]["sceneIn"]=function(){

    $(".assets-p4_logo").show()
    $(".assets-p4_btn1").show()
    $(".assets-p4_btn2").show()
    $(".assets-p4_btn3").show()
    $(".assets-p4_mou").show()
    $(".assets-p4_txt").show()
    setT=setTimeout(function(){
        $(".assets-p4_mou").addClass("assets-p4_mou-add")
    },2500)

    set1=setTimeout(function(){
        $(".assets-p4_btn1").on("touchstart",function(){
            setData('pageID',hashs);
            wa.sendEvent('click', "button_yhq")

             setTimeout(function(){
                 window.location="http://sale.jd.com/m/act/iydaGFAcu5V8f7T.html";
             },200)
        })
        $(".assets-p4_btn2").on("touchstart",function(){
            setData('pageID',hashs);
            wa.sendEvent('click', "button_wx")
            setTimeout(function(){
                window.location="http://wqs.jd.com/promote/201604/51jiadianjie/index_wx.shtml?ptag=17066.1.1 ";
            },200)
        })
        $(".assets-p4_btn3").on("touchstart",function(){
            setData('pageID',hashs);
            wa.sendEvent('click', "button_jd")
            setTimeout(function () {
                window.location="http://sale.jd.com/m/act/SXLh2PYIzs3mZE7n.html";
            },200)
        })
    },1000)
};
Game.sceneGroup["scene4"]["sceneOut"]=function(){
    clearTimeout(setT);
    clearTimeout(set1);
    $(".assets-p4_btn1").unbind("touchstart")
    $(".assets-p4_btn2").unbind("touchstart")
    $(".assets-p4_btn3").unbind("touchstart")
    $(".assets-p4_mou").removeClass("assets-p4_mou-add")
    $(".assets-p4_logo").hide()
    $(".assets-p4_btn1").hide()
    $(".assets-p4_btn2").hide()
    $(".assets-p4_btn3").hide()
    $(".assets-p4_mou").hide()
    $(".assets-p4_txt").hide()
};
function setData(key,val){
    if( window.sessionStorage){
        window.sessionStorage.setItem(key,val);
    }
}

function getData(key){
    if(window.sessionStorage){
        return window.sessionStorage.getItem(key);
    }
}


