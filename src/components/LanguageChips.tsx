import clsx from "clsx";
import { languages } from "../languages";

const LanguageChips = (
    { wrongGuessCount }: { wrongGuessCount: number }
) => {
    return (
        <section className="flex flex-wrap justify-center gap-[5px] m-[36px] max-w-[350px]">
            {languages.map((lang, index) => {
                const isLanguageLost = index < wrongGuessCount
                return (
                    <span
                        className={clsx(
                            "rounded-[3px] p-[4.5px]",
                            isLanguageLost && "relative before:content-['💀'] before:absolute before:flex before:items-center before:justify-center before:h-full before:w-full before:text-sm before:top-0 before:left-0 before:bg-black/70"
                        )}
                        style={{
                            backgroundColor: lang.backgroundColor,
                            color: lang.color
                        }}
                        key={lang.name}
                    >
                        {lang.name}
                    </span>
                )
            })}
        </section>
    );
}

export default LanguageChips;
