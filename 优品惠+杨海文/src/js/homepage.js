//鼠标滑过，显示二级导航
$(function() {
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
});

//轮播图
$(function() {
	var s1 = new Swiper('.swiper-container', {
		autoplay: { //自动轮播
			delay: 3000, //间隔时间
			disableOnInteraction: false
		},
		loop: true, //无缝
		navigation: { //上下按钮
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		pagination: { //焦点跟随
			el: '.swiper-pagination',
			clickable: true, //点击焦点跳到指定图片
			renderBullet: function(index, className) {
				return '<span class="' + className + '">' + '</span>'; //生成焦点数字
			}
		},
		mousewheel: true, //滚动滑轮可以切图
		effect: 'slide' //选用:效果
	});

	var oBox = document.getElementById('swiper-container');

	oBox.onmouseover = function() { //鼠标经过停止
		s1.autoplay.stop();
	}

	oBox.onmouseout = function() { //鼠标经过离开
		s1.autoplay.start();
	}
})

//垂直滚动
$(function() {

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
			});
		};
	};
	picFunc($('.notice_scroll'));
});

//定时器
$(function() {
	//设置结束时间
	var endDate = new Date("2019/3/26 22:00:00");
	//2.定时器开启，获取当前时间。
	var timer = setInterval(show, 1000);
		//		var ser = setInterval(show, 1000);
		//3.当毫秒差值为0，清除定时器，换图片，隐藏countDown
		function show() {
			var nowDate = new Date();
			//			var hours = day.getHours();
			//			var min = day.getMinutes();
			var offset = parseInt((endDate.getTime() - nowDate.getTime()) / 1000);

			if(offset <= 0) {
				clearInterval(timer);
			};

			var second = offset % 60; //秒
			var minute = parseInt(offset / 60) % 60; //分钟
			var hour = parseInt(offset / 60 / 60) % 24; // 小时
			var day = parseInt(offset / 60 / 60 / 24);  //天

			second = second < 10 ? "0" + second : second;
			minute = minute < 10 ? "0" + minute : minute;
			hour = hour < 10 ? "0" + hour : hour;
			day = day < 10 ? "0" + day : day;
			
//			var countdownTime = document.getElementById('countdownTime');
			$('.live_back').html(`<span>${hour}:${minute}:${second}</span>`);
//			var res = `<span>${hour}:${minute}:${second}</span>`;
//          console.log(countdownTime);
//          countdownTime.innerHTML = res;

		};
	show();
});
//水平滚动
$(function() {
	function fnuxn() {
		$('.d_next').click(function(event) {
			if($('.tv_day_one_list ul').css('left') == '0px') {
				$('.tv_day_one_list ul').animate({
						'left': '-473px'
					},
					500,
					function() {});
			} else {
				$('.tv_day_one_list ul').animate({
						'left': '0px'
					},
					500,
					function() {});
			}
		});
		$('.d_prev').click(function(event) {
			document.getElementsByClassName('d_next')[0].click();
		});
	}
	fnuxn();

})

//内容数据库渲染
window.onload = function() {
	var list = document.getElementById('list');
	var url = "../api/pagehome.php";
	ajax('post', url, '', function(str) {
		//		console.log(str);
		var arr = JSON.parse(str);
		var res = arr.map(function(item) {
			return `<li>
							<div class="three_box">
								<a href="###">
									<div class="three_img_box">
										<i class="i_tv_icon"></i>
										<img class="lazy-loading" src="${item.url}" data-original="https://img.ugoshop.com/images/201703/1490142958750133449.jpg" alt="怀山堂 铁棍怀山粉健康·82条" title="惠买怀山堂 铁棍怀山粉健康·82条" style="display: block;">
									</div>
									<p class="three_box_tit">
										<em class="img_tit">${item.title}</em>
									</p>
									<p class="three_subtit">${item.name}</p>
									<div class="three_yen">
										<span class="fl three_price"><i>¥</i>${item.price}</span>
										<span class="fl sale_price">
		                                <p class="i_pos_abs">                                                                           </p>
		                                <span class="fl five_star mt5"></span>
										<span class="or_p"></span><em class="line_price">${item.oldprice}</em>
										</span>
										<span class="fr purchased"><i>26人</i>已购买</span>
									</div>
								</a>
							</div>
						</li>`;
		}).join(''); //将数组转成字符串
		list.innerHTML = res;
	});
}

$(function() {
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
		$('html,body').animate({
			'scrollTop': 0
		}, 2000, );
	});

	/*
	 *右侧悬浮条 个人登陆窗口关闭按钮
	 */
	$('.closex').click(function() {
		$('.sidebarcom-hover').css('display', 'none');
	});

	//点击美食，跳转列表表页
	var main_nav = document.getElementById('main_nav'); //得到一个元素
	var nav = document.getElementsByClassName('main_nav');
	//  console.log(nav);
	var aList = nav[0].getElementsByTagName('ul')[0].children;
	//  console.log(aList);
	//  console.log(aList);
	for(var i = 0; i < aList.length; i++) {
		//给每一个i绑定一个点击事件
		aList[i].index = i;
		//		console.log(aList[i]);
		aList[i].onclick = function() {
			//传参数给列表页：点击哪一个就把对应的商品数据传给列表页
			var good = list[this.index]; //核心
			var str = objToStr(good);
			window.open('list.html?' + str);
			//排他
			for(var i = 0; i < aList.length; i++) {
				aList[i].className = '';
			}
			this.className = 'active';
		}
	}

	//取cook
	var isok = false;

	function getcook() {
		var names = getCookie('name');
		if(names) {
			$("#login").html(names);
			$("#reg").html("退出");
			$("#denglu").html(names);
			$("#zhuce").html("退出");
			isok = false;
		} else {
			$("#login").html("登录");
			$("#reg").html("注册");
			$("#denglu").html("请" + "登录");
			$("#zhuce").html("注册");
			isok = true;
		}
	}
	getcook();

	$('#login').on('click', function() {
		//点击登录按钮回到首页
		if(isok) {
			location.href = 'homepage.html';
		}
	});

	$('#reg').on('click', function() {
		//点击登录按钮回到首页
		if(isok) {
			location.href = 'reg.html';
		} else {
			removeCookie('name');
			getcook();
		}
	});

})