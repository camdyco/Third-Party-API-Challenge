// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// 
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  const saveButtons = document.querySelectorAll('.saveBtn');

  saveButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const inputEl = btn.previousSibling.previousSibling;
      const key = btn.parentNode.getAttribute('id');
      const value = inputEl.value.trim();

      localStorage.setItem(key, value);
    });

    const inputEl = btn.previousSibling.previousSibling;
    const key = btn.parentNode.getAttribute('id');
    const value = localStorage.getItem(key);

    if (value) {
      inputEl.value = value;
    }
  });

  


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // use dayjs to get current hour
  $('.time-block').each(function(i, obj) {
    console.log(obj);
    // compare ID to current hour
    var currentHour = dayjs().hour()
    console.log(currentHour);

    var hoursArray= document.querySelectorAll(".time-block")

    for (var i = 0; i <= hoursArray.length; i++) {
      var hour = i + 9
      var timeBlockID = hoursArray[i].id;
      console.log(timeBlockID);
      // var timeBlock = $('timeBlockID')

  
    // // if ID hour < current hour add "past" class to the obj (div)
      if (hour < currentHour) {
        hoursArray[i].classList.add("past");
      } else if (hour < currentHour) {
        if (hoursArray[i].getAttribute("class").includes("past")){
          hoursArray[i].classList.remove("past");
        }
      }
// // if ID hour > current hour add "future" class to the obj
      if (hour > currentHour) {
        hoursArray[i].classList.add("future");
      } else if (hour > currentHour) {
        if (hoursArray[i].getAttribute("class").includes("future")){
          hoursArray[i].classList.remove("future");
        }
      }
// // if ID hour === current hour add "present" class to the obj
      if (hour === currentHour) {
        hoursArray[i].classList.add("present");
      } else if (hour === currentHour) {
        if (hoursArray[i].getAttribute("class").includes("present")){
          hoursArray[i].classList.remove("present");
        }
      }
  }
   
});
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
 var currentDate = dayjs().format('MM/DD/YYYY');
 console.log(currentDate);
  $("#currentDay").text(currentDate).css('text-align', 'center');
});
