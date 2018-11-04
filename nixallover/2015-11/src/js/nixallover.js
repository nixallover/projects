$(function(){
    console.log( "wahoo initialized!" );

    // skrollr
    var s = skrollr.init();


    // animate css stuff
    var animBaseClass = "animated";

    var anim = {
        fadeInDown: "fadeInDown"
    };

    // init
    $( ".site-title" ).addClass( animBaseClass + " " + anim.fadeInDown );
    // $( "#header" ).removeClass( "expanded" );


    // $( window ).on( "scroll", function(e){
    //     var blockHeading = ".content-block-title";
    //     // detect if visible
    //     var titleIsVisible = function(){
    //         return $( blockHeading ).visible();
    //     };

    //     if( titleIsVisible() ){
    //         console.log( "visible" );
    //         $( blockHeading ).addClass( animBaseClass + " " + anim.fadeInDown );
    //         // $( this ).text()
    //         // trigger animation class
    //     } else {
    //         // nada
    //     }
    // });
});