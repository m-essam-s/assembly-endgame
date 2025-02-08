import './App.css'
import Header from './components/Header'
import GameStatuse from './components/GameStatuse'
import Keyboard from './components/Keyboard'
import LanguageChips from './components/LanguageChips'
import Word from './components/Word'
import NewGameButton from './components/NewGameButton'

function App() {

  return (
    <main className='flex flex-col items-center '>
      <Header />
      <GameStatuse />
      <LanguageChips />
      <Word currentWord={"react"} />
      <Keyboard />
      <NewGameButton />
    </main>
  )
}

export default App
