$(function() {
	$.ajax({
		url: '../api/cart_xr.php',
		type: 'get',
		async: true,
		success: function(str) {

			//			console.log(arr);
			show(str);
		}
	});
	var shopping = $('.shopping');
	//	console.log(shopping);

	function show(str) {
		var arr = JSON.parse(str);
		//		console.log(arr[3].sum);
		var res = arr.map(function(item) {
			return `<div class="shopping_con clearfix" id= "${item.gid}" data-role="product" data-attr="">
								<div class="c_meg">
									<dl>
										<dt>
                                <a href="/goods-139864.html">
                                    <img src="${item.img1}" width="78" height="78">
                                </a>
                            </dt>
										<dd>
											<p class="m_tit">
												<a href="/goods-139864.html">${item.ming}</a>
											</p>
										</dd>
									</dl>
								</div>
								<div class="c_price">
									<p class="c_price_num">¥<i>${item.price}</i></p>
								</div>
								<div class="c_quantity">
									<div class="c_amount clearfix">
										<a href="javascript:void(0)" class="jian">-</a>
										<input type="text" name="amt" value="${item.num}" class ="shuliang">
										<a href="javascript:void(0)" class="jia">+</a>
									</div>
								</div>
								<div class="c_sum">
									<p>¥ <i>${item.sum}</i></p>
								</div>
								<div class="c_action">
									<i class="i_del" data-role="del">删除</i>
								</div>
								<div class="c_check">
									<input data-role="product" type="checkbox"></div>
							</div>`
		}).join('');
		$('.shopping').html(res);

		// 初始化
		beg();

		function beg() {
			$('.c_amount').on('keyup', '.nownum', function() {
				Totalpric($(this));
			});

			// 4.删除当行
			$('.shopping_con').on('click', '.i_del', function() {
				var res = confirm('您确定要删除吗？');
				if(res) {
					let id = $(this).parent().parent().attr('id');
					console.log(id);
					ajax(id, 'dele');
					$(this).parent().parent().remove();
				}

				allNum();

				// 

			});

			//数量+
			$('.c_amount').on('click', '.jia', function() {
				// console.log($(this));
				var num = $(this).prev().val() * 1;
				// console.log(num);
				num++;
				if(num >= 100) {
					num = 100;
				} else {}
				$(this).prev().val(num); //写了参数就是赋值；
				// console.log(num);	
				Totalpric($(this));
				let jiage = $(this).parent().parent().prev().children().children().html();
				let zonjia = num * jiage;
				let id = $(this).parent().parent().parent().attr('id');
				$(this).parent().parent().next().children().children().html(zonjia);
				var ab = $(this).parent().parent().next().children().children().html();
				console.log(ab);
				console.log(num)
				console.log(id)
				ajax(id,'add',num,ab);

			});

			//数量-
			$('.c_amount').on('click', '.jian', function() {
				 console.log($(this));
				var num = $(this).next().val() * 1;
				 console.log(num);
				
				num--;
				if(num <= 1) {
					num = 1;
				}
				$(this).next().val(num); //写了参数就是赋值；
//				 console.log(num);
				Totalpric($(this));
				let jiage = $(this).parent().parent().prev().children().children().html();
				let zonjia = num * jiage;
				let id = $(this).parent().parent().parent().attr('id');
				$(this).parent().parent().next().children().children().html(zonjia);
				var ab = $(this).parent().parent().next().children().children().html();
				console.log(id);
				ajax(id, 'minus', num,ab);
			});

			//小计的改变
			// 加减公用
			function Totalpric(now) {
				var shuliang = now.parent().find('input').val() * 1; //商品数量
				var c_price_num = now.parent().prev().children().text().slice(1); //单价
				var totalPrice = (shuliang * c_price_num).toFixed(2); //总价
				now.parent().next().children().children().html('￥ ' + totalPrice);
				allNum();
				// console.log(num, price, totalPrice);

			}

			function update() {
				if($('.shopping .addnum').size() <= 0) {
					$('.cart_con').css('display', 'none');
				} else {
					$('.cart_con').css('display', 'block');
				}
			}
			// 5.全选不选
			$('.quanxian').on('click', function() {
				if($('.shopping input').prop('checked')) {
					//全选
					$('.shopping_con input').prop('checked', false);
				} else {
					//全部选
					$('.shopping_con input').prop('checked', true);
				}
				allNum();
			});

			//全选
			$('.c_check input').on('click', function() {
				var checkLe = $('.c_check input:checked').size();
				if(checkLe == $('.c_check input').size()) {
					$('.quanxian').prop('checked', true);
				} else {
					$('.quanxian').prop('checked', false);
				}
				allNum();
			});

			// 6总数量和总价的更新
			var arr = [];

			function allNum() {
				arr = [];
				$('.c_check input').each(function(i, item) {
					if($('.c_check input').eq(i).prop('checked')) {
						arr.push(i);
					}
				});
				// console.log(arr);
				var num = 0;  //存数量
				var priceAll = 0;//寸价格
				console.log(arr);

				arr.forEach(function(item) {
					num += ($('.shuliang').eq(item).val() * 1);
					priceAll += ($('.c_sum').eq(item).find('i').html() * 1);
					//					console.log($('.c_sum').eq(item).find('i').html()*1);
					//					console.log($('.shuliang').eq(item).val());
				})
				// console.log('总价格是：'+priceAll);
				// console.log('总数量是：'+num);

				$('.c_piece i').html(num);
				$('#paymoney i').html(priceAll);
				$('.fs_14').html(priceAll);
			}

			// 6.全删
			$('#delall').on('click', function() {
				var res = confirm('您确定要删除多个商品吗？');
				if(res) {
					for(var i = arr.length - 1; i >= 0; i--) { //从末尾开始删除元素
						$('.shopping').eq(arr[i]).remove();
					}
				}
				arr = [];
				allNum();
				update();
				let id = $(this).parent().parent().parent().parent().attr('data-id');
				//  console.log(id);
				ajax(id, 'deldeall');

			});

			// 7清空购物车
			$('#delall').on('click', function() {
				var res = confirm('你确定要清除购物车吗？');
				if(res) {
					for(var i = arr.length; i >= 0; i--) {
						$('.shopping').remove();
					}
				}
				arr = [];
				allNum();
				update();
				let id = $(this).parent().parent().parent().parent().attr('data-id');
				//  console.log(id);
				ajax(id, 'deldeall');

			});

		}

	}

	function ajax(id, str,num,ab) {
		$.ajax({
			type: "post",
			url: "../api/updatecar.php",
			data: "gid="+id+"&str="+str+"&num="+num+"&sum="+ab,
			success: function(str) {
				console.log(str);
			}
		});
	} 
//	$('#addCart').on('click', function() {
//		
//		alert(123); 	
//	});
	
})