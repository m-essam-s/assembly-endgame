const Keyboard = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return (
        <section className="flex flex-wrap justify-center gap-[8px] max-w-[450px] m-[36px]">
            {alphabet.split("").map(letter => (
                <button
                    key={letter}
                    className="rounded-[3px] bg-[#FCBA29] text-[#000] border-[1px] border-[#D7D7D7] w-[35px] h-[35px] cursor-pointer"
                >
                    {letter.toUpperCase()}</button>
            ))}
        </section>
    );
}

export default Keyboard;
