console.log('test');
try {
	var Connect = function(){

	};
	Connect.prototype._init = function(){

	}

	var connectPool = new ObjectPool(Connect);
}
catch (e) {
	console.log(e.message);
}
