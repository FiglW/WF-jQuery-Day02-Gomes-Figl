function showMsg (obj){
	$("#msg").text("You clicked on "+ $("#"+obj).attr("alt"));
}

$(".xmasImg").click(function(){
	showMsg($(this).attr("id"));
});



/* $(".xmasImg").on("click", function(){
 	showMsg($(this).attr("id"));
}); */



$(".xmasImg2").click(function(){
	let x = $(this).attr("id");
	$("#"+x).remove();
});

// sobald du xmasimg2 anklickst, schaut er welche ID der santa hat, und löscht den jenigen santa.
