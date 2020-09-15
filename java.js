var $stuff = $(".btcStuff, .ethStuff, .xrpStuff, .btccStuff, .iotaStuff, .ethcStuff, .xmrStuff, .zecStuff, .dashStuff");
var $colors = $("#valute li a");
$colors.on("click", function(){
    // get color from parent (li) id
    var valute = $(this).parent()[0].id;
    // turn all stuff off (because we don't know what came last)
    $stuff.attr({style: null});
    // turn on clicked stuff class
    $("." + valute + "Stuff").attr({style: "display:block;"});
});