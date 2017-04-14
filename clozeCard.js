function ClozeCard(text, cloze) {
	this.fullText = text;
	this.cloze = cloze;

	if (this.fullText.includes(this.cloze)) {
		this.partial = this.fullText.replace(this.cloze, "...");
	}
	else {
		console.log(this.cloze + " doesn't appear in "+ this.fullText);
	}
	// console.log("A: "+this.fullText.replace(this.cloze, "..."));
	
	// this.partial = function(){
	// 	if()
	// 		console.log(this.fullText.replace(this.cloze, "..."));
	// }
	// this.partial = this.fullText.replace(this.cloze, "...");
	// this.partial = this.partialText();
}
	// ClozeCard.prototype.partiaText = function() {
	// 	console.log(this.fullText.replace(this.cloze, "..."));
	// };

	module.exports = ClozeCard;