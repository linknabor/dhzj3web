var pay = /127|test/.test(location.origin)?'https://test.e-shequ.com/pay/':
		  /uat/.test(location.origin)?'https://uat.e-shequ.com/weixin/':
		  'https://www.e-shequ.com/pay/';
var common =/127|test/.test(location.origin)?'https://test.e-shequ.com/weixin/':
			/test/.test(location.origin)?'https://uat.e-shequ.com/xsq/weixin/':
			'https://www.e-shequ.com/shijiazhuang/weixin/';
window.config = {
	//请求头公共部分
	baseUrl:/127|test/.test(location.origin)?'https://test.e-shequ.com/dhzj3/wechat/hexie/wechat/':
  			/uat/.test(location.origin)?'https://uat.e-shequ.com/xsq/wechat/hexie/wechat/':
  			'https://www.e-shequ.com/shijiazhuang/wechat/hexie/wechat/',
	//个人中心mon
	person_index:{			
		url1: common+'shijiazhuang'+'orderpay.html',//商品订单 团购订单 服务订单			
		url2: common+'repair/index.html',//报修单			
		url3: common+'wuye/index.html?#/myHouse',//绑定房屋 我是业主
	},
	person_footer:{			
		url1: common+'wuye/index.html',//底部导航 物业
	},
	person_register:{
		// 注册
		url1: common+'person/index.html',
	}
	
		
};


// export default config