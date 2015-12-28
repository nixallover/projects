$(function(){
	console.log( "wahoo initialized!" );
	var s = skrollr.init();

	var animBaseClass = "animated ";

	var anim = {
		fadeInDown: "fadeInDown"
	};

	$( ".site-title" ).addClass( "animated fadeInDown" );

	$( "#header" ).removeClass( "expanded" );
});