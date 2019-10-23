let correctCards = 0;
$( init );

function init(){
	$("body").removeClass("addBack");
	$("#slots").html(" ");
	$("#cards").html(" ");
	correctCards = 0;
	createSlots();
	createCards();
}

function createCards(){
	let card = [1,2,3,4,5,6,7,8,9,10];
	card.sort(function(){return .5-Math.random()});
	for ( let i=0; i<10; i++ ) {
    	$('<div>' + card[i] + '</div>').data('number', card[i]).addClass("numberCard").appendTo('#cards').draggable({
      		stack: '#cards div',
      		cursor: 'move',
      		revert: true
    	});
  	}
}

function createSlots(){
	let words = [ 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten' ];
	for ( let i=0; i<10; i++ ) {
    	$('<div>' + words[i] + '</div>').data('number', i+1).addClass("numberSlot").appendTo('#slots').droppable({
    		accept:".numberCard",
    		classes:{
    			"ui-droppable-active": "ui-state-active",
    			"ui-droppable-hover": "ui-state-hover"
    		},
    		drop: dropCards
    	});
  	}
}

function dropCards(event,ui){
	let slotNumber = $(this).data('number');
  	let cardNumber = ui.draggable.data('number');
    if(slotNumber==cardNumber){
    	ui.draggable.draggable('disable');
    	$(this).droppable('disable');
    	ui.draggable.position({
      		of: $(this), my: 'left top', at: 'left top'
    	});
    	ui.draggable.addClass("rightSlot").removeClass("wrongSlot");
    				// This prevents the card from being pulled back to its initial position once it has been dropped
    	ui.draggable.draggable('option', 'revert', false);
    	correctCards++;
    	if(correctCards==10){
    		winGame();
    	}
    } else{
    	ui.draggable.draggable({revert: true});
    	ui.draggable.addClass("wrongSlot");
    }  
}

function winGame(){
	$("body").addClass("addBack");
	$(".numberCard").addClass("winColor");
}
