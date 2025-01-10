function TemplateCard2() {
    return(
        <>
            <div className={`p-2 pt-1 flex flex-col snap-center rounded-3xl bg-yellow-500 md:h-[43vh] h-[38vh] md:w-[38vh] min-w-[30vh] cursor-pointer md:hover:animate-rgbBorder md:hover:border-2`}>
                <div className="bg-white w-1/4 md:h-7 self-end flex flex-col rounded-2xl mb-2">
                    <span className="self-center md:text-2xl text-2sm">#2</span>
                </div>
                <div className="w-full h-full overflow-y-auto rounded-3xl p-1">
                    <span className="md:text-xl text-2sm text-white">
                        Femboy (/ˈfɛmbɔɪ/ ⓘ) is a slang term that refers to males, usually cisgender, who express themselves with traditionally feminine behaviours, or—especially in the variant spelling femboi—to 
                        LGBTQ people of any gender identity who affect a "soft" masculine look.[1] As an Internet aesthetic, this may be through the use of jewellery, wearing feminine clothing and makeup, or expressing 
                        feminine behavioural qualities. Femboy can be used as both a sexual and non-sexual term; it does not denote a specific sexual orientation or gender role.
                        <br/><br/>
                        The term originated in the 1990s. It has since been popularised through internet forums and social media, starting on 4chan and expanding to other sites such as Reddit and TikTok, where hashtag 
                        trends such as "#femboyfriday" have received attention in the media. In gender studies, the term has also been used as an identifier for transgender individuals; in porn studies, the term has been 
                        seen as an identifier for a submissive role in intercourse and as exhibiting elements of sexual fantasy.
                    </span>
                </div>
            </div>
        </>
    )
}

export default TemplateCard2;