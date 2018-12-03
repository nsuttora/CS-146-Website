window.onload = () => {   
   document.getElementById('submitBTN').addEventListener('click', validateForm);
   document.getElementById('resetBTN').addEventListener('click', resetForm);
};

function setBackground(e) {
	if (e.type == "focus") {
		e.target.style.backgroundColor = "#FFE393";
	}
	else if (e.type == "blur") {
		e.target.style.backgroundColor = "white";
	}
}

window.addEventListener("load", function() {
	var cssSelector = "input[type=text],input[type=email],input[type=number]";
	var fields = document.querySelectorAll(cssSelector);
	for (i=0; i<fields.length; i++)  {
		fields[i].addEventListener("focus", setBackground);
		fields[i].addEventListener("blur", setBackground);
		}
});

function resetForm() {
	document.getElementById('form').reset();
	document.getElementById('tips_java').innerHTML = 'Tip Generator';
	// Make submit button visible again
	var displaySubmit = document.getElementById("submitBTN").style.display = "block";
}

function validateForm() {	
	var x = true;
	if (document.getElementById('first_name').value == ''){
		alert('Please fill in your first name.');
		x = false;
	}
	else if (!(/^[A-Za-z\s]+$/.test(document.getElementById('first_name').value))){
		alert('Please use only letters for your first name.');
		x = false;
	}
	if (document.getElementById('last_name').value == ''){
		alert('Please fill in your last name.');
		x = false;
	}
	else if (!(/^[A-Za-z\s]+$/.test(document.getElementById('last_name').value))){
		alert('Please use only letters for your last name.');
		x = false;
	}
	if (document.getElementById('email').value == ''){
		alert('Please fill in your email.');
		x = false;
	}
	if (!(document.getElementById('stress').value == '1' || document.getElementById('stress').value == '2' || document.getElementById('stress').value == '3' || document.getElementById('stress').value == '4')){
		alert('Please fill in your stress level on a scale of 1 to 4.');
		x = false;
	}
	if (x == true){
		getFormValues(event);
	}
}

function getFormValues(event) {
   // Prevents the reload of the form
   event.preventDefault();
   // Get values of inputs
   var firstName = document.getElementById('first_name').value;
   var lastName = document.getElementById('last_name').value;
   var email = document.getElementById('email').value;
   var year = document.getElementById('year').value;
   var tutor = document.getElementById('tutor_who').value;
   var help = document.getElementById('tutor_often').value;
   var time = document.getElementById('study').value;
   var studyMaterial = document.getElementById('study_material').value;
   var stress = document.getElementById('stress').value;
   var sleep = document.getElementById('sleep').value;
   var studyTrouble = document.getElementById('trouble').value;
   var effort = document.getElementById('work_effort').value;
   var studyPlace = document.getElementById('study_place').value;
   var officeHours = document.getElementById('office_hours').value;
   var confidence = document.getElementById('hardest_class_confidence').value;
   // Pass values to generateTips()
   generateTips(firstName, lastName, email, year, tutor, help, time, studyMaterial, stress, sleep, studyTrouble, effort, studyPlace, officeHours, confidence);
}

function generateTips(firstName, lastName, email, year, tutor, help, time, studyMaterial, stress, sleep, studyTrouble, effort, studyPlace, officeHours, confidence) {
   var div = document.createElement('div');
   var tips_title = document.createElement('p');
   var tips_main1 = document.createElement('li');
   var tips_main2 = document.createElement('li');
   var tips_main3 = document.createElement('li');
   var tips_main4 = document.createElement('li');
   var tips_main5 = document.createElement('li');
   var tips_main6 = document.createElement('li');
   var tips_main7 = document.createElement('li');
   var tips_main8 = document.createElement('li');
   var tips_main9 = document.createElement('li');
   var tips_main10 = document.createElement('li');
   var tips_main11 = document.createElement('li');
   
   var title = document.createTextNode('Hello ' + firstName + ' ' + lastName + ' (' + email + ')!' + ' Here are your personalized tips for ' + year + ' year!');
   tips_title.className = "title";
   
   if (tutor == "Friend"){
	   var tip1 = document.createTextNode('Try going to other people instead of your friends for tutoring help. While friends can be a great way to study and learn, they from time might not explain information correctly or as best as a professor could. Also, friends tend to become distractions, so try seeking help from a professor or tutor.');
   }
   else{
	   var tip1 = document.createTextNode('Try seeking your friends for tutoring help. Friends can give an easy-to-understand approach to learning and studying material. Just remember to stay focused!');
   }
   
   if (help == "Never" || help == "Rarely" || help == "Occasionally"){
	   var tip2 = document.createTextNode("Try to seek more homework and study help. It is extremely beneficial to hear another person's way of teaching as they might teach it a way you understand better.");
   }
   else{
	   var tip2 = document.createTextNode('It seems that you frequently get help and tutoring work, which is great. Continue to ask for help when needed.')
   }
   
   if (time == '1' || time == '2'){
	   var tip3 = document.createTextNode('Try studying more for your exams for more days. For example, study an hour a day for three days instead of studying three hours for one day. Cramming is very bad for you!');
   }
   else{
	   var tip3 = document.createTextNode('It seems that you study a good amount! Remember to spread studying over multiple days for better retention and stress levels and always remember to never over-study; take a 15 minute break every once in a while.');
   }
   
   if (studyMaterial == 'notes' || studyMaterial == 'problems'){
		var tip4 = document.createTextNode('Notes and problems are a great way to understand the foundation of a certain topic. In addition, try utilizing videos for more complex problem solving and past exams for similar problem work.');
   }
   else{
		var tip4 = document.createTextNode('Videos and previous exams are a great way to understand how to do similarly related problems. In addition, try utilizing notes and problems to understand key concepts so it can be applied to more difficult problems.');
   }
   
   if (stress == '3' || stress == '4'){
	   var tip5 = document.createTextNode('Take a break once in a while to destress! Try taking a walk, listening to music, or just doing something you enjoy to relax yourself.');
   }
   else{
	   var tip5 = document.createTextNode('It seems your stress levels are low but it is still always good to take refreshing breaks! Do something you like to do to reset yourself and then go back to studying but now with a fresh mind.');
   }
   
   if (sleep == '4'){
	   var tip6 = document.createTextNode('Try getting some more sleep. Sleep helps greatly for refreshing the mind and resetting your stress and anxiety levels.');
   }
   else{
	   var tip6 = document.createTextNode('You get a good amount of sleep but remember a few key things: avoid technology 30 minutes before sleeping to reduce the effect of blue light, leave your phone away from your bed, and think of calming thoughts.');
   }
   
   if (studyTrouble == 'crit'){
	   var tip7 = document.createTextNode('Try focusing on thought-provoking and in-depth questions for better critical thinking skills.');
   }
   else if (studyTrouble == 'reading'){
	   var tip7 = document.createTextNode('Try reading books more often or just reading more in general each day to increase your reading skills.');
   }
   else if (studyTrouble == 'writing'){
	   var tip7 = document.createTextNode('Spend 30 minutes each day writing a paragraph or short essay to improve your writing skills. Remember to proofread as well.');
   }
   else{
		var tip7 = document.createTextNode('Remove distractions from your vicinity (even if you need the help of a friend) to increase focus.');
   }

   if (effort == 'no'){
	   var tip8 = document.createTextNode('Try putting 100% into all your work. It may be hard, but dedicate yourself to those good grades!');
   }
   else{
	   var tip8 = document.createTextNode('Good job putting in your all! Continue to always do your best! Nothing can stop you!');
   }
   
   if (studyPlace == 'food' || studyPlace == 'anywhere'){
	   var tip9 = document.createTextNode('Try studying in more secluded and quiet places to minimize distraction as much as possible.');
   }
   else{
	   var tip9 = document.createTextNode('You study in great places. Just remember to remove distractions (phone, laptop, video games, television) from your vicinity for maximum efficiency.');
   }
   
   if (officeHours == 'no'){
	   var tip10 = document.createTextNode('Try attending office hours more frequently. They are of great help and provide great alternative ways of learning the material.');
   }
   else{
	   var tip10 = document.createTextNode('Good job for attending office hours. Remember that office hours are designed to be available as much as possible so you do not have to worry about not getting help on a specific day.');
   }
   
   if (confidence == 'no_confidence' || confidence == 'fail' || confidence == 'help'){
	   var tip11 = document.createTextNode('By dedicating more time to your work, you will eventually do well in your courses and gain confidence. Work hard, we believe in you!');
   }
   else{
	   var tip11 = document.createTextNode('It is great to have confidence in your work. Confidence is one of the biggest factors towards success in not only college but in life.');
   }
   
   tips_title.appendChild(title);
   tips_main1.appendChild(tip1);
   tips_main2.appendChild(tip2);
   tips_main3.appendChild(tip3);
   tips_main4.appendChild(tip4);
   tips_main5.appendChild(tip5);
   tips_main6.appendChild(tip6);
   tips_main7.appendChild(tip7);
   tips_main8.appendChild(tip8);
   tips_main9.appendChild(tip9);
   tips_main10.appendChild(tip10);
   tips_main11.appendChild(tip11);
   
   div.appendChild(tips_title);
   div.appendChild(tips_main1);
   div.appendChild(tips_main2);
   div.appendChild(tips_main3);
   div.appendChild(tips_main4);
   div.appendChild(tips_main5);
   div.appendChild(tips_main6);
   div.appendChild(tips_main7);
   div.appendChild(tips_main8);
   div.appendChild(tips_main9);
   div.appendChild(tips_main10);
   div.appendChild(tips_main11);
   
   document.getElementById("tips_java").appendChild(div);
   hideSubmitBTN();
}

function hideSubmitBTN() {
    var x = document.getElementById("submitBTN");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}