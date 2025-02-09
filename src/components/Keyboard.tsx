import clsx from "clsx"

const Keyboard = (
    {
        addGuessedLetter,
        currentWord,
        guessedLetters
    }: {
        addGuessedLetter: (arg0: string) => void,
        currentWord: string,
        guessedLetters: string[]
    }
) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return (
        <section className="flex flex-wrap justify-center gap-[8px] max-w-[450px] m-[36px]">
            {alphabet.split("").map(letter => {
                const isGuessed = guessedLetters.includes(letter)
                const isCorrect = isGuessed && currentWord.split("").includes(letter)
                const isWrong = isGuessed && !currentWord.split("").includes(letter)
                return (
                    <button
                        key={letter}
                        onClick={() => addGuessedLetter(letter)}
                        className={clsx(
                            "rounded-[3px] bg-[#FCBA29] text-[#000] border-[1px] border-[#D7D7D7] w-[35px] h-[35px] cursor-pointer",
                            isCorrect && "bg-green-500",
                            isWrong && "bg-red-500"
                        )}
                    >
                        {letter.toUpperCase()}</button>
                )
            })}
        </section>
    );
}

export default Keyboard;
