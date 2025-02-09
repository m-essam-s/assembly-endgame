import './App.css'
import { useState } from "react"
import Header from './components/Header'
import GameStatuse from './components/GameStatuse'
import Keyboard from './components/Keyboard'
import LanguageChips from './components/LanguageChips'
import Word from './components/Word'
import NewGameButton from './components/NewGameButton'
import { languages } from './languages'
import { getFarewellText } from './utils'

function App() {
  const [currentWord, setCurrentWord] = useState<string>("react")
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

  return (
    <main className='flex flex-col items-center '>
      <Header />
      <GameStatuse
        wrongGuessCount={wrongGuessCount}
        isGameOver={isGameOver}
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        farewellText={getFarewellText(languages[wrongGuessCount].name)}
        isLastGuessIncorrect={isLastGuessIncorrect ? true : false}
      />
      <LanguageChips
        wrongGuessCount={wrongGuessCount}
      />
      <Word
        currentWord={currentWord}
        guessedLetters={guessedLetters}
      />
      <Keyboard
        addGuessedLetter={addGuessedLetter}
        currentWord={currentWord}
        guessedLetters={guessedLetters}
      />
      <NewGameButton
        isGameOver={isGameOver}
      />
    </main>
  )
}

export default App
