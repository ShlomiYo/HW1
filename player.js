
var events = require('events');
var util = require('util');





util.inherits(Player, events.EventEmitter);



//############################ Constructor ###############################
function Player(name){

	this.balance = 0;					// balance Var is an object field which saves the player score balance
	this.name = name;					// name saves the player name
	this.msg = '';						// msg Var is an object field which saves all of the object messages
	events.EventEmitter.call(this);
	console.log("\n\n");
}



//############################ ProtoType Functions ###############################

Player.prototype.displayProto = function(){ // Return A String Which Includes The Object Name & TotalScore Balance

	this.emit("displayEvent");

	return this.msg;
}


Player.prototype.golPlusProto = function(){ // Increase Gols By 1

	this.balance = this.balance + 1;
	this.emit("golPlusEvent");
}


Player.prototype.golMinusProto = function(){ // Decrease Gols By 1


	if(this.balance > 0){

		this.balance = this.balance - 1;
		this.emit("golMinusEvent");
	}
	else{

		this.emit("underLimitEvent");
	}

}




//############################ Exported Functions ###############################

//############# Creating A new Player Object ############
exports.createPlayer = function(name) {


	var acc = new Player(name);
	acc.on("golPlusEvent", golPlusInner);
	acc.on("golMinusEvent", golMinusInner);
	acc.on("underLimitEvent", underLimit);
	acc.on("displayEvent", display);
	return acc;

}


function golPlusInner(){

	this.msg += "\ngolPlusEvent Was Called, The Player: " + this.name + " Score Is: " + this.balance; // saveing the msg to the current object
	console.log("golPlusEvent Was Called, The Player: " + this.name + " Score Is: " + this.balance);
}


function golMinusInner(){

	this.msg += "\ngolMinusEvent Was Called, The Player: " + this.name+" Score Is: " + this.balance; // saveing the msg
	console.log("golMinusEvent Was Called, The Player: " + this.name+" Score Is: " + this.balance);
}

function underLimit(){

	this.msg +="\nunderLimitEvent Was Called, The Player: " + this.name + ", Balance Cannot Go Below 0"; // saveing the msg
	console.log("underLimitEvent Was Called, The Player: " + this.name + ", Balance Cannot Go Below 0");
}


function display(){


	this.msg += "\n\n-------------------------------------------------------------------";			    // ""
	this.msg += "\ndisplayEvent Was Called, The Player: " + this.name + ", Balance: " + this.balance;   // saveing the msg
	this.msg += "\n-------------------------------------------------------------------\n\n";			// ""


	console.log("-------------------------------------------------------------------");
	console.log("displayEvent Was Called, The Player: " + this.name + ", Balance: " + this.balance);
	console.log("-------------------------------------------------------------------");
}

