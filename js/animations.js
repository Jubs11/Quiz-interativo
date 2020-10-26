// bgColor and congratulations

const bgColor = document.querySelector('.wall')
const congratulations = document.querySelector('.congratulations')

// bgColor and congratulations

// questions and Section questions

const questionsOne = document.querySelector('div.questionsOne')
const questionsTwo = document.querySelector('div.questionsTwo')
const questionsThree = document.querySelector('div.questionsThree')
const questionsFor = document.querySelector('div.questionsFor')

const sectionQuestionOne = document.querySelector('#sectionQuestionOne')
const sectionQuestionTwo = document.querySelector('#sectionQuestionTwo')
const sectionQuestionThree = document.querySelector('#sectionQuestionThree')
const sectionQuestionFor = document.querySelector('#sectionQuestionFor')

const questions = document.querySelectorAll('a')

// questions and Section questions

// answers and score

const answerCorrect = ['C','D','B','A']

let answers = []

let answerValue 
  
let score = 0

// answers and score


// functions

const backgroundSectionQuestAndSectionIndex = (backgroundColor, sectionQuestion, SectionIndex) => {
    bgColor.style.backgroundColor = backgroundColor
    sectionQuestion.style.zIndex = SectionIndex
}

const getValueAndAddInAnswers = () => {
    answerValue = event.target.getAttribute('value')

    answers.push(answerValue)
}

const nextQuestionTwoChangeTheBackgroundColorAndStoreTheAnswer = event => {
    getValueAndAddInAnswers()

    bgColor.style.zIndex = 4
    sectionQuestionOne.style.zIndex = 4
    
    if(sectionQuestionOne.style.zIndex === '4') {
        bgColor.style.zIndex = 5
        backgroundSectionQuestAndSectionIndex("#ffd1d9", sectionQuestionTwo, 5)
    }

}

const nextQuestionThreeChangeTheBackgroundColorAndStoreTheAnswer = event => {
    getValueAndAddInAnswers()

    if(sectionQuestionTwo.style.zIndex === '5') {
        backgroundSectionQuestAndSectionIndex("#ffe0d1", sectionQuestionThree, 6)
       }
}

const nextQuestionForChangeTheBackgroundColorAndStoreTheAnswer = event => {
    getValueAndAddInAnswers()

    if(sectionQuestionThree.style.zIndex === '6') {
        backgroundSectionQuestAndSectionIndex("#9fa0a1", sectionQuestionFor, 7)
       }
    
}

const exitOfQuizAndGoToCongratulationsPage =  event => {
    getValueAndAddInAnswers()
    
    answers.forEach((answer, index) => {
        if (answer === answerCorrect[index]) {
                score += 1
        }
    })

    if (sectionQuestionFor.style.zIndex === '7') {
        congratulations.style.zIndex = 8
    }
    if (score >= 3) {
        congratulations.innerHTML = `<h2>Parabens!!! você acertou ${score} de 4 =)</h2>
                                    <p>para mais Quizzes clique em <a href="index.html">voltar para os quizzes</a></p>`
    } else if (score === 2) {
        congratulations.innerHTML = `<h2>Bom resultado você acertou ${score} de 4 =)</h2>
                                    <p>para mais Quizzes clique em <a href="index.html">voltar para os quizzes</a></p>`
    } else {congratulations.innerHTML = `<h2>Que pena você só acertou ${score} de 4 =(</h2>
                                     <p>para mais Quizzes clique em <a href="index.html">voltar para os quizzes</a></p>`}
    
}

// functions

questionsOne.addEventListener('click', nextQuestionTwoChangeTheBackgroundColorAndStoreTheAnswer)


questionsTwo.addEventListener('click', nextQuestionThreeChangeTheBackgroundColorAndStoreTheAnswer)


questionsThree.addEventListener('click', nextQuestionForChangeTheBackgroundColorAndStoreTheAnswer)


questionsFor.addEventListener('click', exitOfQuizAndGoToCongratulationsPage)
