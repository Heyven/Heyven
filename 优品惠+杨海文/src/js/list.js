$(function() {

	//导航
	$('.listthemone').each(function() {
		var iconnum = ($('.listthemone').length) / 2;
		var menuwidth = ((($('.listthemone').width()) + 28) * iconnum) - 28;
		var menupadleft = (968 - menuwidth) / 2;
		if(menuwidth < 968) {
			menupadleft = menupadleft + 'px';
			$('.menulist').css('margin-left', menupadleft);
		}
		$('.menulist').show();
	});
	$(".listthemone").each(function(i) {
		if($(this).find('.iconimghover').length > 0) {
			$(this).mouseenter(function() {
				$(this).find('.iconimghover').show(); //选中的元素无hover元素,修改为内部查找
				//                $(".iconimghover:eq(" + i + ")").show();
				$(".menuname a:eq(" + i + ")").addClass('hovercolor');
			});
			$(this).mouseleave(function() {
				$(this).find('.iconimghover').hide();
				//                $(".iconimghover:eq(" + i + ")").hide();
				$(".menuname a:eq(" + i + ")").removeClass('hovercolor');
			});
		}
	});

	//数据渲染
	//	var list = document.getElementById('pruwarp');
	//		console.log(list);
	//	var url = '../api/list.php';
	//	ajax('post', url, '', function(str) {
	//				console.log(str);
	//		var arr = JSON.parse(str);
	//		var res = arr.map(function(item) {
	//			return `<div class="goods">
	//				<img class="goods_img" src="${item.url}" />
	//					<span class="goods_name">${item.title}</span>
	//					<div class="qian_comment">
	//						<span class="goods_qian fl">￥${item.price}</span>
	//						<span class="goods_comment fr">评论<a href="">${item.comment}</a>条</span>
	//					</div>
	//					<div class="ping">
	//						<div class="fl"><span>免邮费</span></div>
	//						<div class="fr"><span>积分</span>0</div>
	//						<input type="button" name="Toshop" id="Toshop" value="加入购物车" />
	//						<div class="pingjia">
	//							<p>用户评价</p>
	//							<span><img src="../images/img/leftyin.jpg" height="9" width="13" alt="" /></span>
	//							<span class="zhongPing">好好好</span>
	//							<span><img src="../images/img/rightyin.jpg" height="10" width="14" alt="" /></span>
	//						</div>
	//					</div>
	//			</div>`;
	//		}).join('');
	//		list.innerHTML = res;
	//	});

	//数据渲染分页
	var list = getid('pruwarp');
	//	console.log(list);
	var pageBtn = getid('page');
	var btns = pageBtn.getElementsByTagName('span'); //集合通过下标找到单个的
//	console.log(btns);
	var ipage = 1;
	var inum = 6;
	var data = 'page=' + ipage + '&num=' + inum;
	ajax('post', '../api/getdata.php', data, function(str) {
		//		console.log(str);
		var datalist = JSON.parse(str);
		var arr = datalist.data;
		var res = arr.map(function(item) {
			return `<div class="goods" data-id="${item.id}">
				<img class="goods_img" src="${item.url}" />
					<span class="goods_name">${item.title}</span>
					<div class="qian_comment">
						<span class="goods_qian fl">￥${item.price}</span>
						<span class="goods_comment fr">评论<a href="">${item.comment}</a>条</span>
					</div>
					<div class="ping">
						<div class="fl"><span>免邮费</span></div>
						<div class="fr"><span>积分</span>0</div>
						<input type="button" name="Toshop" id="Toshop" value="加入购物车" />
						<div class="pingjia">
							<p>用户评价</p>
							<span><img src="../images/img/leftyin.jpg" height="9" width="13" alt="" /></span>
							<span class="zhongPing">好好好</span>
							<span><img src="../images/img/rightyin.jpg" height="10" width="14" alt="" /></span>
						</div>
					</div>
			</div>`;
		}).join('');
		list.innerHTML = res;
 
		//价格排序
		
		var idokd = false; //给个开关
		$('#jg_pai').click(function() {
			//		alert(123);
			var list = getid('pruwarp');
			$.ajax({
				type: 'post',
				async: true,
				data: 'page=' + ipage + '&num=' + inum,
				url: '../api/shengjianxu.php',
				success: function(str) {
//					console.log(str);
					var arr = JSON.parse(str);
					var res = arr.data;
				//	console.log(res);
					//var arr = datalist.data;
				//	console.log(arr);
					var res1 = res.map(function(item) {
						return `<div class="goods" data-id="${item.id}">
									<img class="goods_img" src="${item.url}" />
										<span class="goods_name">${item.title}</span>
										<div class="qian_comment">
											<span class="goods_qian fl">￥${item.price}</span>
											<span class="goods_comment fr">评论<a href="">${item.comment}</a>条</span>
										</div>
										<div class="ping">
											<div class="fl"><span>免邮费</span></div>
											<div class="fr"><span>积分</span>0</div>
											<input type="button" name="Toshop" id="Toshop" value="加入购物车" />
											<div class="pingjia">
												<p>用户评价</p>
												<span><img src="../images/img/leftyin.jpg" height="9" width="13" alt="" /></span>
												<span class="zhongPing">好好好</span>
												<span><img src="../images/img/rightyin.jpg" height="10" width="14" alt="" /></span>
											</div>
										</div>
								</div>`;
					}).join('');
					list.innerHTML = res1;
				}
			});
		});

		var pages = Math.ceil(datalist.total / datalist.num); //存总页码
		//		console.log(pages);  //11页
		var html = '';
		for(var i = 0; i < pages; i++) {
			html += `<span>${i+1}</span>`;
		}
		pageBtn.innerHTML = html;
		pageBtn.children[0].className = '';
	});

	//点击页面也可以切换内容
	pageBtn.onclick = function(ev) {
		if(ev.target.tagName == 'SPAN') {
			//			console.log(ev.target);
			var ipage = ev.target.innerHTML;
			var num = 6;
			var data = 'page=' + ipage + '&num=' + num;
			ajax('post', '../api/getdata.php', data, function(str) {
				//				console.log(str);
				var datalist = JSON.parse(str);
				var arr = datalist.data;
				//				console.log(arr[0].id);
				var res = arr.map(function(item) {
					//					var gid = item.id;
					//					console.log(gid);
					return `<div class="goods" data-id="${item.id}">
								<img class="goods_img" src="${item.url}" />
									<span class="goods_name">${item.title}</span>
									<div class="qian_comment">
										<span class="goods_qian fl">￥${item.price}</span>
										<span class="goods_comment fr">评论<a href="">${item.comment}</a>条</span>
									</div>
									<div class="ping">
										<div class="fl"><span>免邮费</span></div>
										<div class="fr"><span>积分</span>0</div>
										<input type="button" name="Toshop" id="Toshop" value="加入购物车" />
										<div class="pingjia">
											<p>用户评价</p>
											<span><img src="../images/img/leftyin.jpg" height="9" width="13" alt="" /></span>
											<span class="zhongPing">好好好</span>
											<span><img src="../images/img/rightyin.jpg" height="10" width="14" alt="" /></span>
										</div>
									</div>
							</div>`;
				}).join('');
				list.innerHTML = res;
			});
		}

		for(var i = 0; i < btns.length; i++) {
			btns[i].index = i;
			btns[i].onclick = function() {
				//排他
				for(var i = 0; i < btns.length; i++) {
					btns[i].className = '';
				}
				this.className = 'active';
			}
		}

	}

	//点击获取商品id发起数据库查询
	$('#pruwarp').on('click', '.goods', function() {
		console.log($(this));
		console.log($(this).attr('data-id'));
		var dataid = $(this).attr('data-id');
		$.ajax({
			type: "get",
			url: "../api/Togoodslist.php",
			async: true,
			data: "id=" + dataid,
			success: function(str) {
				console.log(str);
				window.localStorage.setItem('value', str);
			}
		});
		window.open('goodslist.html');
	});

});