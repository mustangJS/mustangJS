
var el = document.getElementById("dropdown");
var body = document.body;



el.onmouseover = function()
{
	var list = document.getElementById("dropdown-menu");
	list.style.display = "block"
};

el.onmouseout = function()
{
	var list = document.getElementById("dropdown-menu");
	list.style.display = "none"
};
