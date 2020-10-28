let answersCorrect = ['C','D','B','A']
let answers = []
let counter = 0
let score = 0

const background = document.body
const congratulations = document.querySelector('.congratulations')

const sectionQuestionOneQuestions = Array.from(document.querySelectorAll('#sectionQuestionOne a'))
const sectionQuestionTwoQuestions = Array.from(document.querySelectorAll('#sectionQuestionTwo a'))
const sectionQuestionThreeQuestions = Array.from(document.querySelectorAll('#sectionQuestionThree a'))
const sectionQuestionForQuestions = Array.from(document.querySelectorAll('#sectionQuestionFor a'))


const nextQuestion = (sectionQuestion, backgroundColor, lastFunc) => {
    sectionQuestion.forEach(question => {
        question.addEventListener('click', event => {
            const answer = event.target.getAttribute('value')
            background.style.backgroundColor = backgroundColor
            answers.push(answer)
    
            event.target.parentElement.parentElement.style.display = 'none'
            event.target.parentElement.parentElement.nextElementSibling.style.display = 'block'
         
            lastFunc()
        })
    })

   

}


nextQuestion(sectionQuestionOneQuestions, "#ffd1d1", () => {})

nextQuestion(sectionQuestionTwoQuestions, "#ffddbf", () => {})

nextQuestion(sectionQuestionThreeQuestions, "#adadad", () => {})

nextQuestion(sectionQuestionForQuestions, "#fdff8a", () => {

        answers.forEach((answer, index) => {
            if(answersCorrect[index] === answer) {
                score +=  25
                return 
            }          
            
    
        })

      const showScore = setInterval(() => {
          
        const showCongratulations = (scorePoints, message) => {
            if (score === scorePoints) {
                congratulations.innerHTML = message
               
            }
        }
        
        showCongratulations(0, `
                                <p>para mais Quizzes clique em <a href="index.html">voltar para os quizzes</a></p>
                                <h2>Você acertou <span style="color:#a32a2a">${counter}%</span> do quiz <p>=(</p></h2>
                                `
                            )
          
        showCongratulations(25, `
                                 <p>para mais Quizzes clique em <a href="index.html">voltar para os quizzes</a></p>
                                 <h2>Você acertou <span style="color:#a32a2a">${counter}%</span> do quiz <p>=(</p></h2> 
                                `
                            ) 
        
        showCongratulations(50, `
                                 <p>para mais Quizzes clique em <a href="index.html">voltar para os quizzes</a></p>
                                 <h2>Bom, você acertou <span style="color:#a3622a">${counter}%</span> do quiz <p>=|</p></h2> 
                                `
                            )
        
        
        showCongratulations(75,  `
                                  <p>para mais Quizzes clique em <a href="index.html">voltar para os quizzes</a></p>
                                  <h2>Parabens, você acertou <span style="color:#2ea32a">${counter}%</span> do quiz <p>=)</p></h2> 
                                 `
                            )

        showCongratulations(100,  `
                                  <p>para mais Quizzes clique em <a href="index.html">voltar para os quizzes</a></p>
                                  <h2>Parabens, você acertou <span style="color:#2ea32a">${counter}%</span> do quiz <p>=)</p></h2> 
                                 `
                            )                   
        
            if (score === counter) {
            return  clearInterval(showScore)      
           }
           counter++
       }, 10)
        
})

