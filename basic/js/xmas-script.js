function showMsg (obj){
	$("#msg").text("You clicked on "+ $("#"+obj).attr("alt"));
}

$(".xmasImg").click(function(){
	showMsg($(this).attr("id"));
});



/* $(".xmasImg").on("click", function(){
 	showMsg($(this).attr("id"));
}); */