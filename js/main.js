var questionlist = [
  {
  	question: "How many colors in a rainbow?",
  	answer: "7"
  },
  {
  	question:"What is the capital city of California?",
  	answer:"Sacramento"
  },
  {
  	question:"5 + 6 = ?",
  	answer:"11"
  },
   {
  	question:"Which team will win NBA Championship this year?",
  	answer:"Spurs"
  }, {
  	question:"The country which ranks the 2nd in term of land area is",
  	answer:"Canada"
  },
]

// console.log(questionlist)




for (var i = 0; i < questionlist.length; i++) {

    var Question = document.createElement('p')
    
    var test = document.createElement('li')
    var answerbar = document.createElement('input')
    answerbar.id = "input" + i

	var questions = document.createTextNode(questionlist[i].question)
    Question.appendChild(questions)
	test.appendChild(Question)
	test.appendChild(answerbar)

	// console.log(test)
	// console.log(Question)


	document.getElementById('yourquestion').appendChild(test)

	}




function check(){
	var correct = 0
    var wrong = 0
	for (var i = 0; i < questionlist.length; i++) {
		var Answer = document.getElementById('input' + i).value
        console.log(Answer)
		if (Answer == questionlist[i].answer) {correct++}
		
	 else {

		wrong++
	}

	document.getElementById('correct').innerHTML = correct
	document.getElementById('wrong').innerHTML = wrong
}
return
}