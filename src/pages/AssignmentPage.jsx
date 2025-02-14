import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import SockJS from 'sockjs-client'
import { Stomp } from '@stomp/stompjs'
import WaitingRoom from '../components/Game/WaitingRoom'
import QuizGameplay from '../components/Game/QuizGameplay'
import ResultView from '../components/Game/ResultView'
import PlayerStat from '../components/Game/PlayerStat'

function AssignmentPage() {
    const baseUrl = import.meta.env.VITE_API_URL
    console.log("Assignment Page")
    const [player, setPlayer] = useState({
        playing: true,
        name: '',
        questionCount: 0,
    })
    const [maxQuestions, setMaxQuestions] = useState(0)
    const [questions, setQuestions] = useState([])
    const [view, setView] = useState('waiting')
    const [players, setPlayers] = useState([])
    const [stompClientRef, setStompClientRef] = useState()
    const assignmentId = useParams().assignmentId
    function randomQuestion() {
        return questions[Math.floor(Math.random() * questions.length)]
    }
    function answerQuestion(question, answer) {
        let answerDTO = {
            room: assignmentId,
            player: player.name,
            questionId: question.id,
            answer: answer
        }
        stompClient.publish({ destination: '/quizz/player/assignment/answer', body: JSON.stringify(answerDTO) })
        console.log(answerDTO)
    }
    function renderView() {
        switch (view) {
            case 'waiting':
                return <WaitingRoom
                    roomId={assignmentId    }
                    player={player}
                    setPlayer={setPlayer}
                    players={players}
                    setPlayers={setPlayers}
                />
            case 'quiz':
                return <QuizGameplay
                    roomId={assignmentId}
                    player={player}
                    question={randomQuestion()}
                    answerQuestion={answerQuestion}
                    stompClient={stompClientRef}
                />
            case 'correct':
                return <ResultView player={player} assignmentId={assignmentId} stompClient={stompClientRef} result='correct' setView={setView} />
            case 'wrong':
                return <ResultView player={player} assignmentId={assignmentId} stompClient={stompClientRef} result='wrong' setView={setView} />
            case 'end':
                return <PlayerStat player={player} players={players} />
        }
    }
    useEffect(() => {
        let socket
        let stompClient
        console.log("Effect running", { player, assignmentId });
        if (!player.playing) {
            console.log(player.name)
            const encodedName = encodeURIComponent(player.name)
            socket = new SockJS(`${baseUrl}/assignment`);
            stompClient = Stomp.over(socket)
            stompClient.heartbeatIncoming = 10000
            stompClient.heartbeatOutgoing = 10000
            stompClient.connect({}, (frame) => {
                console.log('Connected: ' + frame);
                stompClient.subscribe(`/topic/assignment/${assignmentId}`, (message) => {
                    let response = JSON.parse(message.body)
                    console.log(response)
                    if (response.type == "end") {
                        setPlayers(response.players)
                        setView('end')
                    }
                });
                stompClient.subscribe(`/queue/assignment/${assignmentId}/${encodedName}`, (message) => {
                    let response = JSON.parse(message.body)
                    console.log(response)
                    if (response.type == "start") {
                        setQuestions(response.questions)
                        setView('quiz')
                    }
                    if (response.type == "correct") {
                        setPlayer({ ...player, questionCount: player.questionCount + 1 })
                        setView('correct')
                    }
                    if (response.type == "wrong") {
                        setPlayer({ ...player, questionCount: player.questionCount + 1 })
                        setView('wrong')
                    }
                    if(response.type=="error"){
                        window.location.href="/join/assignment"
                    }
                })
                stompClient.publish({ destination: '/quizz/player/assignment/join', body: JSON.stringify({ assignment: assignmentId, player: encodedName }) })
                setStompClientRef(stompClient)
            });
        }
    }, [player.playing])
    return (
        <>
            {renderView()}
        </>
    )
}
export default AssignmentPage;