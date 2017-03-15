
$(function(){
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
	});
})
//school
$(function(){
	$(".school .list:nth-child(3)").show();
	$(".school .area ul").find("li").each(function(index){
		$(this).hover(function(){
			$(this).addClass("on").siblings().removeClass("on");
			$(".school .list").hide().eq(index).show();
		})
	})
	
})

//点击加载
$(function(){
	var flag=1;

	$(".school .btn button").click(function(){
		if(flag==1){
			$(".school .list ul li:nth-child(6),.school .list ul li:nth-child(7),.school .list ul li:nth-child(8)").show();
			$(".school .btn button").text("点击收起更多");
			flag=2;
		}else if(flag==2){
			$(".school .list ul li:nth-child(6),.school .list ul li:nth-child(7),.school .list ul li:nth-child(8)").hide();
			$(".school .btn button").text("点击加载更多");
			flag=1;
		}
	})
	
})
//优选方案下拉
$(function(){
	var flag=1
	$(".select3 .select3_header .xiala").click(function(){
		if(flag==1){
			$(".select3 .good").show();
			$(this).css("transform","rotate(180deg)");
			flag=2;
		}else if(flag==2){
			$(".select3 .good").hide();
			$(this).css("transform","rotate(0deg)");
			flag=1;
		}
	})
})

	//侧边栏
$(function(){

	var flag=1;
	$(".header .btn2").click(function(){
		if(flag==1){
			$(this).attr("src","images/ico_btn2.png");
			// $(".right").css("right","0");
			$(".aa").animate({"right":"2.55rem"},500);
			$(".right").animate({"right":"0"},500);
			flag=2;
		}else if(flag==2){
			$(this).attr("src","images/ico_btn2_hov.png");
			// $(".right").css("right","-2.55rem");
			$(".aa").animate({"right":"0"},500);
			$(".right").animate({"right":"-2.55rem"},500);
			flag=1;
		}
	})
})
//footer
$(function(){
	$(".footer ul li:first-child").addClass("co");
	$(".footer ul li").each(function(index){
		$(this).click(function(){
			$(this).addClass("co").siblings().removeClass("co");
		
//			
		})
	})
	
})

//底部图标动画
$(function(){
	var flag=1;
	$(".section .section_icon img:last-child").click(function(){
		if(flag==1){
			$(this).attr("src","images/ico_btn23.png");
			$(".section .section_icon img:nth-child(1)").animate({"left":"1.21rem"},500);
			$(".section .section_icon img:nth-child(2)").animate({"left":"2.18rem"},500);
			$(".section .section_icon img:nth-child(3)").animate({"left":"3.15rem"},500);
			$(".section .section_icon img:nth-child(4)").animate({"left":"4.12rem"},500);
			$(".section .section_icon img:nth-child(5)").animate({"left":"5.09rem"},500);
			flag=2;
		}else if(flag==2){
			$(this).attr("src","images/ico_btn22.png");
			$(".section .section_icon img:nth-child(1)").animate({"left":"0.05rem"},500);
			$(".section .section_icon img:nth-child(2)").animate({"left":"0.05rem"},500);
			$(".section .section_icon img:nth-child(3)").animate({"left":"0.05rem"},500);
			$(".section .section_icon img:nth-child(4)").animate({"left":"0.05rem"},500);
			$(".section .section_icon img:nth-child(5)").animate({"left":"0.05rem"},500);
			flag=1;
		}	
	})
	$(".section .section_icon img:nth-child(5)").click(function(){
		$("html body").animate({"scrollTop":"0"},500);
	})
	
})

//弹窗
$(function(){
	$(".section .section_right").click(function(){
		$(".wind").show();
		$(".backg").show();
		$(this).animate({"right":"-0.76rem"},300);
	})
	$("#close").click(function(){
		$(".wind").hide();
		$(".backg").hide();
		$(".section .section_right").animate({"right":"0"},300);
	})
	function doAlert(){
		$(".wind").show();
		$(".backg").show();
		// setTimeout(doAlert, 1000)
	}
	var timer=setInterval(doAlert,10000);
	// setTimeout(doAlert, 1000)
	// doAlert();
})

//滚动文字
$(function(){
	function doMove(){
		$(".abroad ul li:first").animate({"marginTop":"-0.4rem"},1000,function(){
			$(this).css({"marginTop":"0rem"}).appendTo(".abroad ul");
		});
	}
	timer=setInterval(doMove,2000);
	$(".abroad ul").hover(function(){
		clearInterval(timer);
	})
	$(".abroad ul").mouseout(function(){
		timer=setInterval(doMove,2000);
	})
})

