import { languages } from "../languages";

const LanguageChips = () => {
    return (
        <section className="flex flex-wrap justify-center gap-[5px] m-[36px] max-w-[350px]">
            {languages.map(lang => {

                return (
                    <span
                        className="rounded-[3px] p-[4.5px]"
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
