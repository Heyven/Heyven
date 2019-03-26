<?php
	include 'conn.php';//连接数据库
	
	//查询list表中的所有内容
	$sql = 'SELECT * FROM list;';
	
//	$conn->set_charset('utf8');
	//执行语句
	$res = $conn->query($sql);
	
	//结果集部分内容
	$arr = $res->fetch_all(MYSQLI_ASSOC);//结果集部分内容
	
	echo json_encode($arr, JSON_UNESCAPED_UNICODE);
?>