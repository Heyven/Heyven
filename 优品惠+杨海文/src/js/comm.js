$(function() {
	//鼠标滑过，显示二级导航
	$('#navcat').mouseenter(function() {
		$('.main_nav_menu').css('display', 'block');
	});
	$('#navcat').mouseleave(function() {
		$('.main_nav_menu').css('display', 'none');
	});
	$('.main_nav_menu').mouseenter(function() {
		$('.main_nav_menu').css('display', 'block');
	});
	$('.main_nav_menu').mouseleave(function() {
		$('.main_nav_menu').css('display', 'none');
	});
	
	//垂直滚动
	function picFunc(obj) {
		var scrollTimer; //定义一个时间
		scrollNews(obj);
		$(obj).hover(function() {
			//鼠标经过的时候清除定时器
			clearInterval(scrollTimer);
		}, function() {
			scrollTimer = setInterval(function() {
				scrollNews($(obj));
			}, 3000);
		}).trigger("mouseout");

		function scrollNews(obj) {
			//封装一个scrollNews参数，并把第一个ul的参数传进去
			var $self = obj.find("ul:first"); //把从obj里面找到的第一个ul赋值给$self
			//从$self里面找到第一个li,并且获取到高度
			var lineHeight = $self.find("li:first").height();
			$self.animate({
				"margin-top": -lineHeight + "px"
			}, 600, function() {
				$self.css({
					"margin-top": "0px"
				}).find("li:first").appendTo($self);
			})
		}
	}
	picFunc($('.notice_scroll'));
	
	//右侧浮动
	//滑过第一个li
	$('.fly-user').mouseenter(function() {
		$('.sidebarcom-hover').css('display', 'block');
	});
	$('.fly-user').mouseleave(function() {
		$('.sidebarcom-hover').css('display', 'none');
	});

	//滑过第二个li
	$('.fly-care').mouseenter(function() {
		$('.slide-hui').css('display', 'block');
	});
	$('.fly-care').mouseleave(function() {
		$('.slide-hui').css('display', 'none');
	});
	//滑过第三个li
	$('.fly-code').mouseenter(function() {
		$('.code-pic').css('display', 'block');
	});
	$('.fly-code').mouseleave(function() {
		$('.code-pic').css('display', 'none');
	});

	//滑过第四个li
	$('.fly-ask').mouseenter(function() {
		$('.slide-huib').css('display', 'block');
	});
	$('.fly-ask').mouseleave(function() {
		$('.slide-huib').css('display', 'none');
	});

	//点击返回顶部	 
	 $('.fly-return').click(function() {
			$('html,body').animate({'scrollTop': 0}, 2000,);
	});

	/*
	 *右侧悬浮条 个人登陆窗口关闭按钮
	 */
	$('.closex').click(function() {
		$('.sidebarcom-hover').css('display', 'none');
	});
	
	
})
