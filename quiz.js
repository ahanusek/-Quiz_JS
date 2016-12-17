function Quiz() {
    this.questions = [];
    this.currentQuestion = 0;
	this.score = 0;

}

Quiz.prototype.add = function(question) {
    this.questions.push(question);

};

Quiz.prototype.select = function(choice){
	if(this.currentQuestion < this.questions.length){
		if(choice == this.questions[this.currentQuestion].correctAnswer)
		this.score ++;	
	} 
	this.currentQuestion++;
}
//

Quiz.prototype.renderIn = function() {
	if(this.currentQuestion < this.questions.length){
		questionContainer.innerHTML = this.questions[this.currentQuestion].question;
		choiceOne.innerHTML = this.questions[this.currentQuestion].answerOne;
		choiceTwo.innerHTML = this.questions[this.currentQuestion].answerTwo;
		progress.innerHTML = `Question ${this.currentQuestion+1} of ${this.questions.length}`;
	} else {
		quizDiv.innerHTML = "<h1>Game over</h2>";
		quizDiv.innerHTML += `<h2>Your score is: ${this.score}</h2>`;
	}
  	
	

};