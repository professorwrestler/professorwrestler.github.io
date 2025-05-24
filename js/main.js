/*
  This is the function that makes our text cursor blink
  on the about section (where it looks like a cat
  terminal command)
*/

//assign our terminalText <p> tag to a variable
const txt = document.getElementById("terminalText");

/*
  make a text status variable to help switch between
  the following functions
*/
let txtStatus = "regular";

function changeText() {
  //the text content with the underscore
  txt.textContent = "$ cat about.txt█";
  //console.log("text changed");
  //change our throwaway variable to "changed
  txtStatus = "changed";
}

function revertText() {
  //the text content without the underscore
  txt.textContent = "$ cat about.txt ";
  //console.log("text reverted");
  //change our variable's value to "regular"
  txtStatus = "regular";
}

/*
  function to swap between the previous two functions
  based on text status variable. If status equals "regular,"
  run the function that changes the text. If it equals "changed,"
  run the function that reverts the text back to normal.
*/
function swapText() {
  if (txtStatus == "regular") {
    changeText();
  } else if (txtStatus == "changed") {
    revertText();
  }
}

/*
  use the set interval function to run the swapText()
  function every 250 miliseconds. 
*/
setInterval(swapText, 250);
