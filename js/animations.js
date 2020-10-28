let answersCorrect = ['C','D','B','A']
let answersUser = []
let counter = 0
let score = 0

const background = document.body
const congratulations = document.querySelector('.congratulations')

const answersOfQuestionOne = Array.from(document.querySelectorAll('#sectionQuestionOne a'))
const answersOfQuestionTwo = Array.from(document.querySelectorAll('#sectionQuestionTwo a'))
const answersOfQuestionThree = Array.from(document.querySelectorAll('#sectionQuestionThree a'))
const answersOfQuestionFor = Array.from(document.querySelectorAll('#sectionQuestionFor a'))


const nextQuestion = (answers, backgroundColor, lastFunc) => {
    answers.forEach(question => {
        question.addEventListener('click', event => {
            const sectionQuestion = event.target.parentElement.parentElement
            const answer = event.target.getAttribute('value')

            background.style.backgroundColor = backgroundColor

            answersUser.push(answer)
    
            sectionQuestion.style.display = 'none'
            sectionQuestion.nextElementSibling.style.display = 'block'
         
            lastFunc()
        })
    })

   

}


nextQuestion(answersOfQuestionOne, "#ffd1d1", () => {})

nextQuestion(answersOfQuestionTwo, "#ffddbf", () => {})

nextQuestion(answersOfQuestionThree, "#adadad", () => {})

nextQuestion(answersOfQuestionFor, "#fdff8a", () => {

        answersUser.forEach((answer, index) => {
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

