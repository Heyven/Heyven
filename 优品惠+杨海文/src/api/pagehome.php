<?php
//	default.charset="UTF-8";
	include 'conn.php';
		
	//查询homepage的所有内容
	$sql = "SELECT * FROM homepage";
//	$conn->set_charset('utf8');
	//执行语句
	$res = $conn->query($sql);		//结果集
//	var_dump($res);
	
    $arr = $res->fetch_all(MYSQLI_ASSOC);//结果集部分内容
//	var_dump($arr);
	
	echo json_encode($arr, JSON_UNESCAPED_UNICODE);
	
?>
