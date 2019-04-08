var url=/127|test/.test(location.origin)?'https://test.e-shequ.com':
    /uat/.test(location.origin)?'https://uat.e-shequ.com':
    'https://www.e-shequ.com';
var name='/dhzj3';
var namepay='/pay';

window.config = {
    URL:url+name+'/wechat/hexie/wechat/',
    //person
    gotoGroupDetail:url+name+'/dhzj3/weixin/group/rgroupinvite.html?',//团购详情
    home:url+name+'/dhzj3/weixin/home/index2.html?v=20160229',
     //wuye支付成功
     wuye_zhifu:{
        url:url+name+'/weixin/wuye/index2.html?state=123#/payEnquiry'
    }


}
