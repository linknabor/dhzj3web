avalon.ready(function() {
	
	function queryMessage(){
		common.invokeApi("GET","getmessages",null,null,function(n){
			if(n.result!=null)
			{
				o.message=n.result;
			}else
			{
				alert("信息未发布！");
				location.href="../home/index.html";;
    			return;
			}
		},function(){
			alert("页面获取信息错误，请稍后重试！");
		})
	}
	
    o = avalon.define({
        $id: "root",
        message:{},
        messageId:"",
        feedbacks:[],
        content:""
    });
    queryMessage();
    avalon.scan(document.body),
    FastClick.attach(document.body),
    common.setTitle("");
    checkFromShare();
});