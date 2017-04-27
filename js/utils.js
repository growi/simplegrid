	function createData(bucketsize){
		var a = new Array(bucketsize);
		var i = 0;
		while(i < a.length){
			a[i++] = { id: Math.floor((Math.random() * bucketsize) + 1), value : makestr(Math.floor((Math.random() * 12) + 1)) };
		}
		return a;
    }
	
	function makestr(n){
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for( var i=0; i < n; i++ )
			text += possible.charAt(Math.floor(Math.random() * possible.length));

		return text;
	}