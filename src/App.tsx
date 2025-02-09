import './App.css'
import { useState } from "react"
import Header from './components/Header'
import GameStatuse from './components/GameStatuse'
import Keyboard from './components/Keyboard'
import LanguageChips from './components/LanguageChips'
import Word from './components/Word'
import NewGameButton from './components/NewGameButton'
import { languages } from './languages'
import { getFarewellText, getRandomWord } from './utils'

function App() {
  const [currentWord, setCurrentWord] = useState<string>(() => getRandomWord())
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const wrongGuessCount =
    guessedLetters.filter(letter => !currentWord.includes(letter)).length
  const isGameWon =
    currentWord.split("").every(letter => guessedLetters.includes(letter))
  const isGameLost = wrongGuessCount >= languages.length - 1
  const isGameOver = isGameWon || isGameLost
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
  const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)


  const addGuessedLetter = (letter: string) => {
    setGuessedLetters(
      prevLetters => prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    )
  }

  function startNewGame() {
    setCurrentWord(getRandomWord())
    setGuessedLetters([])

  }

  return (
    <main className='flex flex-col items-center '>
      <Header />
      <GameStatuse
        wrongGuessCount={wrongGuessCount}
        isGameOver={isGameOver}
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        farewellText={wrongGuessCount > 0 ? getFarewellText(languages[wrongGuessCount - 1].name) : ""}
        isLastGuessIncorrect={isLastGuessIncorrect ? true : false}
      />
      <LanguageChips
        wrongGuessCount={wrongGuessCount}
      />
      <Word
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        isGameLost={isGameLost}
      />
      <Keyboard
        addGuessedLetter={addGuessedLetter}
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        isGameOver={isGameOver}
      />
      <NewGameButton
        isGameOver={isGameOver}
        startNewGame={startNewGame}
      />
    </main>
  )
}

export default App
