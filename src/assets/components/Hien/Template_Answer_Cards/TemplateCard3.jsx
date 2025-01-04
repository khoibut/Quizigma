import React, { useState } from "react";

function TemplateCard3() {
    return(
        <>
            <div className={`p-2 flex flex-col snap-center rounded-3xl bg-blue-500 h-[50vh] md:w-[38vh] min-w-[30vh] transition ease-in-out duration-300 md:hover:-translate-y-[24vh] hover:-translate-y-[30vh]`}>
                <div className="bg-white w-1/4 md:h-10  self-end flex flex-col rounded-2xl mb-2">
                    <span className="self-center md:text-2xl text-2sm">#3</span>
                </div>
                <div className="w-full h-full overflow-y-auto">
                    <span className="md:text-xl text-2sm text-white">Usada Pekora (兎田ぺこら) is a Japanese female VTuber from hololive , debuting as a member of Gen 3 "hololive Fantasy" (ホロライブファンタジー) along with Uruha Rushia , Shiranui Flare , Shirogane Noel and Houshou Marine .</span>
                </div>
            </div>
        </>
    )
}

export default TemplateCard3;