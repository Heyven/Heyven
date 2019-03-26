window.onload = function() {
	$(function() {
		//接受数据
		var yunlist = window.localStorage.getItem('value');
		//		console.log(yunlist);
		var dataobj = JSON.parse(yunlist);
		//		console.log(dataobj);
		$.each(dataobj, function(i, item) {
			// console.log(item.id)
			$('.main_main').attr('id', item.id);
			$('#small-img').attr('src', item.url);
			$('#title').html(item.title);
			$('#price').html(item.price);
		});
	});

	$(function() {
		//放大镜
		var magnifierConfig = {
			magnifier: "#magnifier1", //最外层的大容器
			width: 400, //承载容器宽
			height: 400, //承载容器高
			moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
			zoom: 4 //缩放比例
		};

		var _magnifier = magnifier(magnifierConfig);

		//点击加减可以添加商品数量
		var less = $('#lessBtn');
		var add = $('#addBtn');
		var shu = $('#goodsNumberInput');
		//  console.log(less,add,shu);
		less.click(function() {
			if(shu.val() != '1') {
				shu.val(parseInt(shu.val()) - 1);
			}
		});
		add.click(function() {
			shu.val(parseInt(shu.val()) + 1);
		});

		//评论区的渲染
		var goodslist = [{
			title: '家人喜欢，味道好，怀山堂二次购买了',
			imgurl: '../images/comment-list.jpg',
			time: '2019-03-20 04:55:07',
		}, {
			title: '家人喜欢，味道好，怀山堂三次购买了',
			imgurl: '../images/comment-list.jpg',
			time: '2019-03-21 04:55:07',
		}, {
			title: '喜欢，味道好',
			imgurl: '../images/comment-list.jpg',
			time: '2019-03-22 04:55:07',
		}, {
			title: '棒棒哒',
			imgurl: '../images/comment-list.jpg',
			time: '2019-03-23 04:55:07',
		}, {
			title: '东西很好，很便宜',
			imgurl: '../images/comment-list.jpg',
			time: '2019-03-24 04:55:07',
		}, {
			title: '家人喜欢，味道好，怀山堂三次购买了',
			imgurl: '../images/comment-list.jpg',
			time: '2019-03-24 04:55:07',
		}, {
			title: '家人喜欢，味道好，怀山堂三次购买了',
			imgurl: '../images/comment-list.jpg',
			time: '2019-03-25 04:55:07',
		}, {
			title: '物流很快',
			imgurl: '../images/comment-list.jpg',
			time: '2019-03-25 04:55:07',
		}];
		var commenlist = getid('comment-list');
		var res = goodslist.map(function(item) {
			//			console.log(res);
			return `<li>
						<div class="descrption">
							<p class="text">
								${item.title}
							</p>
							<ul class="clearfix">
								<li>
									<i class="triangle-down"></i>
									<img src="${item.imgurl}" alt="" title="">
								</li>
							</ul>
							<p class="datetime">${item.time}</p>
						</div>
						<div class="attr fl">
							<p>
								&nbsp;
							</p>
							<p>
								&nbsp;
							</p>
						</div>
						<div class="author fl">
							<span>134****9358</span>
							<i class="comment-star comment-star-5"></i>
						</div>
					</li>`;
		}).join('');
		commenlist.innerHTML = res;

		/*
		 * 先获取商品的id，价格，名字等，
		 * 点击的时候把商品的属性传到购物车里
		 */
		var newcl = 'addbtn';
		//		console.log(newcl);
		var item_sum = 0;
		var gid = window.localStorage;
		//		console.log(gid);
		var pid = JSON.parse(gid.value);
		var eid = pid[0].id;

		//      var get = localStorage.get('username');
		$(".addCart").on('click', function(even) {
			var go_wu_che = $('.go_wu_che');
			item_sum = item_sum + Number($('#goodsNumberInput').val());
			var sum = $('#goodsNumberInput').val() * $('#price').val();
			//			console.log(sum);
			//			console.log(item_sum, Number($('#goodsNumberInput').val()));
			$.ajax({
				type: 'get',
				data: 'gid=' + eid + '&num=' + item_sum + '&sum=' + sum,
				url: '../api/ordercar.php',
				success: function(str) {
					//					console.log(str);

					go_wu_che.get(0).innerHTML += item_sum;
				}
			});

			//判断有没有登录
			/*
			 * 有登录就跳转
			 * 没有就弹出登录页面登录
			 */

			var name = getCookie('name')
			console.log(name);
			if(name) {
				alert('登录成功');
			} else {
				alert('请登录');
				location.href = 'login.html';
			};
		});

		//点击购物车按钮，进入购物车
		$('.fly-car').on('click', function(even) {
			location.href = 'ShoppingCart.html';
		});
	});

	//吸顶
	let navtop = $('.tab').offset().top;
	//  console.log(navtop);
	$(document).on('scroll', function() {
		let top = $(document).scrollTop();
		if(top >= navtop) {
			$('.tab').css({
				'position': 'fixed',
				'left': '480px',
				'top': 0,
				'width': '998px',
				'z-index': '999'
			});
		} else {
			$('.tab').css({
				'position': 'initial',
				'width': '790px'
			});
		};
	});
	//点击哪个，跳转到对应的内容
	var menu = document.getElementById('tab-select'); //获取按钮
	var btns = menu.getElementsByTagName('a');
	console.log(btns);
	let pinglun = $('#comment'); //获取内容
	let service = $('#service');
    
    
	for(var i = 0; i < btns.length; i++) {
		btns[i].index = i; //给每一个绑定索引
		btns[i].onclick = function() {
			console.log(this.index);
			clear();
			this.className = 'active';
//			var top = pinglun[this.index].offset().top;
//			var top = service[this.index].offset().top;
		};
	};

	function clear() {
		for(var i = 0; i < btns.length; i++) {
			btns[i].className = '';
		};
	};
};