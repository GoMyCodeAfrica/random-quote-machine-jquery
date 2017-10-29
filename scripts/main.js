var bgColors = ["#0f5959", "#17a697", "#638ca6", "#8fd4d9", "#d93240"]
var quotes = [
	{
		text: "There are no facts, only interpretations.",
		author: "Friedrich Nietzsche"
	},
	{
		text: "Badges? We ain't got no badges! We don't need no badges! I don't have to show you any stinking badges!",
		author: "The Treasure of the Sierra Mad"
	},
	{
		text: "Problems worthy of attack prove their worth by fighting back.",
		author: "Paul Erdos"
	},
	{
		text: "There are no facts, only interpretations.",
		author: "Friedrich Nietzsche"
	},
	{
		text: "Against stupidity, the gods themselves contend in vain.",
		author: "Friedrich von Schiller"
	}
];

var chooseRandomly = function(list) {
	var len = list.length;
	var index = Math.floor(Math.random()*len);
	return list[index];
}

var updatePage = function() {
	var quote = chooseRandomly(quotes);
	var color = chooseRandomly(bgColors);
	$("body").css("background-color", color);
	$(".quote").text(quote.text).css("color", color);
	$(".author").text("--- " + quote.author).css("color", color);
	$("a").attr("href", "https://twitter.com/intent/tweet?text=" + quote.text);
}

updatePage();
$("button").on("click", updatePage);