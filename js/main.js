let go = document.getElementById("go");
let input = document.getElementById("search");
let videos = document.querySelectorAll("section .fb-video");
let refrech = document.getElementById("refrech");
let clear = document.getElementById("clear");

// click go to put the link in the iframes
go.onclick = function () {
  for (let i=0; i<videos.length; i++) {
    videos[i].setAttribute("data-href", input.value);
    refrech.click();
  }
}
//add input value and autoplay to local storage
input.addEventListener('input', function() {
  // Save the input value to local storage
  localStorage.setItem('inputValue', input.value);
  localStorage.setItem('autoPlay', true)
});
// Retrieve the saved value from local storage
const savedValue = localStorage.getItem('inputValue');
if (savedValue) {
  // Set the input value to the saved value
  input.value = savedValue;
  // set the input value to the iframes and autoplay attr
  for (let i=0; i<videos.length; i++) {
    videos[i].setAttribute("data-href", savedValue);
    videos[i].setAttribute("data-autoplay", true);
  }
}
// refrech btn
refrech.onclick = function () {
  window.location.reload();
}
// clear th data from local storage
clear.onclick = function () {
  window.localStorage.clear();
  window.location.reload();
}



