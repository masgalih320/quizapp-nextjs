export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="h-[45vh] p-6 mb-4 flex items-center justify-center relative bg">
        <h3 className="absolute top-2 left-3">
          <div className="font-bold">Question: <span id="totalQuestion">0</span></div>
          <div className="font-bold">Correct: <span id="totalCorrect">0</span></div>
          <div className="font-bold">Incorrect: <span id="totalIncorrect">0</span></div>
        </h3>
        <div className="font-bold text-4xl select-none">Bebek bebek apa yang bikin kzl?</div>
      </div>
      <div className="h-[50vh] flex justify-between items-center space-x-5 mx-5">
        <div className="p-4 bg-blue-400 border-blue-500 hover:bg-blue-600 hover:border-blue-600 duration-300 border-2 h-80 w-full rounded-lg cursor-pointer flex items-center justify-center">
          <div className="text-white font-sans font-bold text-2xl text-center select-none">Bebek ga bisa jalan cuyy anjay mabar</div>
        </div>
        <div className="p-4 bg-blue-400 border-blue-500 hover:bg-blue-600 hover:border-blue-600 duration-300 border-2 h-80 w-full rounded-lg cursor-pointer flex items-center justify-center">
          <div className="text-white font-sans font-bold text-2xl text-center select-none">Bebek</div>
        </div>
        <div className="p-4 bg-blue-400 border-blue-500 hover:bg-blue-600 hover:border-blue-600 duration-300 border-2 h-80 w-full rounded-lg cursor-pointer flex items-center justify-center">
          <div className="text-white font-sans font-bold text-2xl text-center select-none">Bebek</div>
        </div>
        <div className="p-4 bg-blue-400 border-blue-500 hover:bg-blue-600 hover:border-blue-600 duration-300 border-2 h-80 w-full rounded-lg cursor-pointer flex items-center justify-center">
          <div className="text-white font-sans font-bold text-2xl text-center select-none">Bebek</div>
        </div>
      </div>
    </div>
  )
}