//编写script代码
//jQuery工厂函数
$(function(){
//立即注册按钮的点击事件
$("#registerBtn").click(function(){
//声明4个变量接收表单的数据
var username=$("#username").val();
var pwd=$("#pwd").val();
var repwd=$("#repwd").val();
//前端的简单验证
//1.非空 
if(username=="" || pwd=="" || repwd==""){
alert("输入不能为空");
//return后下面的代码不在执行
return;
}
//2.用户名长度3-16
if(username.length<3 ||username.length>16){
alert("用户名长度必须在3-16位");
return;
}
//3.密码和确认密码是否一致
if(pwd!=repwd){
alert("两次输入密码不一致");
return;
}
//执行ajax发送注册信息给后台服务器
$.ajax({
//地址
url:"../index.php",
//方式
type:"get",
//参数
data:{
username:username,
pwd:pwd
},
//成功的函数 注意res是返回的结果
success:function(res){
//如果结果是1，说明注册成功
if(res==1){
//弹出成功的窗
alert("注册成功");
}else{
//弹出失败的窗
alert("注册失败");
}  }  })  })  })