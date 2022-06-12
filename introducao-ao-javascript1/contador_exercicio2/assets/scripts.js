

// desabilitando contador

let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	if(count <10){
	count++;
	CURRENT_NUMBER.innerHTML = count;
	}else{
		count=10
	}
}
function decrement() {
	if(count > 0){
	count--;
	CURRENT_NUMBER.innerHTML = count;
	}else{
		count=0
	}
}

function test() {
	kdowkdpo;
}

