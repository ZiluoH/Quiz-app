var questionlist = [
  {
  	question: "question1",
  	answer: "1"
  },
  {
  	question:"Q2",
  	answer:"2"
  },
  {
  	question:"Q3",
  	answer:"three"
  },
   {
  	question:"Q4",
  	answer:"4"
  }, {
  	question:"Q5",
  	answer:"five"
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