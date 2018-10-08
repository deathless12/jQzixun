$(function(){
	$(".leftDiv").height($(window).height());
	$(".rightDiv").height($(window).height());	

	$(".leftDiv_bottom>li").click(function(){
		var text = $(this).children().children().eq(1).html();
		if(text == "首页"){
			$(".rightDiv_content").load("pages/shouye.html")
		}else if(text == "栏目管理"){
			$(".ightDiv_content").load("pages/lanmuguanli.html")
		}else if(text == "资讯管理"){
			$(".rightDiv_content").load("pages/zixunguanli.html")
		}else if(text == "用户管理"){
			$(".rightDiv_content").load("pages/user.html")
		}
	});
	$(".leftDiv_bottom>li").eq(0).trigger("click");	
})