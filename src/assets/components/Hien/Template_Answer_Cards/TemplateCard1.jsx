import ExampleAnswer from '../Icons&Images/gojoPeter.jpg'

function TemplateCard1() {
    return(
        <>
            <div className={`p-2 flex flex-col snap-center rounded-3xl bg-red-500 h-[50vh] md:w-[38vh] min-w-[30vh] transition ease-in-out duration-300 md:hover:-translate-y-[24vh] hover:-translate-y-[30vh]`}>
                <div className="bg-white w-1/4 md:h-10  self-end flex flex-col rounded-2xl mb-2">
                    <span className="self-center md:text-2xl text-2sm">#1</span>
                </div>
                <div className="w-full h-full overflow-y-auto">
                    <img src={ExampleAnswer} alt="" />
                </div>
            </div>
        </>
    )
}

export default TemplateCard1;