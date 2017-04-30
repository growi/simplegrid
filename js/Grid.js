function Grid(divnode){
	var that = this;
	var id = divnode.getAttribute("id");
	var header = document.createElement("div");
	var content = document.createElement("div");
	var wrapper = {};
	
	init(divnode);
	
	this.root = divnode;
	this.bind = function(data){
		wrapper = new DataWrapper(data);
	};
	
	this.drawheader = function(cols){
		var row =  document.createElement("div");
		cols.forEach(function(elem, index){
			var col = document.createElement("div");
			var text = document.createTextNode(elem);
			col.setAttribute("id", index)
			col.appendChild(text);
			col.className = "col-header";
			col.addEventListener('click', function (ev) {
				wrapper.sort(ev.srcElement.firstChild.textContent, function(a,b){
					if( typeof a == 'string'){
						return a.localeCompare(b);
					}else{
						return a - b == 0 ? -1 : a - b;
					}
				})
				that.deletecontent();
				that.drawcontent();
			});
			row.appendChild(col);
			row.className = "header";
		});
		header.appendChild(row);
	};
	
	this.drawcontent = function(){
		for(let i = 0; i < wrapper.length; i++){
			content.appendChild(createrow(wrapper.getrowdata(i), i));
		}
	};
	
	this.deletecontent = function(){
		that.root.removeChild(content);
		content = document.createElement("div");
		content.setAttribute("gridid", id);
		content.className = "content";
		that.root.appendChild(content);
	};
	
	this.prependrow = function(elem){
		content.insertBefore(createrow(elem), content.firstChild)
	};
	
	this.appendrow = function(elem){
		content.appendChild(createrow(elem));
	};
		
	function init(root){

		header.setAttribute("gridid", id);
		content.setAttribute("gridid", id);
		content.className = "content";
		root.setAttribute("gridid", id);
		root.appendChild(header);
		root.appendChild(content);
	}
	
	function createrow(elem, id){
		var row = document.createElement("div");
		
		row.className = "row";
		row.id = id;
		for(var prop in elem) {
			var col = document.createElement("div");
			var text = document.createTextNode(elem[prop]);
			col.className = "col-";
			col.appendChild(text);
			row.appendChild(col);
		}
		return row;
	}
}

function DataWrapper(json){
	
	var that = this;
	var objectArray = json;
	var fields = {};
	var orderBy = [];
	
	createKeys();
	
	function createKeys(){	
		objectArray.forEach(function(elem, index){
			for(var prop in elem) {
				if(fields[prop] === undefined){
					fields[prop] = new Array(objectArray.length);
				}
				fields[prop][index] = [index, elem[prop]];
			}
		});
		orderBy = Object.getOwnPropertyNames(fields)[0];
	}

	this.getrowdata = function(num){
		return objectArray[fields[orderBy][num][0]];
	}
	
	this.sort = function(column, f){
		if(fields[column] !== undefined){
			fields[column].sort(function(a,b){
				return f(a[1], b[1]);
			});
			orderBy = column;
		}
	};
	this.length = objectArray.length;
}