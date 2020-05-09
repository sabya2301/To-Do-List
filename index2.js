// alert("connected");
// $("h1").css ("color", "blue");
$("ul").on("click", "li", function()
{
	// $(this).css("color", "gray");
	// $(this).css("text-decoration", "line-through");
	// $(this).toggleClass("unselected");
	$(this).toggleClass("selected");
});

$("ul").on("click", "span", function(event)
{
	$(this).parent().fadeOut(500, function()
	{
		$(this).remove();
	});
	event.stopPropagation();
});

// $("input").change(function()
// {
// 	$(this).
// })

// var inp = document.getElementsByTagName("input")[0];
// inp.addEventListener("change", function()
// {
// 	console.log(this.value);
// });

$("input").change(function()
{
	// console.log($(this).val());
	var a = $(this).val();
	$(this).val("");
	var newLi = "<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " +a +"</li>";
	$("ul").append(newLi);
	$(newLi).addClass("selected");

});

$(".fa-plus").on("click", function()
{
	$("input").fadeToggle();
})