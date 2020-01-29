/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function displayMessage(input) {
  document.getElementById("greeting").innerText = input
}

function greet(input) {
  console.log(input)
  let time = input.split(':')
  console.log(time)
  let hour = time[0]
  console.log(hour)
  if (hour < 12) {
    return "Good Morning"
  } else if (hour > 12 && hour < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}
