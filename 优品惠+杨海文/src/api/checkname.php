<?php
	
	//2、接收用户名，查询数据库，判断用户名是否存在，返回一些信息给前端
	
	//连接数据库
	include 'conn.php';
	
	//接收用户名：isset()判断是否接收到值，接收到就用接收的数据，否则为空
//	$name = $_POST['username'];
	$name = isset($_POST['username']) ? $_POST['username'] : '';
	
	//查询数据
	//字符串的拼接
//	echo '你'.$name.'好';//你admin好
//	echo "你 $name 好";//双引号拼接
	
	$sql = "SELECT * FROM login WHERE username='$name'";
	
	//执行sql语句:结果集
	$res = $conn -> query($sql);
	
//	var_dump($res);

	//结果集的num_rows属性，如果大于0代表查到了数据，用户名存在
	if($res->num_rows) {
		//存在
		echo 'no';
	}else{
		echo 'yes';
	}
	
	//关闭结果集和数据库，避免资源浪费
//	$res->close();
//	$conn->close();
?>