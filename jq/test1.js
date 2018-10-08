
$(function () {
        $('#biao').highcharts({
            title: {
                text: 'Monthly Average Temperature',
                x: -20 //center
            },
             credits:{
                enabled:false
            },
            subtitle: {
                text: 'Source: WorldClimate.com',
                x: -20
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Temperature (°C)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '°C'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Tokyo',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }, {
                name: 'New York',
                data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
            }, {
                name: 'Berlin',
                data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
            }, {
                name: 'London',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]
        });
    //      $('.contentRight_top').highcharts({
     
    // });
        $('#shouyeXial').highcharts({
            chart: {
            zoomType: 'xy'
            },
            title: {
                text: 'Average Monthly Weather Data for Tokyo'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
            xAxis: [{
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value}°C',
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                title: {
                    text: 'Temperature',
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                opposite: true

            }, { // Secondary yAxis
                gridLineWidth: 0,
                title: {
                    text: 'Rainfall',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    format: '{value} mm',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                }

            }, { // Tertiary yAxis
                gridLineWidth: 0,
                title: {
                    text: 'Sea-Level Pressure',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                labels: {
                    format: '{value} mb',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                x: 120,
                verticalAlign: 'top',
                y: 80,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            series: [{
                name: 'Rainfall',
                type: 'column',
                yAxis: 1,
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                tooltip: {
                    valueSuffix: ' mm'
                }

            }, {
                name: 'Sea-Level Pressure',
                type: 'spline',
                yAxis: 2,
                data: [1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2, 1013.1, 1016.9, 1018.2, 1016.7],
                marker: {
                    enabled: false
                },
                dashStyle: 'shortdot',
                tooltip: {
                    valueSuffix: ' mb'
                }

            }, {
                name: 'Temperature',
                type: 'spline',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                tooltip: {
                    valueSuffix: ' °C'
                }
            }]
            });
        $('.shouyeXia1').highcharts({
         chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Browser market shares at a specific website, 2014'
            },
            tooltip: {
        	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                data: [
                    ['Firefox',   45.0],
                    ['IE',       26.8],
                    {
                        name: 'Chrome',
                        y: 12.8,
                        sliced: true,
                        selected: true
                    },
                    ['Safari',    8.5],
                    ['Opera',     6.2],
                    ['Others',   0.7]
                ]
            }]
        });
        $('.shouyeXia2').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
              credits:{
                    enabled:false
                },
            title: {
                text: 'Browser market shares at a specific website, 2014'
            },
            tooltip: {
        	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                data: [
                    ['Firefox',   45.0],
                    ['IE',       26.8],
                    {
                        name: 'Chrome',
                        y: 12.8,
                        sliced: true,
                        selected: true
                    },
                    ['Safari',    8.5],
                    ['Opera',     6.2],
                    ['Others',   0.7]
                ]
            }]
        });
    function xianshi() {
        $.get("http://120.78.164.247:8099/manager/category/findAllCategory",function(results){
          var res = results.data;
           $(".myTbody tr").each(function(index,item){
                $(item).not(".trr").remove();
            });
           $("#fuName").children().not(":first").remove();
           $("#fuName2").children().not(":first").remove();
            $("#zixunParent").children().not(":first").remove();
          res.forEach(function(item){
             var newtr = $(".trr").clone(true);
                newtr.children().eq(0).children().val(item['id']);
                newtr.children().eq(1).html(item['name']);
                if(!item['parent']){
                 newtr.children().eq(2).html("无");
                }else{
                  newtr.children().eq(2).html(item['parent']["name"]);
                }
                newtr.children().eq(3).html(item['comment']);
                $(".myTbody").append(newtr);
                $(newtr).attr("class","");
                var option="<option value='"+item.id+"'>"+item.name+"</option>";
                $("#fuName").append(option);
                $("#fuName2").append(option);
                $("#zixunParent").append(option);
             });
          // console.log(res);    
        })
    };
    $(".xiaLeft>li").eq(1).click(function(){
        xianshi();
    });
    $("tbody").delegate(".xiugai","click",function(){
        var id1 =  $(this).parents("tr").children().eq(0).children().val();
        var name = $(this).parents("tr").children(":nth-child(2)").html();
        var funame = $(this).parents("tr").children().eq(2).val();
        var funameVal = $(this).parents("tr").children().eq(2).html();
        var miaosu = $(this).parents("tr").children().eq(3).html();
        $("#lanmuName2").val(name);
        $("#message-text2").val(miaosu);
        $("#fuName2 :selected").html(funameVal);
        $(".modal2").modal("show");
        $(".xiugaiQue").click(function(){
        var data = {
            id:id1,
            name:$("#lanmuName2").val(),
            comment:$("#message-text2").val(),
            no:178,
            parentId:$("#fuName2 :selected").val()
        }
        $.post("http://120.78.164.247:8099/manager/category/saveOrUpdateCategory",data,function(results){
            $(".modal1").modal("hide");
            xianshi();
        });
        $(".modal2").modal("hide");
        })    
	});
    $("tbody").delegate(".shanchu","click",function(){
        var id = $(this).parents("tr").children(":first").children().val();
        var o = {
            id:Number(id)
        }
        $.get("http://120.78.164.247:8099/manager/category/deleteCategoryById",o,function(results){
            xianshi();
            console.log(results)
        });
    });
    $(".addData").click(function(){
    	var data = {
    		name:$("#lanmuName").val(),
    		comment:$("#message-text").val(),
    		no:001,
    		// parent:$("#fuName").val()
            parentId:$("#fuName").val()
    	}
    	$.post("http://120.78.164.247:8099/manager/category/saveOrUpdateCategory",data,function(results){
    		$(".modal1").modal("hide"); 
            xianshi();
    	});
    });
    $(".pishan").click(function(){
        var ids = [];
    	$(".fuxuan:checked").each(function(index,item){
            var id = $(item).val();
            ids.push(id);
        });
        var o = {
            ids:ids.toString()
        }
        $.post("http://120.78.164.247:8099/manager/category/batchDeleteCategory",o,function(results){ 
            xianshi();
            console.log(results)
        });
    });
    function userXianshi(){
        $(".userHide").nextAll().each(function(index,item){
            $(item).remove();
        });
          // console.log( $(".fourContent .userContent"));
        $.get("http://120.78.164.247:8099/manager/user/findAllUser",function(results){
            var userRes = results.data;
            userRes.forEach(function(item,index){
            var newDes = $(".userHide").clone(true);
            if(item.username){
                newDes.find("dd").eq(0).html(item.username);
            }else{
                 newDes.find("dd").eq(0).html("尼古拉斯.没有名字");
            }
            if(item.nickname){
                newDes.find("dd").eq(1).html(item.nickname);
            }else{
                 newDes.find("dd").eq(1).html("尼古拉斯.没有名字");
            }
            // newDes.find("dd").eq(1).html(item.nickname);
            if(item.email){
                newDes.find("dd").eq(2).html(item.email);
            }else{
                newDes.find("dd").eq(2).html("没有填哦！");
            }
            if(item.enabled){
                if(item.enabled){
                    newDes.find(".kaione").removeClass("hidden");
                    newDes.find(".kaitwo").addClass("hidden");
                }
            }
            newDes.find(".yincang").val(item.id);
            newDes.find("dd").eq(3).children("span").html(item.enabled);
            if(item.userface){
                newDes.find("img").attr("src",item.userface);
            }else{
                newDes.find("img").attr("src","images/touxiang.png");
            }
            $(".fourContent").append(newDes);
            $(newDes).removeClass("userHide");
           });
           console.log(userRes) 
        })
    }
    $(".xiaLeft>li").eq(3).click(function(){
        userXianshi();
    });
    $(".userAdd").click(function(){
        $("#username").val("");
        $("#realname").val("");
        $("#email").val("");
        $("#userface").val("");
        id=false
        $("#modal3").modal("show");
        $(".userTitle>span").html("添加用户");
    })
    $(".userQue").click(function(){
        var pwd = $("#password").val();
        var pwd2 = $("#again").val();
        if(id){
            var data = {
                id:id,
                username:$("#username").val(),
                password:$("#password").val(),
                nickname:$("#realname").val(),
                email:$("#email").val(),
                userface:$("#userface").val()
            }
        }else{
           var data = {
                username:$("#username").val(),
                password:$("#password").val(),
                nickname:$("#realname").val(),
                email:$("#email").val(),
                userface:$("#userface").val()
            }
         } 
        if(pwd !== pwd2){
            alert("error")
        }else{
            $.post("http://120.78.164.247:8099/manager/user/saveOrUpdateUser",data,function(results){
                userXianshi();
            })
            $("#modal3").modal("hide"); 
        }  // enabled:$("#userface").val()
    });
    $(".kaione").click(function(){
        $(this).addClass("hidden");
        $(this).siblings().not(".yincang").removeClass("hidden")
    });
    $(".kaitwo").click(function(){
        $(this).addClass("hidden");
         $(this).siblings().not(".yincang").removeClass("hidden")
    });
    var id;
    $(".desshan").click(function(){
        var id = $(this).siblings().children().children(".yincang").val();
         var o = {
            id:Number(id)
        }
        console.log(id);
        $.get("http://120.78.164.247:8099/manager/user/deleteUserById",o,function(){
            userXianshi();
        })
    });
    $(".desxiu").click(function(){
        var name = $(this).siblings().children("dd").eq(0).html();
        var realname = $(this).siblings().children("dd").eq(1).html();
        var email = $(this).siblings().children("dd").eq(2).html();
        var addr = $(this).parents().prev().children().attr("src");
        $(".userTitle>span").html("修改用户");
        $("#username").val(name);
        $("#realname").val(realname);
        $("#email").val(email);
        $("#userface").val(addr);
        $("#password").val("");
        $("#again").val("");
        var id2 = $(this).siblings().children().children(".yincang").val();
        id=id2;
        $("#modal3").modal("show");
    });
    function zixunXianshi() {
        var obj = {
            page:16,
            pageSize:10
        }
        $.get("http://120.78.164.247:8099/manager/article/findArticle",obj,function(results){
          var res = results.data.list;
           $(".myTbody2 tr").each(function(index,item){
                $(item).not(".zixunTr").remove();
            });
          res.forEach(function(item){
             var newtr = $(".zixunTr").clone(true);
                newtr.children().eq(0).children().val(item['id']);
                newtr.children().eq(1).html(item['title']);
                if(item.category){
                    newtr.children().eq(2).html(item.category.name);
                    // newtr.children().eq(2).val(item.category.id)
                }else{
                    newtr.children().eq(2).html("无");
                }
                if(item['music']){
                    newtr.children().eq(3).html(item['music']);
                }else{
                    newtr.children().eq(3).html("无");
                }
                if(item['author']){
                    newtr.children().eq(4).html(item['author']);
                }else{
                    newtr.children().eq(4).html("无");
                }
                newtr.children().eq(5).html(item['publishtime']);
                newtr.children().eq(6).html(item['readtimes']);
                $(".myTbody2").append(newtr);
                $(newtr).attr("class","");
             });
          console.log(res);    
        })
    }
    $(".xiaLeft>li").eq(2).click(function(){
        xianshi(); 
        zixunXianshi();
    });
    $(".listImg_left").click(function(){
        $(".listImg_left i").removeClass("hidden");
        $(".listImg_right i").addClass("hidden");
        key=true;
    })
    $(".listImg_right").click(function(){
        $(".listImg_right i").removeClass("hidden");
        $(".listImg_left i").addClass("hidden");
        key=false;
    })
    var key;
    $(".zixunQue").click(function(){
        var style;
        if(key){
            style="style-one"
        }else{
            style="style-two"
        }
        if(zixunId){
            var o ={
                id:zixunId,
                title:$("#title").val(),
                categoryId:$("#zixunParent :selected").val(),
                music:$("#music").val(),
                liststyle: style
            }
        }else{
            var o ={
                title:$("#title").val(),
                categoryId:$("#zixunParent :selected").val(),
                music:$("#music").val(),
                liststyle: style,
                content:$("#zhengwen").val()
            }
        }
        $.post("http://120.78.164.247:8099/manager/article/saveOrUpdateArticle",o,function(results){
            console.log(results);
            zixunId=false;
            zixunXianshi();
        })
       $(".modal4").modal("hide")
    })
    $("body").delegate(".zixunShanchu","click",function(){
        var id = $(this).parents("tr").children(":first").children().val();
        var o = {
            id:Number(id)
        }
        $.get("http://120.78.164.247:8099/manager/article/deleteArticleById",o,function(results){
            zixunXianshi();
            console.log(results)
        });
    });
    var zixunId;
    $("body").delegate(".zixunXiugai","click",function(){
        $(".modal4").modal("show");
        var id1 =  $(this).parents("tr").children().eq(0).children().val();
        var music =  $(this).parents("tr").children().eq(3).children().val();
        var name = $(this).parents("tr").children(":nth-child(2)").html();
        var parent = $(this).parents("tr").children().eq(2).val();
        var parentVal = $(this).parents("tr").children().eq(2).html();
        zixunId=id1;
        // var readTime = $(this).parents("tr").children().eq(6).html();
        // var publishTime = $(this).parents("tr").children().eq(5).html();
        $("#title").val(name);
        $("#zixunParent :selected").html(parentVal);
        $("#music").val(music);
        $(".zixunTitle>span").html("修改资讯");
    });
    $(".zixunAdd").click(function(){
        $("#title").val("");
        $("#zixunParent :selected").html("");
        $("#music").val("");
        $("#zhengwen").val("")
        $(".zixunTitle>span").html("发布资讯");
    })
    $(".zixunPishan").click(function(){
        var ids = [];
        $(".fuxuan2:checked").each(function(index,item){
            var id = $(item).val();
            ids.push(id);
        });
        var o = {
            ids:ids.toString()
        }
        $.post("http://120.78.164.247:8099/manager/article/batchDeleteArticle",o,function(results){ 
            zixunXianshi();
            console.log(results)
        });
    });
})

