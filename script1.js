var input=document.querySelector("#input");
var enter=document.querySelector("#enter");
var ul=document.querySelector("ul");
var list=document.querySelectorAll("li");
var item=document.querySelector("li");

function onClick() {
	if(input.value.length>0)
		{	
			var li=document.createElement("li");
			li.appendChild(document.createTextNode(input.value));
			ul.appendChild(li);
			input.value="";
		}
}

function onEnter(event) {
	if(input.value.length>0 && event.keyCode===13)
		{	
			var li=document.createElement("li");
			li.appendChild(document.createTextNode(input.value));
			ul.appendChild(li);
			input.value="";
		}

}

input.addEventListener("keypress",onEnter);
enter.addEventListener("click",onClick);
item.addEventListener("click", function(){
	list.classList.toggle("done")
});
