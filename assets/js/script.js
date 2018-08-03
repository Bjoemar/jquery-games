let cardtake = ''
let pos1top = ''
let pos2top = ''
let pos3top = ''
let pos1mid = ''
let pos2mid = ''
let pos3mid = ''
let pos1bot = ''
let pos2bot = ''
let pos3bot = ''
let b1b = ''
let b1r = ''
let b2l = ''
let b2r = ''
let b2b = ''
let b3l = ''
let b3b = ''
let b4r = ''
let b4b = ''
let b4t = ''
let b5l = ''
let b5b = ''
let b5t = ''
let b5r = ''
let b6l = ''
let b6b = ''
let b6t = ''
let b7r = ''
let b7t = ''
let b8r = ''
let b8t = ''
let b8l = ''
let b9l = ''
let b9t = ''


let b11b = ''
let b11r = ''
let b22l = ''
let b22r = ''
let b22b = ''
let b33l = ''
let b33b = ''
let b44r = ''
let b44b = ''
let b44t = ''
let b55l = ''
let b55b = ''
let b55t = ''
let b55r = ''
let b66l = ''
let b66b = ''
let b66t = ''
let b77r = ''
let b77t = ''
let b88r = ''
let b88t = ''
let b88l = ''
let b99l = ''
let b99t = ''


let bs = 0;
let rs = 0;

// let b1 = b2 = b3  = b4 = b5 = b6 = b7 = b8 = b9 = [0,0,0,0];

$('#card1').click( function(){

	// $('#card1').children().css({'height':'250px','width':'250px'})
	cardtake = $('.c1').html(); 
	$('#card1').hide();
})

$('#card2').click( function(){

	// $('#card1').children().css({'height':'250px','width':'250px'})
	cardtake = $('.c2').html(); 
	$('#card2').hide();
})
$('#card3').click( function(){

	// $('#card1').children().css({'height':'250px','width':'250px'})
	cardtake = $('.c3').html(); 
	$('#card3').hide();
})
$('#card4').click( function(){

	// $('#card1').children().css({'height':'250px','width':'250px'})
	cardtake = $('.c4').html(); 
	$('#card4').hide();
})
$('#card5').click( function(){

	// $('#card1').children().css({'height':'250px','width':'250px'})
	cardtake = $('.c5').html(); 
	$('#card5').hide();
})





// -----------------------------------

$('#carde1').click( function(){

	// $('#card1').children().css({'height':'250px','width':'250px'})
	cardtake = $('.e1').html(); 
	$('#carde1').hide();
})

$('#carde2').click( function(){

	// $('#card1').children().css({'height':'250px','width':'250px'})
	cardtake = $('.e2').html(); 
	$('#carde2').hide();
})
$('#carde3').click( function(){

	// $('#card1').children().css({'height':'250px','width':'250px'})
	cardtake = $('.e3').html(); 
	$('#carde3').hide();
})
$('#carde4').click( function(){

	// $('#card1').children().css({'height':'250px','width':'250px'})
	cardtake = $('.e4').html(); 
	$('#carde4').hide();
})
$('#carde5').click( function(){

	// $('#card1').children().css({'height':'250px','width':'250px'})
	cardtake = $('.e5').html(); 
	$('#carde5').hide();
})













$('#b1').click( function() {
	$('#b1').html(cardtake);
	pos1top = cardtake;
	cardtake = '';
	b1b = $('#b1 .bottomnum').html();
	b1r = $('#b1 .rightnum').html();

	b11b = $('#b1 .bottomnum1').html();
	b11r = $('#b1 .rightnum1').html();

	if (b1b > b44t ){
		$('#sblue').html(++bs);


	} else if (b1b < b44t){
		$('#sred').html(++rs);

	} else if (b1r > b22l){
		$('#sblue').html(++bs);
	} else if (b1r<b22l){
		$('#sred').html(++rs);
	}
	if (b11r > b2l){
		$('#sred').html(++rs);

	} else if (b11r<b2l){
		$('#sblue').html(++bs);

	}else if (b11b > b4t ){
		$('#sred').html(++rs);

	} else if (b11b < b4t){
		$('#sblue').html(++bs);
	}




})
$('#b2').click( function() {
	$('#b2').html(cardtake);
	pos2top = cardtake;
	cardtake = '';
	b2l = $('#b2 .leftnum').html();
	b2r = $('#b2 .rightnum').html();
	b2b = $('#b2 .bottomnum').html();

	// -----
	b22l = $('#b2 .leftnum1').html();
	b22r = $('#b2 .rightnum1').html();
	b22b = $('#b2 .bottomnum1').html();
	
	if (b2l > b11r ){
		$('#sblue').html(++bs);
		
	} else if (b2r > b33l){
		$('#sblue').html(++bs);
	} else if (b22b > b5t){


	} else if (b2l < b11r ){
		$('#sred').html(++rs);
		
	} else if (b2r < b33l){
		$('#sred').html(++rs);
	} else if (b22b < b5t){


	} else if (b22l > b1r ){
		$('#sred').html(++rs);
		
	} else if (b22r > b3l){

	$('#sred').html(++rs);

	} else if (b22b > b5t){

	$('#sred').html(++rs);
	} else if (b22l < b1r ){
		$('#sblue').html(++bs);
		
	} else if (b22r < b3l){
		$('#sblue').html(++bs);
	} else if (b22b < b5t){
		$('#sblue').html(++bs);
		
	}



})
$('#b3').click( function() {
	$('#b3').html(cardtake);
	pos3top = cardtake;
	cardtake = '';
	b3l = $('#b3 .leftnum').html();
	b3b = $('#b3 .bottomnum').html();

	b33l = $('#b3 .leftnum1').html();
	b33b = $('#b3 .bottomnum1').html();

	if (b3l > b22r) {
		$('#bs').html(++bscore);
	} else if (b3b > b66t) {
		$('#bs').html(++bscore);

	} else if (b3l < b22r) {
		$('#rs').html(++bscore);

	} else if (b3b < b66t) {
		$('#rs').html(++bscore);
		


	} else if (b33l < b2r) {
		$('#bs').html(++bscore);

	} else if (b33b < b6t) {
		$('#bs').html(++bscore);
		
	} else if (b33l > b2r) {
		$('#rs').html(++bscore);

	} else if (b33b > b6t) {
		$('#rs').html(++bscore);
		
	} 

})
$('#b4').click( function() {
	$('#b4').html(cardtake);
	pos1mid = cardtake;
	cardtake = '';
	b4r = $('#b4 .rightnum').html();
	b4b = $('#b4 .bottomnum').html();
	b4t = $('#b4 .topnum').html();

	b44r = $('#b4 .rightnum1').html();
	b44b = $('#b4 .bottomnum1').html();
	b44t = $('#b4 .topnum1').html();


	if (b4r > b55l ){
		$('#bs').html(++bscore);

	} else if (b4b > b77t) {
		$('#bs').html(++bscore);

	} else if (b4t > b11b){
		$('#bs').html(++bscore);

	} else if (b44r > b5l ){
		$('#rs').html(++bscore);

	} else if (b44b > b7t) {
		$('#rs').html(++bscore);

	} else if (b44t > b1b){
		$('#rs').html(++bscore);

	} else if (b4r < b55l ){
		$('#rs').html(++bscore);

	} else if (b4b < b77t) {
		$('#rs').html(++bscore);

	} else if (b4t < b11b){
		$('#rs').html(++bscore);

	} else if (b44r < b5l ){
		$('#bs').html(++bscore);

	} else if (b44b < b7t) {
		$('#bs').html(++bscore);

	} else if (b44t < b1b){
		$('#bs').html(++bscore);

	}
})


$('#b5').click( function() {
	$('#b5').html(cardtake);
	pos2mid = cardtake;
	cardtake = '';
	b5l = $('#b3 .leftnum').html();
	b5b = $('#b3 .bottomnum').html();
	b5t = $('#b3 .topnum').html();
	b5r = $('#b3 .rightnum').html();

	b55l = $('#b3 .leftnum1').html();
	b55b = $('#b3 .bottomnum1').html();
	b55t = $('#b3 .topnum1').html();
	b55r = $('#b3 .rightnum1').html();


		if (b5l > b44r){
			$('#bs').html(++bscore);

	} else if (b5b > b88t) {
		$('#bs').html(++bscore);

	} else if (b5t > b22b){
		$('#bs').html(++bscore);

	}else if (b5r > b66l) {
		$('#bs').html(++bscore);

	} else if (b5l < b44r){
		$('#rs').html(++bscore);

	} else if (b5b < b88t) {
		$('#rs').html(++bscore);

	} else if (b5t < b22b){
		$('#rs').html(++bscore);

	}else if (b5r < b66l) {
		$('#rs').html(++bscore);
		
	} else if (b55l > b4r){
		$('#rs').html(++bscore);

	} else if (b55b > b8t) {
		$('#rs').html(++bscore);

	} else if (b55t > b2b){
		$('#rs').html(++bscore);

	}else if (b55r > b6l) {
		$('#rs').html(++bscore);

	} else if (b55l < b4r){
		$('#bs').html(++bscore);

	} else if (b55b < b8t) {
		$('#bs').html(++bscore);

	} else if (b55t < b2b){
		$('#bs').html(++bscore);

	}else if (b55r < b6l) {
		$('#bs').html(++bscore);
		
	}

})
$('#b6').click( function() {
	$('#b6').html(cardtake);
	pos3mid = cardtake;
	cardtake = '';
	b6l = $('#b6 .leftnum').html();
	b6b = $('#b6 .bottomnum').html();
	b6t = $('#b6 .topnum').html();


	b66l = $('#b6 .leftnum1').html();
	b66b = $('#b6 .bottomnum1').html();
	b66t = $('#b6 .topnum1').html();

	if (b6l > b55r) {
		$('#bs').html(++bscore);

	} else if (b6b > b99t) {
		$('#bs').html(++bscore);



	} else if (b6t > b33b) {
		$('#bs').html(++bscore);



	} else if (b66l > b5r) {
		$('#rs').html(++bscore);



	} else if (b66b > b9t) {
		$('#rs').html(++bscore);



	} else if (b66t > b3b) {
		$('#rs').html(++bscore);

		
	} else if (b6l < b55r) {
		$('#rs').html(++bscore);

	} else if (b6b < b99t) {
		$('#rs').html(++bscore);



	} else if (b6t < b33b) {
		$('#rs').html(++bscore);



	} else if (b66l < b5r) {
		$('#bs').html(++bscore);



	} else if (b66b < b9t) {
		$('#bs').html(++bscore);



	} else if (b66t < b3b) {
		$('#bs').html(++bscore);
		
	}
})
$('#b7').click( function() {
	$('#b7').html(cardtake);
	pos1bot = cardtake;
	cardtake = '';
	b7r = $('#b7 .rightnum').html();
	b7t = $('#b7 .topnum').html();

	b77r = $('#b7 .rightnum1').html();
	b77t = $('#b7 .topnum1').html();

	if (b7r > b88l) {
		$('#bs').html(++bscore);

	} else if (b7t > b44b){
		$('#bs').html(++bscore);

	} else if (b77r > b8l) {
		$('#rs').html(++bscore);

	} else if (b77t > b4b){
		$('#rs').html(++bscore);

	} else if (b7r < b88l) {
		$('#rs').html(++bscore);

	} else if (b7t < b44b){
		$('#rs').html(++bscore);

	} else if (b77r < b8l) {
		$('#bs').html(++bscore);

	} else if (b77t < b4b){
		$('#bs').html(++bscore);

	} 


})
$('#b8').click( function() {
	$('#b8').html(cardtake);
	pos2bot = cardtake;
	cardtake = '';
	b8r = $('#b8 .rightnum').html();
	b8t = $('#b8 .topnum').html();
	b8l = $('#b8 .leftnum').html();

	b88r = $('#b8 .rightnum1').html();
	b88t = $('#b8 .topnum1').html();
	b88l = $('#b8 .leftnum1').html();

	if (b8r > b99l) {
		$('#bs').html(++bscore);

	} else if (b8t > b55b) {
		$('#bs').html(++bscore);

	}else if (b8l > b77r) {
		$('#bs').html(++bscore);

	} else if (b88r > b9l) {
		$('#rs').html(++bscore);

	} else if (b88t > b5b) {
		$('#rs').html(++bscore);

	}else if (b88l > b7r) {
		$('#rs').html(++bscore);
		
	} else if (b8r < b99l) {
		$('#rs').html(++bscore);

	} else if (b8t < b55b) {
		$('#rs').html(++bscore);

	}else if (b8l < b77r) {
		$('#rs').html(++bscore);

	} else if (b88r < b9l) {
		$('#bs').html(++bscore);

	} else if (b88t < b5b) {
		$('#bs').html(++bscore);

	}else if (b88l < b7r) {
		$('#bs').html(++bscore);
		
	}

})
$('#b9').click( function() {
	$('#b9').html(cardtake);
	pos3bot = cardtake;
	cardtake = '';
	b9l = $('#b9 .leftnum').html();
	b9t = $('#b9 .topnum').html();
	b99l = $('#b9 .leftnum1').html();
	b99t = $('#b9 .topnum1').html();

	if (b9l > b88r) {
		$('#bs').html(++bscore);

	} else if (b9t > b66b) {
		$('#bs').html(++bscore);

	} else if (b99l > b8r) {
		$('#rs').html(++bscore);

	} else if (b99t > b6b) {
		$('#rs').html(++bscore);
		
	} else if (b9l < b88r) {
		$('#rs').html(++bscore);

	} else if (b9t < b66b) {
		$('#rs').html(++bscore);

	} else if (b99l < b8r) {
		$('#bs').html(++bscore);

	} else if (b99t < b6b) {
		$('#bs').html(++bscore);
		
	}

})






