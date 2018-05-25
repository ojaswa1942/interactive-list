var button = document.getElementById("enter");
var input = document.getElementById("input");
var ul = document.querySelector("ul");
// caching li elements in a variable called "list"
var list = document.querySelectorAll("li");
//caching ul elements as children so as to run through them in a loop
var ulChildren = ul.children;
var deleteitem;

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	delbutton();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//
//////	Excercise Javascript
//

function toggledone() {
	event.target.classList.toggle("done");
}

function delbutton(i) {
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Delete"));
	var deletebutton = ul.children[i].appendChild(button);
	deletebutton.classList.add("delete");
	deleteitem = deletebutton;
	deletebutton.addEventListener("click", function delListItem() {
	console.log("something's right till now!");
});
}

// Adding eventlisteners to ul itself and toggling the target based on the event
ul.addEventListener("click", toggledone);

// to add toggle done to the list items that we will add.
for (var i=0; i < ulChildren.length; i++) {
	delbutton(i);
}


// deletebutton.addEventListener("click", function delListItem() {
// 	console.log("something's right till now!");
// });
