function DataWrapper(json){
	
	var that = this;
	var objectArray = json;
	var fields = {};
	var sortBy = [];
	
	function createKeys(){	
		objectArray.forEach(function(elem, index){
			for(var prop in elem) {
				if(fields[prop] == 'undefined'){
					fields[prop] = new Array(objectArray.length);
				}
				fields[prop][index] = [index, elem[prop]];
			}
		});
		sortBy = Object.getOwnPropertyNames(fields)[0];
	}	
}