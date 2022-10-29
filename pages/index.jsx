import { useEffect, useState } from "react"

export default function Home({ question }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentQuestionAnswer, setCurrentQuestionAnswer] = useState(question[currentQuestionIndex].answer)
  const [correctAnswerTotal, setCorrectAnswerTotal] = useState(0)
  const [incorrectAnswerTotal, setIncorrectAnswerTotal] = useState(0)
  const [isOver, setIsOver] = useState(false)
  const [timer, setTimer] = useState(100)

  useEffect(() => {
    let timerEl = document.getElementById('timer')
    timerEl.style.width = `${timer}%`
  })

  function handleClick(ans) {
    ans === currentQuestionAnswer ? setCorrectAnswerTotal(correctAnswerTotal + 1) : setIncorrectAnswerTotal(incorrectAnswerTotal + 1)
    setCurrentQuestionIndex(currentQuestionIndex + 1)
    setCurrentQuestionAnswer(question[question.length - 1].answer)
  }

  function timerCountdown() {
    setTimeout(() => {
      setTimer((timer > 0) ? timer - 10 : 0)
      timer == 0 ? setIsOver(true) : timerCountdown()
    }, 1000)
  }

  timerCountdown()

  return (
    <div className="overflow-hidden select-none relative">
      <div className="absolute top-0 h-2 z-50 bg-gray-300 w-full" id="timer"></div>
      <div className="h-[45vh] p-6 mb-4 flex items-center justify-center relative">
        <div className="bg-gradient-to-b from-blue-500 to-white absolute top-0 left-0 right-0 bottom-0"></div>
        <h3 className="absolute top-2 left-3 z-50">
          <div className="font-bold">Question: <span id="totalQuestion">{question.length}</span></div>
          <div className="font-bold">Correct: <span id="totalCorrect">{correctAnswerTotal}</span></div>
          <div className="font-bold">Incorrect: <span id="totalIncorrect">{incorrectAnswerTotal}</span></div>
        </h3>
        <div className="font-bold text-4xl z-50 text-center">{timer}{question.length - 1 >= currentQuestionIndex ? question[currentQuestionIndex].question : ""}</div>
      </div>
      <div className="h-[50vh] flex justify-between items-center space-x-5 mx-5">
        {question.length - 1 >= currentQuestionIndex ? question[currentQuestionIndex].choices.map((seg) => {
          return (
            <div key={seg} onClick={() => handleClick(seg)} className="p-4 bg-blue-400 border-blue-500 hover:bg-blue-600 hover:border-blue-600 duration-300 border-2 h-80 w-full rounded-lg cursor-pointer flex items-center justify-center">
              <div className="text-white font-sans font-bold text-2xl text-center">{seg}</div>
            </div>
          )
        }) : ""}
      </div>
    </div >
  )
}

export async function getStaticProps() {
  const getQuestion = await fetch(`http://localhost:3000/api/question`)
  const question = await getQuestion.json()
  return {
    props: {
      question: question.data
    }
  }
}