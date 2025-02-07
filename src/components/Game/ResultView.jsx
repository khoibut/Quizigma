import CorrectScreen from "../In_game/CorrectScreen";
import GameTopBar from "../In_game/GameTopBar";
import ResultScreen from "../In_game/ResultScreen";
import WrongScreen from "../In_game/WrongScreen";
function ResultView({ result, setView,player,roomId,stompClient }) {
    function renderResult() {
        if (result == "correct") {
            return <ResultScreen correct={true} onNext={()=>{setView('quiz')}}/>
        }
        if (result == "wrong") {
            return <ResultScreen correct={false} onNext={()=>{setView('quiz')}}/>
        }
    }
    return (
        <>
            <GameTopBar player={player} roomId={roomId} stompClient={stompClient}/>
            {renderResult()}
        </>
    );
}
export default ResultView;