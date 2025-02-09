import clsx from "clsx";

const Word = (
    {
        currentWord,
        guessedLetters,
        isGameLost
    }: {
        currentWord: string
        guessedLetters: string[],
        isGameLost: boolean
    }
) => {
    return (
        <section className="flex justify-center gap-[2px]">
            {currentWord.split("").map((letter, index) => {
                const shouldRevealLetter = isGameLost || guessedLetters.includes(letter)
                return (
                    <span
                        key={index}
                        className={clsx(
                            " flex items-center justify-center text-[1.125rem] bg-[#323232] text-[#F9F4DA] border-b-[1px] border-[#F9F4DA] w-[40px] h-[40px]",
                            isGameLost && !guessedLetters.includes(letter) && "border-red-500 text-red-500"
                        )}
                    >
                        {shouldRevealLetter ? letter.toUpperCase() : ""}
                    </span>
                )
            })}
        </section>
    );
}

export default Word;
