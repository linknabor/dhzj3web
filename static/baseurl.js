var url=/127|test/.test(location.origin)?'https://test.e-shequ.com':
    /uat/.test(location.origin)?'https://uat.e-shequ.com':
    'https://www.e-shequ.com';
var name='/dhzj3';
var namepay='/pay';

window.baseurl = {
    URL:url+name+'/wechat/hexie/wechat/',
    wuye:url+name+'/weixin/wuye/index.html?v=20160229',
    home:url+name+'/weixin/home/index.html?v=20160229',
    person:url+name+'/weixin/person/index.html?v=20160229',
    //home
    message:url+name+'/weixin/wuye/index.html#/message',
    //person
    conpons:url+name+'/weixin/group/onsalesindex.html',
    baoxiu:url+name+'/weixin/wuye/index.html?state=123#/butler?category=2',//报修
    fuwux:url+name+'/weixin/wuye/index.html?state=123#/butler?category=0',//服务需求 
    butler:url+name+'/weixin/wuye/index.html?state=123#/butler?category=1',//建议
    gotoGroupDetail:url+name+'/weixin/group/rgroupinvite.html?',//团购详情
    //wuyezhifu
    wuyezhi:url+name+'/weixin/wuye/index.html?state=123#/payEnquiry',//成功后跳转
    //personzhi
    orderpays:url+namepay+'/dhzj3orderpay.html?state=123#/repairPay?',//跳转支付
    comment:url+namepay+'/dhzj3orderpay.html?state=123#/commentxiu',//跳转评论
    order:url+namepay+'/dhzj3orderpay.html?start=123#/',//全部订单
    grouporders:url+namepay+'/dhzj3orderpay.html?start=123#/grouporders',//团购订单
    homeorders:url+namepay+'/dhzj3orderpay.html?start=123#/homeorders',//服务订单
    // wuye
    payment:url+namepay+'/dhzj3paymentdetail.html?#/?',//跳转物业支付
}
