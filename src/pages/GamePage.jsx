import WaitingRoom from "../components/Game/WaitingRoom"
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import SockJS from "sockjs-client"
import { Stomp } from "@stomp/stompjs"
import CorrectScreen from "../components/In_game/CorrectScreen"
import QuizGameplay from "../components/Game/QuizGameplay"
import ResultView from "../components/Game/ResultView"
import PlayerStat from "../components/Game/PlayerStat"
function GamePage() {
    const baseUrl = import.meta.env.VITE_API_URL
    const [player, setPlayer] = useState({
        playing: true,
        name: '',
        score: 0
    })
    const[questions,setQuestions]=useState([])
    const [view, setView] = useState('waiting')
    const [players, setPlayers] = useState([])
    const [stompClientRef, setStompClientRef] = useState()
    const roomId = useParams().roomId
    function randomQuestion(){
        return questions[Math.floor(Math.random()*questions.length)]
    }
    function answerQuestion(question,answer){
        let answerDTO={
            room:roomId,
            player:player.name,
            questionId:question.id,
            answer:answer
        }
        console.log(answerDTO)
        stompClient.publish({destination:'/quizz/player/answer',body:JSON.stringify(answerDTO)})
    }
    function renderView() {
        switch (view) {
            case 'waiting':
                return <WaitingRoom
                    roomId={roomId}
                    player={player}
                    setPlayer={setPlayer}
                    players={players}
                    setPlayers={setPlayers}
                />
            case 'quiz':
                return <QuizGameplay
                    roomId={roomId}
                    player={player}
                    question={randomQuestion()}
                    answerQuestion={answerQuestion}
                    stompClient={stompClientRef}
                />
            case 'correct':
                return <ResultView player={player} roomId={roomId} stompClient={stompClientRef} result='correct' setView={setView}/>
            case 'wrong':
                return <ResultView player={player} roomId={roomId} stompClient={stompClientRef} result='wrong' setView={setView}/>
            case 'end':
                return <PlayerStat player={player} players={players}/>
        }
    }
    useEffect(() => {
        let socket
        let stompClient
        console.log("Effect running", { player, roomId });
        if (!player.playing) {
            console.log(player.name)
            const encodedName = encodeURIComponent(player.name)
            socket = new SockJS(`${baseUrl}/player?room=${roomId}&player=${encodedName}`);
            stompClient = Stomp.over(socket)
            stompClient.heartbeatIncoming = 10000
            stompClient.heartbeatOutgoing = 10000
            setStompClientRef(stompClient)
            stompClient.onWebSocketClose = () => {
                console.log('closed')
                window.location.href = "/join";
            }
            stompClient.connect({}, () => {
                console.log('connected')
                stompClient.subscribe('/topic/player/' + roomId, (message) => {
                    const messageBody = JSON.parse(message.body)
                    console.log(messageBody)
                    if (messageBody.type == 'start') {
                        console.log('Game started')
                    }
                    if (messageBody.type == 'players') {
                        let decodedPlayers = messageBody.players
                        decodedPlayers.forEach(player => {
                            player.name = decodeURIComponent(player.name)
                        })
                        console.log(decodedPlayers)
                        setPlayers(decodedPlayers)
                    }
                    if(messageBody.type=='questions'){
                        setQuestions(messageBody.questions)
                        setView('quiz')
                    }
                    if(messageBody.type=='end'){
                        setPlayers(messageBody.players)
                        setView('end')
                    }
                    if(messageBody.type=='error'){
                        window.location.href="/join"
                    }
                })
                stompClient.subscribe(`/queue/${roomId}/${encodedName}`, (message) => {
                    const messageBody = JSON.parse(message.body)
                    console.log(messageBody)
                    if(messageBody.type=='questions'){
                        setQuestions(messageBody.questions)
                        setView('quiz')
                    }
                    if(messageBody.type=='correct'){
                        setView('correct')
                    }
                    if(messageBody.type=='incorrect'){
                        setView('wrong')
                    }
                    if (messageBody.type == 'error') {
                        window.location.href = "/join"
                    }
                })
                stompClient.publish({ destination: '/quizz/player/join', body: JSON.stringify({ player: encodedName, room: roomId }) })
            }, (err) => {
                console.log("COCKKKKKKKK")
            })
        }
    }, [player.playing])
    return (
        <>
            {renderView()}
        </>
    )
}
export default GamePage;