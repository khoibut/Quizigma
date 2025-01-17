import CorrectScreen from "../In_game/CorrectScreen";
import WrongScreen from "../In_game/WrongScreen";
function ResultView({ result, setView }) {
    function renderResult() {
        if (result == "correct") {
            return <CorrectScreen onNext={()=>{setView('quiz')}}/>
        }
        if (result == "wrong") {
            return <WrongScreen onNext={()=>{setView('quiz')}}/>
        }
    }
    return (
        <>
            {renderResult()}
        </>
    );
}
export default ResultView;