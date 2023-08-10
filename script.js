// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //
  document.querySelector('.container-lg').addEventListener('click', function(event) {
    event.preventDefault();
    if (event.target.matches('button')) {
      //storing the text area above button, get whatever used typed
      const textArea = event.target.previousElementSibling;
      const text = textArea.value;
      //takes what user types and the id of the specific block
      const timeBlockID = event.target.parentElement.id;
      //storing info on local storage
      localStorage.setItem(timeBlockID, text);
    }
  });
  

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //shows current hour
  const currentHour = dayjs().hour();
 
  //storing every element of all time blocks
  const allTimeBlocks = document.querySelectorAll('.time-block');

  allTimeBlocks.forEach(function(timeblock){
    //.split method breaks the - dash from the string "hour-15"
    const timeblockHour = timeblock.id.split('-');
    //parseInt method turns string with a number solely into a number, and we use 1 because 15 is the second in the array
    const hour = parseInt(timeblockHour[1]);
    if (hour < currentHour) {
      timeblock.classList.add('past');
    } else if (hour === currentHour) {
      timeblock.classList.add('present');
    } else {
      timeblock.classList.add('future');
    }
  });


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

    const hour9 = localStorage.getItem('hour-9') || '';
    document.querySelector('#hour-9 textarea').value = hour9;

    const hour10 = localStorage.getItem('hour-10') || '';
    document.querySelector('#hour-10 textarea').value = hour10;

    const hour11 = localStorage.getItem('hour-11') || '';
    document.querySelector('#hour-11 textarea').value = hour11;

    const hour12 = localStorage.getItem('hour-12') || '';
    document.querySelector('#hour-12 textarea').value = hour12;

    const hour13 = localStorage.getItem('hour-13') || '';
    document.querySelector('#hour-13 textarea').value = hour13;

    const hour14 = localStorage.getItem('hour-14') || '';
    document.querySelector('#hour-14 textarea').value = hour14;

    const hour15 = localStorage.getItem('hour-15') || '';
    document.querySelector('#hour-15 textarea').value = hour15;

    const hour16 = localStorage.getItem('hour-16') || '';
    document.querySelector('#hour-16 textarea').value = hour16;

    const hour17 = localStorage.getItem('hour-17') || '';
    document.querySelector('#hour-17 textarea').value = hour17;
    

  // TODO: Add code to display the current date in the header of the page.

  document.querySelector('#currentDay').textContent = dayjs().format('dddd, MMMM D, YYYY h:mm A')

});
