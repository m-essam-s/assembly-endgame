const NewGameButton = (
    { isGameOver }:
        { isGameOver: boolean }
) => {
    return (
        isGameOver ?
            <button
                className=" bg-[#11B5E5] text-[#000] border-[1px] border-[#D7D7D7] rounded-[4px] px-[12px] py-[6px] h-[40px] w-[225px] cursor-pointer"
            >
                New Game
            </button>
            : null
    )
}

export default NewGameButton;
