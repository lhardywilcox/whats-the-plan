// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var currentDay = dayjs().format('MM-DD-YYYY');
var currentHour = dayjs().format('H');



$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  function storeTasks() {

    $('.saveBtn').each(function () {
      $(this).click(function (event) {
        event.preventDefault();

        console.log('I heard the click!');

        var taskNumber = parseInt($(this).parent('div').attr('id').split('hour-')[1]);
        var taskItem = $(this).siblings('textarea').val();
        //var taskList = JSON.parse(localStorage.getItem("taskList")) || [];

        //console.log(taskList);

      /*   var newTask = {
          number: taskNumber,
          task: taskItem
        };

        if (taskList === null) {
          taskList.push(newTask);
        } else {
          taskList.push(newTask)
        }; */

        localStorage.setItem(taskNumber, taskItem);

       // console.log(taskList);
        console.log("See the tasks?");

      });
    });
  }

  storeTasks();


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //Need code to separate the hour- from the digit in the id, compare each digit to the currentHour

  function setColor() {

    $('.time-block').each(function () {
      //Used the parseInt to split the id attribut to just an integer, to make it comparable to the current Hour variable.
      var blockNumber = parseInt($(this).attr('id').split('hour-')[1]);

      if (blockNumber < currentHour) {
        $(this).removeClass('present');
        $(this).removeClass('future');
        $(this).addClass('past');
        //Originally had blockNumber === currentHour, but because currentHour was a string, the styling for present wouldn't work.  Changed to ==, and conditional worked.
      } else if (blockNumber == currentHour) {
        $(this).removeClass('future');
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }

      console.log(currentHour);
      console.log(blockNumber);
      // Added the below console.log to determine the data type of first blockNumber, then currentHour, to troubleshoot the conditionals.
      console.log('blockNumber data type: ' + typeof currentHour);
    })
  }

  setColor();
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  function getTasks() {
    
    var tasks = document.querySelectorAll('.description');

    for (let i = 0; i < tasks.length; i++) {
      tasks[i].value = localStorage.getItem(i + 9);
    }
  }

  getTasks();

  $('#currentDay').text(currentDay);
});