<?php
	
	//连接数据库
	include 'conn.php';
	
	//接收数据
	$username = isset($_POST['username']) ? $_POST['username'] : '';
	$psw = isset($_POST['psw']) ? $_POST['psw'] : '';
//  echo $username;
//  echo $psw;
	
//	写查询语句
	$sql = "SELECT * FROM login WHERE username = '$username' and passwords = '$psw';";
	
	//执行：内部编译
	$res = $conn->query($sql);//结果集
//	 echo $res;
//	 var_dump($res);
	
	if($res->num_rows){
		echo 'yes';//用户名密码都正确，可以登陆
	}else{
		echo 'no';//不正确，不可以登陆
	}
?>