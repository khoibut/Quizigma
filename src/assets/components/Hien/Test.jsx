import React, { useState } from 'react';

const Test = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToSection = (index) => {
    const section = document.getElementById(`section-${index}`);
    section.scrollIntoView({ behavior: 'smooth' });
    setCurrentIndex(index);
  };

  return (
    <div>
      {/* Container for scrollable sections */}
      <div className="snap-container overflow-x-scroll snap-x h-screen w-full flex">
        <section
          id="section-0"
          className="snap-section h-screen w-full flex-shrink-0 flex items-center justify-center bg-gray-200"
        >
          <h1>Section 1</h1>
        </section>
        <section
          id="section-1"
          className="snap-section h-screen w-full flex-shrink-0 flex items-center justify-center bg-gray-300"
        >
          <h1>Section 2</h1>
        </section>
        <section
          id="section-2"
          className="snap-section h-screen w-full flex-shrink-0 flex items-center justify-center bg-gray-400"
        >
          <h1>Section 3</h1>
        </section>
        {/* Add more sections as needed */}
      </div>

      {/* Button container for navigation */}
      <div className="fixed bottom-4 w-full flex justify-center gap-4 z-50">
        <button
          onClick={() => currentIndex > 0 && scrollToSection(currentIndex - 1)}
          className="bg-gray-800 text-white py-2 px-4 rounded"
          disabled={currentIndex === 0}
        >
          Previous
        </button>
        <button
          onClick={() => currentIndex < 2 && scrollToSection(currentIndex + 1)}
          className="bg-gray-800 text-white py-2 px-4 rounded"
          disabled={currentIndex === 2}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Test;
