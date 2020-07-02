<?php

//引入封装的函数 注意：include_once引入方法可以防止文件名冲突

include_once "func.php";

//用3个变量来接收前端传递过来的数据

$username=$_POST['username'];

$pwd=$_GET['pwd'];

$tel=$_GET['tel'];

//插入数据库的sql语句

$sql="insert test(username,pwd,tel)value('{$username}','{$pwd}')";

//封装的插入函数insert（），里面封装好的连接数据库函数conn（）

$res=mysqli_connect("localhost", "root", "123456", "form");

//执行插入函数，返回的结果是1或者是0，我们回馈给注册页面

echo $res;

?>