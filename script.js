
$(function () {

$(".saveBtn").on("click", function(){
  var noteValue = $(this).siblings(".description").val()
  var noteKey = $(this).parent().attr("id")
  localStorage.setItem(noteKey, noteValue)

})
$("#09 .description").text(localStorage.getItem("09"))
$("#10 .description").text(localStorage.getItem("10"))
$("#11 .description").text(localStorage.getItem("11"))
$("#12 .description").text(localStorage.getItem("12"))
$("#13 .description").text(localStorage.getItem("13"))
$("#14 .description").text(localStorage.getItem("14"))
$("#15 .description").text(localStorage.getItem("15"))
$("#16 .description").text(localStorage.getItem("16"))
$("#17 .description").text(localStorage.getItem("17"))
$("#18 .description").text(localStorage.getItem("18"))

  var hour = dayjs().format("H")
  $(".time-block").each(function(){
    var timeBlockID = $(this).attr("id")
    if(timeBlockID < hour){
      $(this).addClass("past")
    }
    else if(timeBlockID == hour) {
    $(this).addClass("present")
  }
  else if(timeBlockID > hour){
    $(this).addClass("future")
  }

  })

  var formattedDate = dayjs().format("MMMM D, YYYY")
document.getElementById("currentDay").textContent=formattedDate
});
