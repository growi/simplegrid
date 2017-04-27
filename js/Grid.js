function Grid(divnode){
	var that = this;
	var id = divnode.getAttribute("id");
	var data = [];
	var header = document.createElement("div");
	var content = document.createElement("div");
	
	this.root = divnode;
	this.bind = function(arr){
		data = arr;
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
				data.sort(function(a,b){
					if( typeof a[ev.srcElement.firstChild.textContent] == 'string'){
						return a[ev.srcElement.firstChild.textContent].localeCompare( b[ev.srcElement.firstChild.textContent]);
					}else{
						return a[ev.srcElement.firstChild.textContent] - b[ev.srcElement.firstChild.textContent];
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
		data.forEach(function(elem, index){
			var row = document.createElement("div");
			for(var prop in elem) {
				var col = document.createElement("div");
				var text = document.createTextNode(elem[prop]);
				col.className = "col-";
				col.appendChild(text);
				row.appendChild(col);
				row.className = "row";
				row.setAttribute("id", index);
			}
			content.appendChild(row);
		});
	};
	this.deletecontent = function(){
		that.root.removeChild(content);
		content = document.createElement("div");
		content.setAttribute("gridid", id);
		content.className = "content";
		that.root.appendChild(content);
	};
		
	init(divnode);
		
	function init(root){

		header.setAttribute("gridid", id);
		content.setAttribute("gridid", id);
		content.className = "content";
		that.root.setAttribute("gridid", id);
		that.root.appendChild(header);
		that.root.appendChild(content);
	}
}