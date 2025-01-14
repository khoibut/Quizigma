import WaitingRoom from "../components/Game/WaitingRoom"
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import SockJS from "sockjs-client"
import { Stomp } from "@stomp/stompjs"
function GamePage() {
    const [player, setPlayer] = useState({
        playing: true,
        name: ''
    })
    const [view, setView] = useState('waiting')
    const [players, setPlayers] = useState([])
    const roomId = useParams().roomId
    useEffect(() => {
        let socket
        let stompClient
        console.log("Effect running", { player, roomId });
        if (!player.playing) {
            console.log(player.name)
            const encodedName = encodeURIComponent(player.name)
            socket = new SockJS(`http://localhost:8080/player?room=${roomId}&player=${encodedName}`);
            stompClient = Stomp.over(socket)
            stompClient.heartbeatIncoming = 10000
            stompClient.heartbeatOutgoing = 10000
            stompClient.connect({}, () => {
                console.log('connected')
                stompClient.subscribe('/topic/player/' + roomId, (message) => {
                    const messageBody = JSON.parse(message.body)
                    console.log(messageBody)
                    if (messageBody.type == 'start') {
                        console.log('Game started')
                    }
                    if (messageBody.type == 'players') {
                        let decodedPlayers = []
                        messageBody.players.forEach(player => {
                            decodedPlayers.push(decodeURIComponent(player))
                        })
                        setPlayers(decodedPlayers)
                    }
                })
                stompClient.subscribe(`/queue/${roomId}/${encodedName}`, (message) => {
                    const messageBody = JSON.parse(message.body)
                    console.log(messageBody)
                    if (messageBody.type == 'error') {
                        window.location.href = "/join"
                    }
                })
                stompClient.publish({ destination: '/quizz/player/join', body: JSON.stringify({ player: encodedName, room: roomId }) })
            }, (err) => {
                console.log(err)
            })
        }
    }, [player])
    return (
        <>
            <WaitingRoom
                roomId={roomId}
                player={player}
                setPlayer={setPlayer}
                players={players}
                setPlayers={setPlayers}
            />
        </>
    )
}
export default GamePage;