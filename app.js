const questionContainer = document.querySelector('#question');
const choiceOne = document.querySelector('#choice0');
const choiceTwo = document.querySelector('#choice1');
const progress = document.querySelector('#progress');
const quizDiv = document.querySelector('#quiz');

const quiz = new Quiz();

const questionOne = new Question('Who is director of American Beauty', 'Sam Mendes', 'Paul Verhoven', 1);
const questionTwo = new Question('Who is director of Dunkirk', 'Christopher Nolan', 'Tim Burton', 1);
const questionThree = new Question('Who is director of Unforgiven', 'Stanley Kubrick', 'Clint Eastwood', 2);
const questionFour = new Question('Who play the main hero in Mad Men', 'Brad Pitt', 'John Hamm', 2);
const questionFive = new Question('Which movie won Oscar for best picture in 2016', 'Spotlight', 'The Revenant', 1);
const questionSix = new Question('How is called the last movie of Martin Scorsese', 'The Wolf of Wall Street', 'Silence', 2);
const questionSeven = new Question('Who is director of The Good, the Bad and the Ugly', 'Sergio Leone', 'Sam Peckinpah', 1);
const questionEight = new Question('How is called the last movie of Ben Afleck', 'Live by Night', 'Gone Girl', 1);
const questionNine = new Question('Who is the author of Magic Mountain ', 'Thomas Wolfe', 'Thomas Mann', 2);


quiz.add(questionOne);
quiz.add(questionTwo);
quiz.add(questionThree);
quiz.add(questionFour);
quiz.add(questionFive);
quiz.add(questionSix);
quiz.add(questionSeven);
quiz.add(questionEight);
quiz.add(questionNine);

quiz.renderIn();


const listener = document.querySelector('#quiz');

listener.addEventListener('click', e => {
	if(e.target.nodeName == 'BUTTON'){
		let choice = e.target.getAttribute('data-guess')
		quiz.select(choice);
		quiz.renderIn();
	}
	
	
})