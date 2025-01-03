import ExampleProfilePic from './Icons&Images/godzilla.jpg';
import ExampleImg from './Icons&Images/godzillaxHenry.jpg';
import TempCard1 from './Template_Answer_Cards/TemplateCard1';
import TempCard2 from './Template_Answer_Cards/TemplateCard2';
import TempCard3 from './Template_Answer_Cards/TemplateCard3';
import TempCard4 from './Template_Answer_Cards/TemplateCard4';

function Game_MultipleChoice_Answer(){
    return(
        <>
            <div className="w-full h-screen overflow-hidden">

                {/* Head */}
                <div className="bg-green-500 w-full max-h-[50vh] flex justify-between items-center flex-wrap ">
                    <div className="flex items-center -space-x-8 h-full">
                        <div className="text-5xl text-white pl-5 items-center font-bold mr-10">
                            Quizigma
                        </div>
                        <div className="text-2xl text-white pl-5 items-center font-medium mt-3">
                            #727
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className=" ml-8 text-xl font-medium overflow-hidden max-w-[30vh] max-h-[8vh]">
                            godzilla
                        </div>
                        <div className="w-[8vh] h-[8vh] rounded-full bg-white m-2 overflow-hidden">
                            <img src={ExampleProfilePic} alt="Profile Picture" className="w-full h-full object-fill" />
                        </div>
                    </div>
                </div>

                {/*Main body*/}
                <div className="flex flex-wrap overflow-y-scroll w-full h-[60vh] items-center">
                    <div className="flex w-[92vh] h-full grow justify-center items-center">
                        <div className="bg-gray-100 border-[5px] border-gray-600 rounded-2xl max-w-[60vh] grow h-[50vh] overflow-hidden">
                            <img src={ExampleImg} alt="" className="w-full h-full" />
                        </div>
                    </div>

                    <div className="bg-gray-300 w-[92vh] h-full flex justify-center items-center">
                        <div className="bg-white w-full h-full flex flex-col items-center">
                            <div className="text-xl w-[20vh] h-[6vh] flex justify-center items-center font-medium rounded-full border-4 border-gray-700 m-1">
                                QUESTION
                            </div>
                            <div className="bg-[#D9EAFD] rounded-3xl w-full h-full overflow-y-scroll overflow-hidden">
                                <div className="ml-2 mt-2 mb-2 text-lg">
                                    So as a joke, I went to my friend's house wearing Pekora's wig and clothes. I could barely stop my laughter as he went as red as a tomato and looked at me from head to toe with a bit of drool in his mouth. The way he stared made mde feel a bit funny too, but I decided to tease him more by taking off my clothes. He asked me, "Are you serious?" and I said "Yep peko."
                                    <br/><br/>
                                    He went silent for what seemed like forever, so I asked him, "What's the matter peko?" He said he's confused, but then his boner got really hard, which made me take off his clothes. I expected him to scream, "Stop!" as I kissed him and stroked his cock, but he instead shouted "Oh God, Pekora!" which made me get a boner myself. Before I knew it, I was blowing him for the first time till he came.
                                    <br/><br/>
                                    His semen was so thick, it got stuck inside my throat no matter how hard I swallowed. He then said, "I want to fuck you now!" and seeing that we've already gone that far and we were both naked, I obliged. A few hours later, the jerk went all pale and said to me "Why did we do that? Now I'm not fucking straight." But he still looked so cute all confused like that, so I took pity on him and reassured while wiping his cum off my face, "Let's just pretend I'm still Pekora."
                                    <br/>
                                    <br/>
                                    Q: How did Einstein fall in love with Tesla?     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Answer deck*/}
                <div className="w-full h-full">
                    <div className="bg-gray-700 h-full w-5/6 flex justify-evenly flex-wrap mt-1">
                        <TempCard1 />
                        <TempCard2 />
                        <TempCard3 />
                        <TempCard4 />
                    </div>

                    <div className="bg-red-500 h-full w-1/6">
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Game_MultipleChoice_Answer;