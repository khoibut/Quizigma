import { useState } from "react";
import TemplateQuiz1 from "./Template_Quizzes/TemplateQuiz1.jsx";
import TemplateQuiz2 from "./Template_Quizzes/TemplateQuiz2.jsx";

const cards = [
  TemplateQuiz1,
  TemplateQuiz2
];

function Deck() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const CurrentCard = cards[currentIndex];

  return (
    <div className="flex flex-col items-center h-screen bg-gray-200">
      <div className="transition-transform duration-500 transform">
        <CurrentCard /> {/* Render the current card */}
      </div>
      <div class="flex justify-center gap-5">
        <button onClick={handlePrevious} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
          Previous
        </button>
        <button onClick={handleNext} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
          Next
        </button>
      </div>
    </div>
  );
}

export default Deck;
