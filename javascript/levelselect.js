window.onload = function(){
  // define the array str if empty
	var empty_str = "0,0,0,0|0,0,0,0|0,0,0,0|0,0,0,0|0,0,0,0|0,0,0,0";
	var str = getCookie("array");
  console.log("onload str = " + str);
  
  var num_answered = 0;
  output = "Let's go!"
	if (str == ""){
    str = "array=" + empty_str;
    document.cookie = str+";max-age="+(3600*24*999);
  } else {
    // calculate num answered questions
    var array = str.split("|").join().split(",");
    array.forEach(element => {
      if (parseInt(element)>0) num_answered++;
    });
    if (num_answered < 4){
      output = "Let's go!"
    } else if ( num_answered < 20){
      output = num_answered.toString() + '/24'
    } else if (num_answered < 24){
      output = "Almost there! (" + num_answered.toString() + '/24)'
    }
    if (num_answered == 24){
      window.location = "email.html"
    }
  }
  document.getElementById("quesAnsLabel").innerHTML = output;
}

function setCookie(cname, new_level) {
    document.cookie = cname + "=" + new_level+";max-age="+(3600*24*999);
}
  
function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function bodyClicked(e) {
  var targ;
    targ=e.srcElement;
    targID = targ.id;
    setCookie("level", targID.toString());
}

/*function levelNew() {
  window.location="levelnew.html"
}*/

function ResetGame(){
  document.cookie = "array=0,0,0,0|0,0,0,0|0,0,0,0|0,0,0,0|0,0,0,0|0,0,0,0";
  document.cookie = "disclaimer=";
  window.location = "index.html";
}

var button_sound = document.getElementById("buttonSound"); 

function buttonClick2() {
  button_sound.play();

  button_sound.onended = function(){
    window.location.href = "testlevel.html";
  }
}

/*function inputEmail() {
	window.location = "email.html"
}

 When the user clicks on the button, 
toggle between hiding and showing the dropdown content 
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn') && !event.target.matches('.speaker')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function diffImage(img) 
{
   	
   if(img.src.match("images/speaker2.png")) img.src = "images/mute3.png";
   else img.src = "images/speaker2.png"; 
}

function mute() { 
  if (document.getElementById("music1").muted == false)
  document.getElementById("music1").muted = true;
  else (document.getElementById("music1").muted = false)
}

function levelSelect() {
    window.location = "levelselect.html"
}

function email() {
  window.location = "email.html"
}*/