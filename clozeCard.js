function ClozeCard(text, cloze) {
	this.fullText = text;
	this.cloze = cloze;

	if (this.fullText.includes(this.cloze)) {
		this.partial = this.fullText.replace(this.cloze, "...");
	}
	else {
		console.log(this.cloze + " doesn't appear in "+ this.fullText);
	}
}
	// ClozeCard.prototype.partialText = function() {
	// 	console.log(this.fullText.replace(this.cloze, "..."));
	// };

	module.exports = ClozeCard;