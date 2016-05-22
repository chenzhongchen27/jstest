var cc=console.log.bind(console);
cc("已经加载");

require.config({
	paths:{
		bluebird:'../otherscripts/bluebird',
	}
}) 
require(['bluebird'],function(bb){
	function ajaxGetAsync(url) {
	    return new bb(function (resolve, reject) {
	        var xhr = new XMLHttpRequest;
	        xhr.addEventListener("error", reject); 
	        xhr.addEventListener("readystatechange", function(){
	        	if(xhr.readyState==4){
	        		if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
	        			console.log('连接');
	        			console.log(xhr.responseText);
	        			resolve(xhr.responseText);
	        		}
	        	}
	        });
	        xhr.open("GET", url);
	        xhr.send(null);
	    });
	}

	var log=console.log.bind(console);
	ajaxGetAsync('txt1.php').then(cc,function(){console.log('2')});

}); 
/**
 * 相比于前面的require，下面的require会提前运行。因为都是异步加载，而下面的加载更快一些。
 * @param  {[type]} mod1){	cc(mod1);               } [description]
 * @return {[type]}                   [description]
 */
require(['module1'],function(mod1){
	cc(mod1);
/*	实验module1的代码写在外面
cc(obj===mod1.obj2);
	obj.color='green';
	cc(obj);
	cc(mod1.obj2);  */
});


