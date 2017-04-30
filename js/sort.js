function mergesort_two(arr, f){
	if(arr.length >= 2){
		var a1 = arr.slice(0, Math.floor(arr.length/2));
		var a2 = arr.slice(Math.floor(arr.length/2), arr.length);
		
		return mergearray(mergesort_two(a1,f), mergesort_two(a2,f));
	}else if(arr.length == 1){
		return arr;
	}

	function mergearray(a,b){
		
		var i = 0;
		var j = 0;
		var k = 0
		
		while(a.length > i && b.length > j){	
			var v = f(a[i], b[j]);
			
			if( v <= 0 ){
				arr[k++] = a[i++];
			}else{
				arr[k++] = b[j++];
			}
		}
		while(a.length > i){
			arr[k++] = a[i++];
		}
		while(b.length > j){
			arr[k++] = b[j++];
		}
		return arr;	
	}	
}

function mergesort(arr, f){
	if(arr.length >= 2){
		var a1 = arr.slice(0, Math.floor(arr.length/2));
		var a2 = arr.slice(Math.floor(arr.length/2), arr.length);
		
		return mergearray(mergesort(a1,f), mergesort(a2,f));
	}else if(arr.length == 1){
		return arr;
	}

	function mergearray(a,b){
		
		var al = a.length;
		var bl = b.length;
		var i = 0;
		var j = 0;
		var k = 0
		

			while(al > i && bl > j){	
				var v = f(a[i], b[j]);
				
				if( v <= 0 ){
					arr[k++] = a[i++];
				}else{
					arr[k++] = b[j++];
				}
			}

		while(al > i){
			arr[k++] = a[i++];
		}
		while(bl > j){
			arr[k++] = b[j++];
		}
		return arr;	
	}	
}

function mergesort_scan(arr, f, scan){
	if(scan){
		var parts = [];
		var part = [];
		
		part.push(arr[0]);
		for(let i = 1;i<arr.length;i++){
			if(arr[i-1] <= arr[i]){
				part.push(arr[i]);
			}else{
				parts.push(part);
				part = [];
				part.push(arr[i]);
			}
		}
		
	}
	if(arr.length >= 2){
		var a1 = arr.slice(0, Math.floor(arr.length/2));
		var a2 = arr.slice(Math.floor(arr.length/2), arr.length);
		
		return mergearray(mergesort_scan(a1,f), mergesort_scan(a2,f));
	}else if(arr.length == 1){
		return arr;
	}

	function mergearray(a,b){
		
		var i = 0;
		var j = 0;
		var k = 0
		
		while(a.length > i && b.length > j){	
			var v = f(a[i], b[j]);
			
			if( v <= 0 ){
				arr[k++] = a[i++];
			}else{
				arr[k++] = b[j++];
			}
		}
		while(a.length > i){
			arr[k++] = a[i++];
		}
		while(b.length > j){
			arr[k++] = b[j++];
		}
		return arr;	
	}	
}

function mergesort_one(arr, f){
	if(arr.length >= 2){
		var a1 = arr.slice(0, Math.floor(arr.length/2));
		var a2 = arr.slice(Math.floor(arr.length/2), arr.length);
		
		return mergearray(mergesort_one(a1,f), mergesort_one(a2,f));
	}else if(arr.length == 1){
		return arr;
	}

	function mergearray(a,b){
		
		var i = 0;
		var j = 0;
		
		for(let k = 0; k < arr.length; k++){	
			if(a.length > i && b.length > j){
				var v = f(a[i], b[j]);
				
				if( v <= 0 ){
					arr[k] = a[i++];
				}else{
					arr[k] = b[j++];
				}
			}else if(a.length <= i){
				arr[k] = b[j++];
			}else if(b.length <= j){
				arr[k] = a[i++];
			}
			/*
			if( a[i] <= b[j] ){
				arr[k] = a[i++];
			}else{
				arr[k] = b[j++];
			}
			*/
		}
		return arr;	
	}	
}