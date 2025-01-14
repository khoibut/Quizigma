import ExampleAnswer from '../../Icons&Images/gojoPeter.jpg'

function TemplateCard1() {
    return(
        <>
            <div className={`p-2 pt-1 flex flex-col snap-center rounded-3xl bg-red-500 md:h-[43vh] h-[38vh] md:w-[38vh] min-w-[30vh] cursor-pointer md:hover:animate-rgbBorder md:hover:border-2`}>
                <div className="bg-white w-1/4 md:h-7 self-end flex flex-col rounded-2xl mb-2">
                    <span className="self-center md:text-2xl text-2sm">#1</span>
                </div>
                <div className="w-full h-full overflow-y-auto rounded-3xl p-1">
                    <img src={ExampleAnswer} alt="" className='rounded-3xl'/>
                </div>
            </div>
        </>
    )
}

export default TemplateCard1;