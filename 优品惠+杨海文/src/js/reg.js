$(function () {
	var mobile = $('.tel');//用户名
	var btn  = $('.submit');//提交按钮
	var s0 = $('.s0');//登录结果反出来的信息
	var s1 = $('.s1');//登录结果反出来的信息
	var s2 = $('.s2');
//	console.log(btn);
//	console.log(tel);
	var mobiles = '';
	var isok = false;
	var aaa = "";

 // =======================
    
      var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
        'y', 'z'];

    drawCode();
    // 绘制验证码
    function drawCode() {
        var canvas = document.getElementById("verifyCanvas");  //获取HTML端画布
        var context = canvas.getContext("2d");                 //获取画布2D上下文
        context.fillStyle = "cornflowerblue";                  //画布填充色
        context.fillRect(0, 0, canvas.width, canvas.height);   //清空画布
        context.fillStyle = "white";                           //设置字体颜色
        context.font = "25px Arial";                           //设置字体
        var rand = new Array();
        var x = new Array();
        var y = new Array();
        aaa="";
        for (var i = 0; i < 5; i++) {
            rand[i] = nums[Math.floor(Math.random() * nums.length)]
            x[i] = i * 16 + 10;
            y[i] = Math.random() * 20 + 20;
            context.fillText(rand[i], x[i], y[i]);

            aaa+=rand[i];
        }
       
// return aaa;
        // console.log($("#verifyCanvas").text());
        //画3条随机线
        for (var i = 0; i < 3; i++) {
            drawline(canvas, context);
        }

        // 画30个随机点
        for (var i = 0; i < 30; i++) {
            drawDot(canvas, context);
        }
        convertCanvasToImage(canvas)
    }

    // 随机线
    function drawline(canvas, context) {
        context.moveTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));             //随机线的起点x坐标是画布x坐标0位置，y坐标是画布高度的随机数
        context.lineTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));  //随机线的终点x坐标是画布宽度，y坐标是画布高度的随机数
        context.lineWidth = 0.5;                                                  //随机线宽
        context.strokeStyle = 'rgba(50,50,50,0.3)';                               //随机线描边属性
        context.stroke();                                                         //描边，即起点描到终点
    }
    // 随机点(所谓画点其实就是画1px像素的线，方法不再赘述)
    function drawDot(canvas, context) {
        var px = Math.floor(Math.random() * canvas.width);
        var py = Math.floor(Math.random() * canvas.height);
        context.moveTo(px, py);
        context.lineTo(px + 1, py + 1);
        context.lineWidth = 0.2;
        context.stroke();

    }
    // 绘制图片
    function convertCanvasToImage(canvas) {
        document.getElementById("verifyCanvas").style.display = "none";
        var image = document.getElementById("code_img");
        image.src = canvas.toDataURL("image/png");
        return image;
    }

    // 点击图片刷新
    document.getElementById('code_img').onclick = function () {
        $('#verifyCanvas').remove();
        $('#verify').after('<canvas width="100" height="40" id="verifyCanvas"></canvas>')
        drawCode();
    }

   var eee =  drawCode;
      $("#verify").on("blur",function(){
             console.log($("#verify").val().toUpperCase());
             console.log(aaa);
         if($("#verify").val().toUpperCase() == aaa.toUpperCase()){
//           zhuce();
         }else if($("#verify").val().toUpperCase() !== aaa.toUpperCase()){
             alert("验证码不正确");
             return;
        
         }
      })

//账号验证
	mobile.blur(function() {
		mobiles = $.trim(mobile.val());//去空
		if(mobiles){
			if(checkReg.name(mobiles)){
				$.ajax({
					type:"post",
					url:"../api/checkname.php",
					async:true,
					data:{
						'username':mobiles
					},
					success:function(str){
						if(str == 'yes'){
							s0.text("该用户名可以注册");
							s0.css('color','#58bc58');
							isok = true;
						}else{
							s0.text("该用户名太受欢迎啦");
							s0.css('color','red');
							isok = false;
						}
					}
				});
			}
		}else{
				alert('请输入账号或者密码');
			}
	})
	
	//密码验证
	var passwords = $('.pwd');
	passwords.blur(function() {
		passwordss = $.trim(passwords.val());//去空
		if(passwordss){
			if(checkReg.psweasy(passwordss)){
				s1.text("格式正确");
				s1.css('color','#58bc58');
				isok = true;
			}else{
				s1.text("格式不对,请重新输入");
				s1.css('color','red');
				isok = false
			}
		}else{
			alert('请输入账号或者密码');
		}
	})
	
	
	//再次输入
	var password2 = $('.r_pwd');
	 password2.blur(function() {
		passwords2 = $.trim(password2.val());
		if(passwords2) {
			if(checkReg.pwwagain(passwordss, passwords2)) {
				s2.text("正确");
				s2.css('color','#58bc58');
			} else {
				s2.text("两次密码不一致");
				s2.css('color','red');
			}
		} else {
			alert('请输入账号或者密码');
		}

	})
	//点击注册
	btn.click(function() {
		var mobiles = $('.tel').val();
		var passwords2 = $('.pwd').val();
//		var btn = $.trim($verify.val());
		if(mobiles && passwords2) {
			if(isok) {
				$.ajax({
					type: "post",
					url: "../api/reg.php",
					async: true,
					data: {
						'username': mobiles,
						'password': passwords2
					},
					success: function(str) {
						console.log(str);
					}
				});
				alert('你已经注册成功！！！！');
				window.open('login.html?')
			} else {
//				console.log('该用户已存在');
			}
		} else {
			alert('请完善内容！！');
		}
	})
})
