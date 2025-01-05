// src/components/BackgroundSection.js
const Test = () => {
    return (
        <div className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage:"url('https://media.geeksforgeeks.org/wp-content/uploads/20241009154536548672/0_ilw552fVUGbwIzbE.jpg') ", }}>
            {/* Overlay */}
            < div className="absolute inset-0 bg-black opacity-50" ></div>
            {/* Content on top of overlay */}
            < div className="relative z-10 flex items-center justify-center h-full">
                <h1 className="text-white text-5xl font-bold text-center px-4">Welcome to GeeksForGeeks</h1>
            </div>
        </div >
    );
};

export default Test;
