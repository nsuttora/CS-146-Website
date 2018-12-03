window.onload = () => {   
   document.getElementById('submitBTN').addEventListener('click', submitFeedback);
   document.getElementById('resetBTN').addEventListener('click', resetFeedback);
};

function resetFeedback() {
	document.getElementById('feedback').reset();
	document.getElementById('thanks_java').innerHTML = '';
}

function submitFeedback() {
	document.getElementById('feedback').reset();
	
	var thanks = document.createElement('p');
	var thanksTXT = document.createTextNode('Thanks for your feedback!');
	thanks.appendChild(thanksTXT);
	document.getElementById('thanks_java').appendChild(thanks);
}