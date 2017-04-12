// =============================CONSTRUCTOR FUNCTIONS=============================

function BasicCard(front, back) {
	this.front = front;
	this.back = back;
}

function ClozeCard(text, cloze) {
	this.fullText = text;
	this.cloze = cloze;
	this.partial = this.fullText.replace(this.cloze, "...");
}

// =============================EXAMPLES=============================
var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George t");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// // " ... was the first president of the United States.
console.log(firstPresidentCloze.partial);

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze("This doesn't work", "oops"); 
