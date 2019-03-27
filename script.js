$(document).ready(function(){
	$("#msgid").html("");
 });
 
 arr.shift();


 $(".pickColor").click (function ())
 
 



 // Global declaration of list 
function removeItem() {
  $(this).closest('li').remove()
  toggleEmptyState();
}

function toggleEmptyState() {
  debugger
  if ($("li").length > 0) {
    $('.help').css('display', 'none');
  } else {
    $('.help').css('display', 'block');
  }
}

function newItem() {
  var newItem = $("li").length + 1;
  var inputValue = $("#todo-input").val();
  if (inputValue === '') {
    alert("");
  } else {
    var li = "<li data-delete-id='" + newItem + "'>" + inputValue + "</li>";
    $('#myUL').append(li);
    $("#todo-input").val("");
    var span1 = "<span class='close'>\u00D7</span>";
    $("[data-delete-id='" + newItem + "']").append("span1");
	$("ul").after("<ul><li><label><input type='checkbox' />span1</label></li></ul>");
    $('.close').off('click').on('click', removeItem);
  }
  toggleEmptyState()
}