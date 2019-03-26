<?php
	include 'conn.php';
	
	$sql = 'SELECT * FROM orders';
     
    //执行语句
	$res = $conn->query($sql);
	
	//结果集部分内容
	$arr = $res->fetch_all(MYSQLI_ASSOC);//结果集部分内容
	
	echo json_encode($arr, JSON_UNESCAPED_UNICODE);
?>