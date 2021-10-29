console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("This form has been submitted");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let duckImg = document.querySelector("#duck-img")


function payCompliment() {
	alert("You are ducking amazing!!!")
}

duckImg.addEventListener("mouseover", payCompliment)