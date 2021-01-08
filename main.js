let myImage =document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/plant1.jpeg') {
    myImage.setAttribute('src','images/plant2.jpeg');
  } else {
    myImage.setAttribute('src','images/plant1.jpeg');
  }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('timytimps.');
  if(!myName) {
    setUserName();
  } else {
  localStorage.setItem('timytimps', myName);
  myHeading.textContent = 'Plants make people happy, timytimps';
  }
}
if(!localStorage.getItem('timytimps')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('timytimps');
  myHeading.textContent = 'Plants make people happy, ' + storedName;
  myButton.onclick = function() {
    setUserName();
  }
}
