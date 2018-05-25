var input=document.querySelector("#input");
var enter=document.querySelector("#enter");
var ul=document.querySelector("ul");
var list=document.querySelectorAll("li");

function onClick() {
	if(input.value.length>0)
		{	
			var li=document.createElement("li");
			li.appendChild(document.createTextNode(input.value));
			ul.appendChild(li);
			input.value="";
			addDelButton(li);
		}
}

function onEnter(event) {
	if(input.value.length>0 && event.keyCode===13)
		{	
			var li=document.createElement("li");
			li.appendChild(document.createTextNode(input.value));
			ul.appendChild(li);
			input.value="";
			addDelButton(li);
		}

}

//Adding delete button
function addDelButton(elementInConsideration){
	var but=document.createElement("button");
	but.appendChild(document.createTextNode("x"));
	but.classList.add("button");
	elementInConsideration.appendChild(but);
	addEvent(elementInConsideration);
}

//Adding event listener to added buttons
function addEvent(elementInConsideration){
	elementInConsideration.addEventListener("click", function(){
		this.style.display="none";
});
}

//event on input keypress
input.addEventListener("keypress",onEnter);
//event on input click
enter.addEventListener("click",onClick);

//Click to strike
ul.addEventListener("click", function(event){
	event.target.classList.toggle("done")
});

//Adding delete button to existing list
for (var i = 0; i < list.length; i++) {
	addDelButton(list[i]);
}