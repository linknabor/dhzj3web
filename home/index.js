avalon.ready(function() {
	
	function query(){
		common.invokeApi("GET","pageconfig/daojia",null,null,function(n){
			o.banners = n.result.banners;
			o.jingxuan1=n.result.jingxuan1;
			o.jingxuan2=n.result.jingxuan2;
			initSwiper();
		},function(){
			alert("页面获取信息错误，请稍后重试！");
		})
	}
	
	function queryMessage(){
		common.invokeApi("GET","getmessages",null,null,function(n){
			o.jingxuan3=n.result.smallImage;
			initSwiper();
		},function(){
			alert("页面获取信息错误，请稍后重试！");
		})
	}
	
    var o = avalon.define({
        $id: "root",
        
        banners:[],
        jingxuan1:{},
        jingxuan2:{},
        jingxuan3:'',
        gotoPage:function(url){
        	if(url =='')
        	{
        		location.href="build.html";
        		//alert("敬请期待！");return;
        	}else
        	{
        		location.href=url;
        	}
        },
        gotoProject:function(type){
        	if(type=="2")
        	{
        		location.href="hotel.html";
        	}else if(type=="3"){
        		if(o.jingxuan3=='')
        		{
        			alert("未发布联络信息！");
        			return;
        		}
        		location.href=o.jingxuan3;
        	}else
        	{
        		location.href="build.html";
        		//alert("敬请期待！");
        	}
        }
    });
	query();
	queryMessage();	
    initWechat(['onMenuShareTimeline','onMenuShareAppMessage']);
    initShareConfig("鲜花、汽车、健康、维修、洗衣、家政...点亮生活，尽在东湖e家园管家服务！",MasterConfig.C("basePageUrl")+"home/index.html?v=20160229",MasterConfig.C("basePageUrl")+"/static/images/share_logo1.png","足不出户即享简单便捷的居家生活");
    avalon.scan(document.body),
    common.setTitle("生活服务");
    checkFromShare();
});