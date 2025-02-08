const Word = ({ currentWord }: { currentWord: string }) => {
    return (
        <section className="flex justify-center gap-[2px]">
            {currentWord.split("").map((letter, index) => (
                <span
                    key={index}
                    className=" flex items-center justify-center text-[1.125rem] bg-[#323232] text-[#F9F4DA] border-b-[1px] border-[#F9F4DA] w-[40px] h-[40px]"
                >
                    {letter.toUpperCase()}
                </span>
            ))}
        </section>
    );
}

export default Word;
