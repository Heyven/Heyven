<?php
/*
    点击加入购物车，先查询订单表，然后更新订单表
        get:
            gid:商品id
            num：商品数量
        返回：
            订单表的所有数量
 */

    //加入购物车，把数据写入订单表
    include 'conn.php';

    $num=isset($_GET['num']) ? $_GET['num'] : '';
    $gid=isset($_GET['gid']) ? $_GET['gid'] : '';
    $sum=isset($_GET['sum']) ? $_GET['sum'] : '';

    //查询订单表是否有该gid商品
    $sql="SELECT num,sum FROM orders WHERE gid='$gid'";
    $res=$conn->query($sql);
    $res2 = null;
    if($res->num_rows>0){
        $data = $res->fetch_all(MYSQLI_ASSOC);
        $gnum = $data[0]['num'];
        $num = $num + $gnum; //出错加  + $gnum 原来是$num = $num+ $gnum
        $gnumm = $data[0]['sum'];
        $sum = $sum + $gnumm; //出错加  + $gnum 原来是$num = $num+ $gnum
        $sql2="UPDATE orders SET num=$num,sum=$sum WHERE gid=$gid;";
        $res2=$conn->query($sql2);
    }else{
        $sql3="SELECT * FROM  list WHERE id=$gid";
        $res3=$conn->query($sql3);
        if($res3->num_rows>0){
            $data3=$res3->fetch_all(MYSQLI_ASSOC);
            $gname = $data3[0]['title'];  //需要修改
            $gprice = $data3[0]['price'];  //需要修改
            $gimg1 = $data3[0]['url'];  //需要修改
            $sum=($gprice* $num)*1;
            $sql4="INSERT INTO orders(gid,ming,price,img1,num,sum) VALUES ('$gid','$gname','$gprice','$gimg1','$num','$sum');";
            $res2=$conn->query($sql4);
        }
    }
      if($res2){
////  	 $sql8="SELECT * FROM  orders;
////  	 $res8=$conn->query($sql8);
////  	 $data8=$res8->fetch_all(MYSQLI_ASSOC);
////  	 echo json_encode($data8,JSON_UNESCAPED_UNICODE);
     echo 1;
    }else{
        echo 0;
    }


?>