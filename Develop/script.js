// load html and css first
$(document).ready(function () {

// Display current day at top of calendar using moment.js
$("#currentDay").text(moment().format("dddd, MMMM Do"));
 
$(".saveBtn").on("click", function() {
    // get values
    console.log(this);
    // get the change from the sibling html description attribute
    var text = $(this).siblings(".description").val();
    // get the change from the html id attribute
    var time = $(this).parent().attr("id")

    //when user clicks save, the event is saved to local storage
    localStorage.setItem(time, text); 
    
})

// load saved data from local storage
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));


function timeTracker() {

    // current hour using moment.js
    var currentHour = moment().hour();

    // loop over time blocks
    $(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id").split("hour")[1]);

    //color code each time block to indicate if it is past, present, or future
    if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    }
    else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("future");
        $(this).removeClass("present");
    }
    else {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    }
})
}
// repeats itself
timeTracker();
})
