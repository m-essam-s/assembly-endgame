import './App.css'
import { useState } from "react"
import Header from './components/Header'
import GameStatuse from './components/GameStatuse'
import Keyboard from './components/Keyboard'
import LanguageChips from './components/LanguageChips'
import Word from './components/Word'
import NewGameButton from './components/NewGameButton'

function App() {
  const [currentWord, setCurrentWord] = useState<string>("react")
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const addGuessedLetter = (letter: string) => {
    setGuessedLetters(
      prevLetters => prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    )
  }

  console.log(guessedLetters)

  return (
    <main className='flex flex-col items-center '>
      <Header />
      <GameStatuse />
      <LanguageChips />
      <Word
        currentWord={currentWord}
        guessedLetters={guessedLetters}
      />
      <Keyboard
        addGuessedLetter={addGuessedLetter}
        currentWord={currentWord}
        guessedLetters={guessedLetters}
      />
      <NewGameButton />
    </main>
  )
}

export default App
