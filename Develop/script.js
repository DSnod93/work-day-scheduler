// load html and css first
$(document).ready(function () {

// Display current day at top of calendar using moment.js
$("#currentDay").text(moment().format("dddd, MMMM Do"));
 
$(".saveBtn").on("click", function() {
    // get values
    console.log(this);


    localStorage.setItem(); 
    
})

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

// repeats itself
timeTracker();
};


// user can enter an event when clicking time block
//when user clicks save, the event is saved to local storage
// refereshing the page still shows saved events