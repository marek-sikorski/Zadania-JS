
var list = document.getElementById('list');
    add = document.getElementById('addElem');
	x = document.getElementsByTagName('li');
addElem.addEventListener('click', function() {
	 list.innerHTML +='<li>item</li>'+x.length;
});

