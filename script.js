// Established global variables for the date and time information
var currentDay = dayjs().format('MM-DD-YYYY');
var currentHour = dayjs().format('H');


// This code waits for everything to load before running the rest.
$(document).ready(function () {
  // The storeTasks function listens for a click on each of the save buttons, then saves tasks to local storage, using the hour as a key, and the textarea input as the value.
  function storeTasks() {
    $('.saveBtn').each(function () {
      $(this).click(function (event) {
        event.preventDefault();

        console.log('I heard the click!');

        var taskNumber = parseInt($(this).parent('div').attr('id').split('hour-')[1]);
        var taskItem = $(this).siblings('textarea').val();

        localStorage.setItem(taskNumber, taskItem);

        // console.log(taskList); to test the function
        console.log("See the tasks?");
      });
    });
  }

  storeTasks();

  //This function provides the code to change the color styling of the hour blocks, depending on whether they are past, present or future.
  function setColor() {

    $('.time-block').each(function () {
      //Used the parseInt to split the id attribut to just an integer, to make it comparable to the current Hour variable. I'm not convinced this is the easiest way to do this, but it did work.
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

  //The getTasks function restores the saved items to the screen from local storage when the browser reloads.
  function getTasks() {

    var tasks = document.querySelectorAll('.description');

    for (let i = 0; i < tasks.length; i++) {
      tasks[i].value = localStorage.getItem(i + 9);
    }
  }

  getTasks();

  // This code simply applies the current date in the header.
  $('#currentDay').text(currentDay);
});
