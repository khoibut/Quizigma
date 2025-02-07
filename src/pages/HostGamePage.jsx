import HostingRoom from "../components/Game/HostRoom";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import HostGameStat from "../components/Game/HostGameStat";
function HostGamePage() {
    const [view, setView] = useState('waiting')
    const [players, setPlayers] = useState([])
    const roomId = useParams().roomId;
    const [stompClient, setStompClient] = useState(null);
    const [time, setTime] = useState(0);
    function disconnect() {
        stompClient.disconnect();
    }
    function rendewView() {
        switch (view) {
            case 'waiting':
                return <HostingRoom
                    players={players}
                    startGame={startGame}
                    setPlayers={setPlayers}
                    roomId={roomId}
                />
            case 'stat':
                return <HostGameStat players={players} roomId={roomId} stompClient={stompClient} time={time} />
        }
    }
    useEffect(() => {
        let socket = new SockJS(`https://quizigmaapi.onrender.com/creator?room=${roomId}`);
        let stompClient = Stomp.over(socket);
        stompClient.heartbeatIncoming = 10000;
        stompClient.heartbeatOutgoing = 10000;
        stompClient.onWebSocketClose = () => {
            console.log('closed')
            window.location.href = "/join";
        }
        stompClient.connect({}, function (frame) {
            console.log('Connected: ' + frame);
            setStompClient(stompClient);
            stompClient.subscribe('/queue/creator/' + roomId, function (message) {
                const messageBody = JSON.parse(message.body);
                if (messageBody.type == 'players') {
                    let decodedPlayers = messageBody.players
                    decodedPlayers.forEach(player => {
                        player.name = decodeURIComponent(player.name)
                    })
                    setPlayers(decodedPlayers);
                }
                if (messageBody.type == 'start') {
                    setView('stat');
                }
                if (messageBody.type == 'error') {
                    window.location.href = "/join";
                }
                if (messageBody.type == 'end') {
                    console.log('Game ended')
                }
                if (messageBody.type == 'timer') {
                    console.log(messageBody.time)
                    setTime(messageBody.time)
                }
            });
            stompClient.publish({ destination: '/quizz/creator/join', body: JSON.stringify({ room: roomId, creator: localStorage.getItem('token') }) });
        });
    }, [])

    function startGame() {
        if (stompClient != null) {
            stompClient.publish({ destination: '/quizz/creator/start', body: JSON.stringify({ room: roomId }) });
        }
    }
    return (
        <>
            {rendewView()}
        </>
    )
}
export default HostGamePage