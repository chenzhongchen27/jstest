
/*
 不能定义在外面，因为这样的话require也会将这些代码加载进去，将其暴露在全局变量中。
 var obj={
		color:'red',
		size:7
	}*/
define([],function(){
	return {
		color:'red',
		size:7
	}
});