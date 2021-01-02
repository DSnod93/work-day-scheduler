$(document).ready(function () {

// Display current day at top of calendar using moment.js
$("#currentDay").text(moment().format("dddd, MMMM Do"));
 



});





//create time blocks for business hours


//color code each time block to indicate if it is past, present, or future
// user can enter an event when clicking time block
//when user clicks save, the event is saved to local storage
// refereshing the page still shows saved events