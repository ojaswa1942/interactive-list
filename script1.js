var input=document.querySelector("#input");
var enter=document.querySelector("#enter");
var ul=document.querySelector("ul");

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

//Click to strike
ul.addEventListener("click", function(event){
	event.target.classList.toggle("done")
});


//Adding delete button
var but=document.createElement("button");
but.appendChild(document.createTextNode("x"));
but.classList.add("button");
