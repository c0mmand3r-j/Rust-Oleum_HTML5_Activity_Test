$(function() {
  
  TweenMax.from('#headboard', 0.5, {x:"-270", ease:Circ.easeOut, delay: 0.4}); 
  //TweenMax.from('#logo', 0.8, {alpha:"0", ease:Circ.easeOut, delay: 0.7}); 
  TweenMax.from('#colorstick1', 0.5, {y:"270", ease:Circ.easeOut, delay: 0.8});
  TweenMax.from('#picker2', 0.5, {y:"270", ease:Circ.easeOut, delay: 0.9});

  ////LISTENING TO MOUSE CLICK ON STAGE
   $("#c1").on("mouseover", colorchoice1on);
   $("#c1").on("mouseleave", colorchoice1off);   
   $("#c1").on("mousedown", showfloor1);
  
   $("#c2").on("mouseover", colorchoice2on);
   $("#c2").on("mouseleave", colorchoice2off);  
   $("#c2").on("mousedown", showfloor2);
  
  $("#c3").on("mouseover", colorchoice3on);
   $("#c3").on("mouseleave", colorchoice3off);  
  $("#c3").on("mousedown", showfloor3);
  
  $("#c4").on("mouseover", colorchoice4on);
   $("#c4").on("mouseleave", colorchoice4off);  
  $("#c4").on("mousedown", showfloor4);
  
  $("#c5").on("mouseover", colorchoice5on);
   $("#c5").on("mouseleave", colorchoice5off);
  $("#c5").on("mousedown", showfloor5);
  
  $("#c6").on("mouseover", colorchoice6on);
   $("#c6").on("mouseleave", colorchoice6off);  
  $("#c6").on("mousedown", showfloor6);
  
  $("#c7").on("mouseover", colorchoice7on);
   $("#c7").on("mouseleave", colorchoice7off); 
  $("#c7").on("mousedown", showfloor7);
  
  $("#c8").on("mouseover", colorchoice8on);
   $("#c8").on("mouseleave", colorchoice8off);  
  $("#c8").on("mousedown", showfloor8);
  
   $("#colorstick1").on("mouseover", P1slideup);
   $("#colorstick1").on("mouseleave", P1slidedown);
   
   $("#picker2").on("mouseover", P2slideup);
   $("#picker2").on("mouseleave", P2slidedown);
 });


function Bucketload(){
  TweenMax.from('#bucket', 0.8, {scale:4.0, alpha:0, ease:Elastic.easeOut}); 
  TweenMax.to('#bucket', 0.4, { x:250, ease:Expo.easeIn, delay:0.7, onComplete:Bucketreset}); 
  //TweenMax.to('#bucket', 0.8, {alpha:0, delay: 1.2, onComplete:Bucketreset}); 
}

function Bucketreset(){
  $("bucket").hide();
  TweenMax.to('#bucket', 0.8, { x:0, ease:Expo.easeOut}); 
}


function showfloor1(evt) {
 TweenMax.to('#floor1', 0.7, {css:{opacity:1}, ease:Circ.easeOut}); 
  P1slidedown();
  FloorReset1();
  Bucketload();
 }

function FloorReset1(evt) {
  TweenMax.to('#floor2', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor3', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor4', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor5', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor6', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor7', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor8', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
 }

function colorchoice1on(evt) {
    TweenMax.to('#c1', 0.8, {css:{opacity:1}, ease:Circ.easeOut}); 
    console.log ("SHOW IT");
 }

function colorchoice1off(evt) {
    TweenMax.to('#c1', 0.8, {css:{ opacity:0}, ease:Circ.easeOut}); 
    console.log ("DONT SHOW IT");
 }


function colorchoice2on(evt) {
    TweenMax.to('#c2', 0.8, {css:{opacity:1}, ease:Circ.easeOut}); 
    console.log ("SHOW IT");
 }

function colorchoice2off(evt) {
    TweenMax.to('#c2', 0.8, {css:{ opacity:0}, ease:Circ.easeOut}); 
    console.log ("DONT SHOW IT");
 }

function showfloor2(evt) {
    TweenMax.to('#floor2', 0.7, {css:{opacity:1}, ease:Circ.easeOut}); 
    P1slidedown();
    FloorReset2();
    Bucketload();
 }

function FloorReset2(evt) {
  TweenMax.to('#floor1', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor3', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor4', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor5', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor6', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor7', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor8', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
 }

function colorchoice3on(evt) {
    TweenMax.to('#c3', 0.8, {css:{opacity:1}, ease:Circ.easeOut}); 
    console.log ("SHOW IT");
 }

function colorchoice3off(evt) {
    TweenMax.to('#c3', 0.8, {css:{ opacity:0}, ease:Circ.easeOut}); 
    console.log ("DONT SHOW IT");
 }


function showfloor3(evt) {
    TweenMax.to('#floor3', 0.7, {css:{opacity:1}, ease:Circ.easeOut}); 
    P1slidedown();
    FloorReset3();
    Bucketload();
 }

function FloorReset3(evt) {
  TweenMax.to('#floor1', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor2', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor4', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor5', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor6', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor7', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor8', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
 }

function colorchoice4on(evt) {
    TweenMax.to('#c4', 0.8, {css:{opacity:1}, ease:Circ.easeOut}); 
    console.log ("SHOW IT");
 }

function colorchoice4off(evt) {
    TweenMax.to('#c4', 0.8, {css:{ opacity:0}, ease:Circ.easeOut}); 
    console.log ("DONT SHOW IT");
 }

function showfloor4(evt) {
    TweenMax.to('#floor4', 0.7, {css:{opacity:1}, ease:Circ.easeOut}); 
    P1slidedown();
    FloorReset4();
    Bucketload();
 }

function FloorReset4(evt) {
  TweenMax.to('#floor1', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor2', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor3', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor5', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor6', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor7', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor8', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
 }

function colorchoice5on(evt) {
    TweenMax.to('#c5', 0.8, {css:{opacity:1}, ease:Circ.easeOut}); 
    console.log ("SHOW IT");
 }

function colorchoice5off(evt) {
    TweenMax.to('#c5', 0.8, {css:{ opacity:0}, ease:Circ.easeOut}); 
    console.log ("DONT SHOW IT");
 }

function showfloor5(evt) {
    TweenMax.to('#floor5', 0.7, {css:{opacity:1}, ease:Circ.easeOut}); 
    P1slidedown();
    FloorReset5();
    Bucketload();
 }

function FloorReset5(evt) {
  TweenMax.to('#floor1', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor2', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor3', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor4', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor6', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor7', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor8', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
 }

function colorchoice6on(evt) {
    TweenMax.to('#c6', 0.8, {css:{opacity:1}, ease:Circ.easeOut}); 
    console.log ("SHOW IT");
 }

function colorchoice6off(evt) {
    TweenMax.to('#c6', 0.8, {css:{ opacity:0}, ease:Circ.easeOut}); 
    console.log ("DONT SHOW IT");
 }

function showfloor6(evt) {
    TweenMax.to('#floor6', 0.7, {css:{opacity:1}, ease:Circ.easeOut}); 
    P1slidedown();
    FloorReset6();
    Bucketload();
 }

function FloorReset6(evt) {
  TweenMax.to('#floor1', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor2', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor3', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor4', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor5', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor7', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor8', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
 }

function colorchoice7on(evt) {
    TweenMax.to('#c7', 0.8, {css:{opacity:1}, ease:Circ.easeOut}); 
    console.log ("SHOW IT");
 }

function colorchoice7off(evt) {
    TweenMax.to('#c7', 0.8, {css:{ opacity:0}, ease:Circ.easeOut}); 
    console.log ("DONT SHOW IT");
 }


function showfloor7(evt) {
    TweenMax.to('#floor7', 0.7, {css:{opacity:1}, ease:Circ.easeOut}); 
    P1slidedown();
    FloorReset7();
    Bucketload();
 }

function FloorReset7(evt) {
  TweenMax.to('#floor1', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor2', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor3', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor4', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor5', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor6', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor8', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
 }

function colorchoice8on(evt) {
    TweenMax.to('#c8', 0.8, {css:{opacity:1}, ease:Circ.easeOut}); 
    console.log ("SHOW IT");
 }

function colorchoice8off(evt) {
    TweenMax.to('#c8', 0.8, {css:{ opacity:0}, ease:Circ.easeOut}); 
    console.log ("DONT SHOW IT");
 }


function showfloor8(evt) {
    TweenMax.to('#floor8', 0.7, {css:{opacity:1}, ease:Circ.easeOut}); 
    P1slidedown();
    FloorReset8();
    Bucketload();
 }

function FloorReset8(evt) {
  TweenMax.to('#floor1', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor2', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor3', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor4', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor5', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor6', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
  TweenMax.to('#floor7', 0.1, {css:{opacity:0}, ease:Circ.easeOut}); 
 }

///////////////////////////////////////


function P1slideup(evt) {
    TweenMax.to('#colorstick1', 0.4, {y:-185, ease:Circ.easeOut}); 
 }

function P1slidedown(evt) {
   TweenMax.to('#colorstick1', 0.7, {y:0, ease:Elastic.easeOut});      
 }

function P2slideup(evt) {
    TweenMax.to('#picker2', 0.4, {y:-185, ease:Circ.easeOut});       
 }

function P2slidedown(evt) {
   TweenMax.to('#picker2', 0.7, {y:0, ease:Elastic.easeOut});      
 }


// testing code
/*$( document ).on( "mousemove", function( event ) {
  $( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
});*/

 
//// USING JAVASCRIPT TO CALL FUNCTIONS///
//var colorp1 = document.getElementById('picker1');
//var colorp2 = document.getElementById('picker2');

// Color Picker 1 animation SELECTION
/*colorp1.onmouseover = function(e) {
  console.log("pop up picker1")
  TweenMax.to('#picker1', 0.4, {y:-185, ease:Circ.easeOut});
}

colorp1.onmouseleave = function(e) {
  console.log("pop down picker1")
  TweenMax.to('#picker1', 0.7, {y:0, ease:Elastic.easeOut});
}


// Color Picker 2 animation SELECTION
colorp2.onmouseover = function(e) {
  console.log("pop up picker2")
  TweenMax.to('#picker2', 0.4, {y:-185, ease:Circ.easeOut});
}

colorp2.onmouseleave = function(e) {
  console.log("pop down picker2")
  TweenMax.to('#picker2', 0.7, {y:0, ease:Elastic.easeOut});
}*/