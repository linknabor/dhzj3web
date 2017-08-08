var page = 0;
avalon.ready(function() {
	function query(type){
        common.invokeApi("GET", "messages/"+page, null, null, function(n) {
			console.log(JSON.stringify(n));
			o.zixuns1 = n.result[0];
			o.zixuns2 = n.result[1];
			o.zixuns3 = n.result[2];
			page++;
		}, function() {
        })
	}
	function queryUserInfo(){
		common.invokeApi("GET","userInfo",null,null, function(n) {
			console.log(JSON.stringify(n));
			o.city=n.result.city;
			o.xiaoquName=n.result.xiaoquName;
			o.userSectId = n.result.sect_id;
		},function(){
		})
	}
	function getBannerType() {
        common.invokeApi("GET", "banner/3", null, null, function(n) {
            o.banners = n.result;
            initSwiper();
        }, function() {})
    }

	var a = 0,
    o = avalon.define({
        $id: "root",
        
        tabs: [
           {
               name: '物业公告',
               active: true
           },
           {
               name: '业委会公告',
               active: false
           },
           {
               name: '居委会公告',
               active: false
           }
        ],
        
        changeTab: function(idx) {
            for (var i = 0, len = o.tabs.length; i < len; i++) {
                o.tabs[i].active = false;
            }
            o.tabs[idx].active = true;
            hasNext=true;
            isloadPage=false;
        },
        
        gotoThread: function()
        {
        	if(o.userSectId ==0 || o.userSectId=='' || o.userSectId==null)
        	{
        		alert("用户没有绑定房屋。");
        		return;
        	}
        	location.href="../communities/addThread.html?category=2";
        },
        
        
       jumpToDetail:function(mid) {
    	   if(mid==29){
    		   window.location.href="https://mp.weixin.qq.com/s/3N-yinJvq0jDJmh6fd6scw";
    	   }else if(mid==30){
    		   window.location.href="https://mp.weixin.qq.com/s/WTgWmG5lknKExBmOsughmQ";
    	   }else if(mid==31){
    		   window.location.href="https://mp.weixin.qq.com/s/-6gMOUi3vWJMRraOqtC2wQ";
       	   }else{
    		   window.location.href="message.html?messageId="+mid;
    	   }
       },

	   gotopay:function(isPark) {

			var payUrl = MasterConfig.C("basePageUrl")+"wuye/pay.html";
			if(isPark=="1"){
				payUrl += "?park=1"
			}
			var encodedUrl = encodeURI(payUrl);
			var authUrl = MasterConfig.C("oauthUrl")+"appid="+MasterConfig.C("appId")+"&redirect_uri="+encodedUrl+MasterConfig.C("oauthUrlPostFix");
			window.location.href=authUrl;
	   },

       banners:[],
       zixuns1:[],
       zixuns2:[],
       zixuns3:[],
       city:"上海",
       xiaoquName:"东湖e家园",
       userSectId:0,
    });
	
	function changeTab(){
		
		var section = getUrlParam("section");
    	if("0"==section){
   		
    	}else if("1"==section){
    		o.tabs[0].active = false;
    		o.tabs[1].active = true;
    		o.tabs[2].active = false;
    	}else if("2"==section){
    		o.tabs[0].active = false;
    		o.tabs[1].active = false;
    		o.tabs[2].active = true;
    	}
	}


	changeTab();
    query();
    queryUserInfo();
    getBannerType();
    avalon.scan(document.body),
    FastClick.attach(document.body),
    common.setTitle("社区物业");
    initWechat(['onMenuShareTimeline','onMenuShareAppMessage']);
    initShareConfig("互帮、互助、分享的社区大家庭，尽在东湖e家园邻里之家!",MasterConfig.C("basePageUrl")+"wuye/index.html?v=20160229",MasterConfig.C("basePageUrl")+"/static/images/share_logo3.png","邻里趣事，快来分享");
    checkFromShare();
    
});