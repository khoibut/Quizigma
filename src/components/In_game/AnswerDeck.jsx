import { useEffect, useState } from "react";
import OptionCard from "./OptionCard";
import { useHorizontalScroll } from "../../utils/HorizontolScroll";
function AnswerDeck({ question, stompClient, roomId, player }) {
    const [shuffledOptions, setShuffledOptions] = useState([]);
    const elRef = useHorizontalScroll();
    // Function to shuffle an array
    function shuffleArray(array) {
        return array
            .map((value) => ({ ...value, sort: Math.random() })) // Add random sort key
            .sort((a, b) => a.sort - b.sort) // Sort based on random key
            .map(({ sort, ...item }) => item); // Remove the sort key
    }

    useEffect(() => {
        // Store the original index and shuffle the options
        const optionsWithIndex = question.options.map((option, index) => ({
            ...option,
            originalIndex: index + 1, // Store the original index
        }));
        setShuffledOptions(shuffleArray(optionsWithIndex));
    }, [question.options]);

    function randomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }

    return (
        <>
            <div className="flex w-full h-full">
                <div className="bg-gray-800 h-full w-4/5 flex justify-evenly mt-1 pt-2 overflow-auto snap-x space-x-2" ref={elRef}>
                    {shuffledOptions.map((option, index) => (
                        <OptionCard
                            player={player}
                            option={option}
                            question={question}
                            color={randomColor()}
                            index={index+1} // Use the original index
                            key={index}
                            stompClient={stompClient}
                            roomId={roomId}
                        />
                    ))}
                </div>

                <div className="bg-gray-600 h-full w-1/5 mt-1 flex flex-col items-center">
                    <div className="bg-white w-2/3 h-[7vh] rounded-full flex justify-center items-center font-medium mt-3 mb-3 border-l-4 border-r-4 border-purple-900">
                        <span className="text-2sm md:text-5xl animate-wiggle mr-2">
                            +999
                        </span>
                    </div>

                    <div className="flex flex-col md:h-[30vh] h-[20vh] w-full p-2 items-center justify-end">
                        <button className="m-2 group bg-sky-200 w-full md:h-[9vh] h-[5vh] rounded-2xl flex justify-start items-center border-white transition ease-out hover:scale-90 active:scale-75">
                            <div className="md:text-[5vh] font-bold text-sm mr-2 p-2 text-black group-hover:text-sky-900">
                                Next
                            </div>
                        </button>

                        <button className="m-2 group bg-sky-200 w-full md:h-[9vh] h-[5vh] rounded-2xl flex justify-end items-center border-white transition ease-out hover:scale-90 active:scale-75">
                            <div className="md:text-[5vh] font-bold text-sm mr-2 p-2 text-black group-hover:text-sky-900">
                                Back
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AnswerDeck;
