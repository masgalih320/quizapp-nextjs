import { use, useState } from "react"

export default function Home({ question }) {
  const [currentQuestion, setCurrent] = useState(0)
  const [correctAnswer, setCorrect] = useState(0)
  const [incorrectAnswer, setIncorect] = useState(0)
  const [isIncorrect, setIsIncorrect] = useState(false)

  function handleClick(ans) {
    const answer = question[currentQuestion].answer
    if (ans == answer) {
      setCorrect(correctAnswer + 1)
    } else {
      setIncorect(incorrectAnswer + 1)
    }
  }

  return (
    <div className="overflow-hidden select-none" >
      <div className="h-[45vh] p-6 mb-4 flex items-center justify-center relative">
        <div className="bg-gradient-to-b from-blue-500 to-white absolute top-0 left-0 right-0 bottom-0"></div>
        <h3 className="absolute top-2 left-3 z-50">
          <div className="font-bold">Question: <span id="totalQuestion">{question.length}</span></div>
          <div className="font-bold">Correct: <span id="totalCorrect">{correctAnswer}</span></div>
          <div className="font-bold">Incorrect: <span id="totalIncorrect">{incorrectAnswer}</span></div>
        </h3>
        <div className="font-bold text-4xl z-50 text-center">{question[currentQuestion].question}</div>
      </div>
      <div className="h-[50vh] flex justify-between items-center space-x-5 mx-5">
        {question[currentQuestion].choices.map((seg) => {
          return (
            <div onClick={() => handleClick(seg)} className="p-4 bg-blue-400 border-blue-500 hover:bg-blue-600 hover:border-blue-600 duration-300 border-2 h-80 w-full rounded-lg cursor-pointer flex items-center justify-center">
              <div className="text-white font-sans font-bold text-2xl text-center">{seg}</div>
            </div>
          )
        })}
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