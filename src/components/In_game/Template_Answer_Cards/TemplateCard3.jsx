function TemplateCard3() {
    return(
        <>
            <div className={`p-2 pt-1 flex flex-col snap-center rounded-3xl bg-blue-500 md:h-[43vh] h-[38vh] md:w-[38vh] min-w-[30vh] cursor-pointer md:hover:animate-rgbBorder md:hover:border-2`}>
                <div className="bg-white w-1/4 md:h-7 self-end flex flex-col rounded-2xl mb-2">
                    <span className="self-center md:text-2xl text-2sm">#3</span>
                </div>
                <div className="w-full h-full overflow-y-auto rounded-3xl p-1">
                    <span className="md:text-xl text-2sm text-white">Usada Pekora (兎田ぺこら) is a Japanese female VTuber from hololive , debuting as a member of Gen 3 "hololive Fantasy" (ホロライブファンタジー) along with Uruha Rushia , Shiranui Flare , Shirogane Noel and Houshou Marine .</span>
                </div>
            </div>
        </>
    )
}

export default TemplateCard3;