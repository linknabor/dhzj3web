var url=/127|test/.test(location.origin)?'https://test.e-shequ.com':
    /uat/.test(location.origin)?'https://uat.e-shequ.com':
    'https://www.e-shequ.com';
var name='/dhzj3';
var namepay='/pay';

window.config = {
    URL:url+name+'/wechat/hexie/wechat/',
       
    footer:{
        person:url+name+'/weixin/person/index.html?v=20160229',
        home:url+name+'/weixin/home/index.html?v=20160229',
    },
    //person
    gotoGroupDetail:url+name+'/weixin/group/rgroupinvite.html?',//团购详情
     //wuye支付成功
    wuye_zhifu :{
        url:url+name+'/weixin/wuye/index2.html?state=123#/payEnquiry'
    }


}
