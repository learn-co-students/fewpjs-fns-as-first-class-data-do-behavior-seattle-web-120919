/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(str) {
  const hour = parseInt(str, 10);
  if(hour < 12) {
    return "Good Morning";
  } else if(hour >= 12 && hour < 17) {
    return "Good Afternoon";
  }

  return "Good Evening";


}
/* Write your implementation of displayMessage() */

function displayMessage(greet) {
  document.getElementById('greeting').innerText = greet;

}
