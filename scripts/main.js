
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/chad.png') {
      myImage.setAttribute('src','images/kiryu coco.png');
    } else {
      myImage.setAttribute('src','images/chad.png');
    }
}

function kiryuCoco(){
  var word = document.getElementById("word").innerHTML;
  var note = document.getElementById("note").innerHTML;
      if (word.length === 0) {
        document.getElementById("word").innerHTML = "I'm gonna miss you Coco";
        document.getElementById("note").innerHTML = "click the picture"
      }else if(myImage.getAttribute('src') === "images/kiryu coco.png"){
        document.getElementById("word").innerHTML = "Praise the queen";
        document.getElementById("note").innerHTML = "Look at her"
      }else {
        document.getElementById("word").innerHTML = "";
        document.getElementById("note").innerHTML = "The chadest website";
      }
}

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  }else {
    localStorage.setItem('name', myName);
    if(myName.toLowerCase() !== 'kiryu coco'){
      myHeading.textContent = 'Welcome, ' + myName;
    } 
    else{
      myHeading.textContent = 'Welcome, kaichou';
    }
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
