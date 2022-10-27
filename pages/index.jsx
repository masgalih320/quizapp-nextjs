import { useEffect, useState } from "react"

export default function Home({ question }) {
  const [currentQuestion, setCurrent] = useState(0)
  const [currentAnswer, setCurrentAnswer] = useState(question.length - 1 >= currentQuestion ? question[currentQuestion].answer : "")
  const [correctAnswer, setCorrect] = useState(0)
  const [incorrectAnswer, setIncorect] = useState(0)
  const [answerStatus, setAnswerStatus] = useState(false)
  const [isOver, setIsOver] = useState(false)
  const [timer, setTimer] = useState(100)
  const [resetTimer, setResetTimer] = useState(false)

  function handleClick(ans, answerIs) {
    setCurrentAnswer(question[1].answer)
    alert(currentAnswer)
    const answer = question[currentQuestion].answer
    if (ans == answer) {
      setCorrect(correctAnswer + 1)
      setAnswerStatus(true)
      setTimeout(() => {
        question.length - 1 >= currentQuestion ? setCurrent(currentQuestion + 1) : setIsOver(true)
        setTimer(100)
        setResetTimer(true)
      }, 1000)
    } else {
      setIncorect(incorrectAnswer + 1)
      setAnswerStatus(false)
      setTimeout(() => {
        question.length - 1 >= currentQuestion ? setCurrent(currentQuestion + 1) : setIsOver(true)
        setTimer(100)
        setResetTimer(true)
      }, 1000)
    }
  }

  return (
    <div className="overflow-hidden select-none relative">
      <div className="absolute top-0 h-2 z-50 bg-gray-300" style={{ width: `${timer}%` }} id="timer"></div>
      <div className="h-[45vh] p-6 mb-4 flex items-center justify-center relative">
        <div className="bg-gradient-to-b from-blue-500 to-white absolute top-0 left-0 right-0 bottom-0"></div>
        <h3 className="absolute top-2 left-3 z-50">
          <div className="font-bold">Question: <span id="totalQuestion">{question.length}</span></div>
          <div className="font-bold">Correct: <span id="totalCorrect">{correctAnswer}</span></div>
          <div className="font-bold">Incorrect: <span id="totalIncorrect">{incorrectAnswer}</span></div>
        </h3>
        <div className="font-bold text-4xl z-50 text-center">{question.length - 1 >= currentQuestion ? question[currentQuestion].question : ""}</div>
      </div>
      <div className="h-[50vh] flex justify-between items-center space-x-5 mx-5">
        {question.length - 1 >= currentQuestion ? question[currentQuestion].choices.map((seg) => {
          return (
            <div key={seg} onClick={() => handleClick(seg, seg === currentAnswer ? "correct" : "incorrect")} className="p-4 bg-blue-400 border-blue-500 hover:bg-blue-600 hover:border-blue-600 duration-300 border-2 h-80 w-full rounded-lg cursor-pointer flex items-center justify-center">
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