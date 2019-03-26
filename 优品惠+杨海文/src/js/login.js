$(function() {
	var username = $('#J_iptUsername');
	var psw = $('#J_iptPasswd');
	var btn = $('#verify');
	//	console.log(username,psw,btn);	
	var s0 = $('.s0');
	var s1 = $('.s1');
    var aaa = ""
    var isok = false;
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
			isok1 = true;
         }else{
             alert("请输入验证码");
             return; 
         }
         
      });



	function login() {
		$("#log_sit").click(function() {
			var username = $('#J_iptUsername').val();
			var psw = $('#J_iptPasswd').val();
//			console.log(username,psw);
			if(username && psw) {
				$.ajax({
					'url': '../api/login.php',
					'type': 'post',
//					async: true,
					'data': {
							username:username,
						    psw:psw
						 },
					'success': (function (res){
//						console.log(res);
						if(res == "yes") {
							setCookie('name',username);
							location.href = 'homepage.html';
						} else {
							alert("账号或密码错误");
						}
					})
				});
			}else{
				alert('请完善信息');
			}
		});
	}
	login();
	
})