import { useEffect, useState } from "react";
import { useHorizontalScroll } from "../../utils/HorizontolScroll";
import OptionCardAssignment from "./OptionCardAssignment";
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
                        <OptionCardAssignment
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

            </div>
        </>
    );
}

export default AnswerDeckAssignment;
