import clsx from "clsx";

const GameStatuse = (
    {
        wrongGuessCount,
        isGameOver,
        isGameWon,
        isGameLost,
        isLastGuessIncorrect,
        farewellText
    }: {
        wrongGuessCount: number,
        isGameOver: boolean,
        isGameWon: boolean,
        isGameLost: boolean,
        isLastGuessIncorrect: boolean,
        farewellText: string
    }
) => {
    if (!isGameOver && isLastGuessIncorrect) {
        return (
            <section className="flex flex-col items-center justify-center bg-[#7A5EA7] rounded-[4px] min-h-[70px] border border-dashed border-[#323232] color-[#F9F4DA] m-[15px] w-full">
                <p className="m-[5px] italic font-medium">{farewellText}</p>
            </section>
        )
    }
    if (!isGameOver) return (
        <section className="flex flex-col items-center rounded-[4px] border color-[#F9F4DA] m-[15px] w-full">
            <h2 className="text-[1.25rem] m-[5px]">Guess the word!</h2>
            <p className="m-[5px]">
                You have {8 - wrongGuessCount != 1 && 8 - wrongGuessCount} {8 - wrongGuessCount == 1 ? <span className="text-red-500">only one</span> : 'chances'} to guess the word
            </p>
        </section>
    )
    return (

        <section className={clsx(
            "flex flex-col items-center rounded-[4px] bg-[#10A95B] color-[#F9F4DA] m-[15px] w-full",
            isGameWon && "bg-[#10A95B]",
            isGameLost && "bg-[#BA2A2A]"
        )}>
            <h2 className="text-[1.25rem] m-[5px]">
                {isGameWon ? "You win!" : "Game over!"}
            </h2>
            <p className="m-[5px]">
                {isGameWon ? "Well done! 🎉" : "You lose!💀 Better start learning Assembly😭"}
            </p>
        </section>

    )
}

export default GameStatuse;
