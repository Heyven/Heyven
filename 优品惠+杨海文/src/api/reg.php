<?php
    //6、接收用户的相关信息，插入数据库，插入成功返回状态给前端
	include 'conn.php';
	
	//接收数据
	$username = isset($_POST['username']) ? $_POST['username'] : '';
	$psw = isset($_POST['password']) ? $_POST['password'] : '';
	
//	echo $name,$psw;//在前端的netword检测是否接收到响应
	
	//写sql语句
	$sql = "INSERT INTO login(username,passwords) VALUES('$username','$psw')";
	
	//执行
	$res = $conn -> query($sql);
	
//	var_dump($res);
	if($res) {
		//连接成功
		echo 'yes';
	}else{
		echo 'no';
	}
	

?>