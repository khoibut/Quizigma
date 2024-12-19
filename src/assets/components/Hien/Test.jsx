import { useState } from "react";
import TemplateCard from "./TemplateQuiz1.jsx"

const cards = [
  TemplateCard,
  TemplateCard,
  TemplateCard,
  TemplateCard
];

function RainbowDeck() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div class="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div
        class={`${cards[currentIndex]}`}
      ></div>
      <button
        onClick={handleNext}
        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Next
      </button>
    </div>
  );
}

export default RainbowDeck;
