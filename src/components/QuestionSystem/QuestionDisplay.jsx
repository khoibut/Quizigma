import { useState } from "react"
import Title from "../LandingPage/Title.jsx"
import EditQuiz from "./EditQuiz.jsx"
import AddQuestion from "./AddQuestion.jsx"
import EditQuestion from "./EditQuesion.jsx"
import Modal from "react-modal"
import { NavLink, useParams } from "react-router"
import AddFromDiscovery from "./AddFromDiscovery.jsx"
import axios from "axios"
import React from "react"
import ImportQuiz from "./ImportQuiz.jsx"
import { useRef } from "react"
import parse from 'html-react-parser';
import { StaticMathField } from "react-mathquill"
import displayQuestion from "../../utils/displayQuestion.jsx"
function MultiChoiceOption({ correct, option }) {
    if (correct) {
        return (
            <>
                <div className="flex gap-10 border-b-2 py-3">
                    {/* image */}
                    <div style={{ backgroundImage: `url(${option.image})` }} className="sm:h-[100px] aspect-[4/3] bg-black rounded-xl bg-contain bg-center bg-no-repeat"></div>

                    {/* info container */}
                    <div className="option-info">
                        <div dangerouslySetInnerHTML={{ __html: option.option }} className="font-semibold text-lg mb-2"></div>
                        <div className="rounded-full bg-[#6EE163] text-white text-center py-1 px-4 font-bold w-fit">Correct</div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="flex gap-10 border-b-2 py-3">
                {/* image */}
                <div style={{ backgroundImage: `url(${option.image})` }} className="sm:h-[100px] aspect-[4/3] bg-black rounded-xl bg-contain bg-center bg-no-repeat"></div>

                {/* info container */}
                <div className="overflow-auto max-sm:w-[200px] w-full">
                    <div dangerouslySetInnerHTML={{ __html: option.option }} className="font-semibold text-lg mb-2"></div>
                    <div className="rounded-full bg-[#E54C38] text-white text-center py-1 px-4 font-bold w-fit">Wrong</div>
                </div>
            </div>
        </>
    )
}
function MultiChoiceQuestion({ question, questionsList, setQuestions, selectedQuestions, setSelectedQuestions, render }) {
    const baseUrl = import.meta.env.VITE_API_URL
    // check if option container is open
    const [active, setActive] = useState(false)
    const [editQuestionOpened, setEditQuestion] = useState(false)
    const setId = useParams().setId
    // option container element
    let option
    // question pop up component when editing the question
    let questionPopup

    // open option container under the question
    function open() {
        if (!active) {
            option.style.height = '350px'
            option.style.paddingTop = '2rem'
            option.style.paddingBottom = '2rem'
        }
        else {
            option.style.height = '0'
            option.style.paddingTop = '0'
            option.style.paddingBottom = '0'
        }
        setActive(!active)
    }
    function deleteQuestion() {
        console.log(question.id)
        const requestData = {
            id: question.id
        }
        axios.delete(`${baseUrl}/api/v1/${setId}/question`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            data: requestData // Add the body here
        })
            .then(response => {
                console.log('Question deleted successfully:', response.data);
                render()
            })
    }

    return (
        <>
            <Modal
                isOpen={editQuestionOpened}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 20,
                        background: '#fff'
                    },
                    content: {
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        border: 'none',
                        background: 'none',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '4px',
                        outline: 'none',
                        padding: '0'
                    }
                }}
            >
                <EditQuestion openFunction={setEditQuestion} render={render} question={question} questionsList={questionsList} setQuestions={setQuestions} questionNumber={questionsList.map(q => q.id).indexOf(question.id)} />
            </Modal>

            <div onClick={() => { open() }} className="flex mt-5 bg-[#6D96D9] items-center sm:rounded-l-full px-2 sm:px-10 py-2 gap-2 md:gap-10 min-h-fit h-[16vh] lg:h-[20vh]">
                {/* check box to multi select */}
                <input className="min-w-5 min-h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="checkbox" value={false} onClick={(e) => { e.stopPropagation(); e.target.checked ? setSelectedQuestions([...selectedQuestions, question.id]) : setSelectedQuestions(selectedQuestions.filter(q => q != question.id)) }} />
                {/* image container */}
                <div style={{ backgroundImage: `url(${question.image})` }} className="sm:h-[100px] aspect-[4/3] bg-black rounded-xl self-center my-5 bg-contain bg-no-repeat bg-center"></div>
                {/* question info */}
                <div className="question">
                    <div className="font-semibold text-xl">Question {questionsList.map(q => q.id).indexOf(question.id) + 1}:</div>
                    <div className="question-title">
                        {displayQuestion(question.question)}
                    </div>
                </div>
                {/* question type, edit icon, remove icon */}
                <div className="ml-auto gap-5 items-center sm:flex hidden">
                    <div className="px-4 py-2 rounded-full font-bold bg-red-400 text-white text-nowrap">Multiple choice</div>
                    <svg onClick={(e) => { setEditQuestion(true); e.stopPropagation() }} className="hover:scale-110 transition-all" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" /></svg>
                    <svg onClick={(e) => { e.stopPropagation(); deleteQuestion() }} className="hover:scale-110 transition-all" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
                </div>
                {/* editing question icon for when screen is on mobile/small, the element above this one will be hidden */}
                <div className="ml-auto gap-5 items-center flex sm:hidden">
                    <svg onClick={(e) => { e.stopPropagation(); questionPopup.style.transform = "translateY(-10%)"; questionPopup.style.bottom = 'auto' }} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" /></svg>
                </div>
            </div>
            {/* options container */}
            <div ref={(current) => (option = current)} className="shadow-xl sm:ml-20 px-2 sm:px-8 rounded-b-lg h-0 overflow-auto duration-300 transition-all flex flex-col">
                <div className="option-list">
                    {question.options.map((option, index) => {
                        return <MultiChoiceOption correct={question.answers.includes(index + 1)} option={option} />
                    })}
                </div>
            </div>
            {/* more editing question pop up for mobile/ small screen */}
            <div ref={(e) => { questionPopup = e }} className="sm:hidden h-full z-20 translate-y-[100%] transition-all fixed w-full bg-[#556265] rounded-t-xl p-3 py-5 bottom-0">
                <svg className="mb-3" onClick={() => { questionPopup.style.bottom = '0'; questionPopup.style.transform = 'translateY(100%)' }} xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#fff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                <div className="px-4 py-2 rounded-full font-bold bg-red-400 text-white text-nowrap max-w-[500px] w-fit my-4">Multiple choice</div>
                <button onClick={() => { setEditQuestion(true) }} className="hover:bg-[#fef2f29c] my-1 p-3 rounded-md bg-[#fef2f250] text-white font-medium w-full text-start ps-6">Edit</button>
                <button onClick={deleteQuestion} className="hover:bg-[#fef2f29c] my-1 p-3 rounded-md bg-[#fef2f250] text-white font-medium w-full text-start ps-6">Delete</button>
            </div>
        </>
    )
}
function TextAnswerQuestion({ render, question, questionsList, setQuestions, selectedQuestions, setSelectedQuestions }) {
    const baseUrl = import.meta.env.VITE_API_URL
    const setId = useParams().setId
    // check if answer key container is open
    const [active, setActive] = useState(false)
    const [editQuestionOpened, setEditQuestion] = useState(false)
    // answer key container element
    let option
    // question pop up component when editing the question
    let questionPopup

    // open answer key container below the question
    function open() {
        if (!active) {
            option.style.height = '250px'
            option.style.paddingTop = '2rem'
            option.style.paddingBottom = '2rem'
        }
        else {
            option.style.height = '0'
            option.style.paddingTop = '0'
            option.style.paddingBottom = '0'
        }
        setActive(!active)
    }
    function deleteQuestion() {
        console.log(question.id)
        const requestData = {
            id: question.id
        }
        axios.delete(`${baseUrl}/api/v1/${setId}/question`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            data: requestData // Add the body here
        })
            .then(response => {
                console.log('Question deleted successfully:', response.data);
                render()
            })
    }

    return (
        <>
            <Modal
                isOpen={editQuestionOpened}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 20,
                        background: '#fff'
                    },
                    content: {
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        border: 'none',
                        background: 'none',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '4px',
                        outline: 'none',
                        padding: '0'
                    }
                }}
            >
                <EditQuestion render={render} openFunction={setEditQuestion} question={question} questionsList={questionsList} setQuestions={setQuestions} questionNumber={questionsList.map(q => q.id).indexOf(question.id)} />
            </Modal>
            <div className="mt-5">
                <div onClick={() => { open() }} className="flex bg-[#6D96D9] items-center sm:rounded-l-full px-2 sm:px-10 py-2 gap-2 md:gap-10 min-h-fit h-[16vh] lg:h-[20vh]">
                    {/* check box to multi select */}
                    <input className="min-w-5 min-h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="checkbox" onClick={(e) => { e.stopPropagation(); e.target.checked ? setSelectedQuestions([...selectedQuestions, question.id]) : setSelectedQuestions(selectedQuestions.filter(q => q != question.id)) }} />
                    {/* image container */}
                    <div style={{ backgroundImage: `url(${question.image})` }} className="sm:h-[100px] aspect-[4/3] bg-black rounded-xl self-center my-5 bg-contain bg-center bg-no-repeat"></div>
                    {/* question info */}
                    <div className="question">
                        <div className="font-semibold text-xl">Question {questionsList.map(q => q.id).indexOf(question.id) + 1}:</div>
                        <div className="question-title">
                            {displayQuestion(question.question)}
                        </div>
                    </div>
                    {/* question type, edit icon, remove icon */}
                    <div className="ml-auto sm:flex hidden gap-5 items-center">
                        <div className="px-4 py-2 rounded-full font-bold bg-red-400 text-white text-nowrap">Type answer</div>
                        <svg onClick={(e) => { setEditQuestion(true); e.stopPropagation() }} className="hover:scale-110 transition-all" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" /></svg>
                        <svg onClick={(e) => { e.stopPropagation(); deleteQuestion() }} className="hover:scale-110 transition-all" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
                    </div>
                    {/* editing question icon for when screen is on mobile/small, the element above this one will be hidden */}
                    <div className="ml-auto gap-5 items-center flex sm:hidden">
                        <svg onClick={(e) => { e.stopPropagation(); questionPopup.style.transform = "translateY(-10%)"; questionPopup.style.bottom = 'auto' }} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" /></svg>
                    </div>
                </div>
                {/* answer key container */}
                <div ref={(current) => (option = current)} className="shadow-xl sm:ml-20 px-8 rounded-b-lg h-0 overflow-auto duration-300 transition-all flex flex-col">
                    <div className="bg-[#00000020] min-h-[180px] h-fit p-8 rounded-xl">{question.options[0].option}</div>
                </div>
            </div>
            {/* more editing question pop up for mobile/ small screen */}
            <div ref={(e) => { questionPopup = e }} className="sm:hidden h-full z-20 translate-y-[100%] transition-all fixed w-full bg-[#556265] rounded-t-xl p-3 py-5 bottom-0">
                <svg className="mb-3" onClick={() => { questionPopup.style.bottom = '0'; questionPopup.style.transform = 'translateY(100%)' }} xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#fff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                <div className="px-4 py-2 rounded-full font-bold bg-red-400 text-white text-nowrap max-w-[500px] w-fit my-4">Type answer</div>
                <button onClick={() => { setEditQuestion(true) }} className="hover:bg-[#fef2f29c] my-1 p-3 rounded-md bg-[#fef2f250] text-white font-medium w-full text-start ps-6">Edit</button>
                <button onClick={deleteQuestion} className="hover:bg-[#fef2f29c] my-1 p-3 rounded-md bg-[#fef2f250] text-white font-medium w-full text-start ps-6">Delete</button>
            </div>
        </>
    )
}

function QuestionDisplay() {
    const baseUrl = import.meta.env.VITE_API_URL
    // let editPopUp = <EditQuestionPopup />;
    const setId = useParams().setId
    const searchBar = useRef();
    const [search, setSearch] = useState('')
    const [editQuizOpened, setEditQuiz] = useState(false);
    const [addQuestionOpened, setAddQuestion] = useState(false);
    const [discoveryAddOpened, setDiscoveryAdd] = useState(false)
    const [importQuizOpened, setImportQuiz] = useState(false)
    let sidebar
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [selectedQuestions, setSelectedQuestions] = useState([])
    const [quiz, setQuiz] = useState({})
    const [loading, setLoading] = useState(true)

    async function getQuiz() {
        axios.get(`${baseUrl}/api/v1/set`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            .then(function (response) {
                response.data.forEach(set => {
                    if (set.id == setId) {
                        set.questions.sort((a, b) => a.id - b.id)
                        setQuiz(set)
                    }
                })
            })
            .finally(function () {
                setLoading(false)
            })
    }
    React.useEffect(() => {
        getQuiz();
    }, [])

    // open sidebar only for medium screen and below
    function openSideBar() {
        if (sidebarOpen)
            sidebar.style.width = "300px"
        else
            sidebar.style.width = "0"

        setSidebarOpen(!sidebarOpen)
    }
    function saveQuiz() {
        window.location.href="/library"
    }
    function multiDelete() {
        console.log(selectedQuestions)
        selectedQuestions.forEach(id => {
            axios.delete(`${baseUrl}/api/v1/${setId}/question`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                data: { id: id }
            })
        })
        setSelectedQuestions([])
        setQuiz({ ...quiz, questions: quiz.questions.filter(q => !selectedQuestions.includes(q.id)) })
    }

    if (loading) {
        return <div className="h-screen w-screen flex justify-center items-center md:text-xl font-bold uppercase animate-spin bg-[url(../Icons&Images/mita.jpg)]">Loading...</div>
    }
    return (
        <>
            {/* add question from quiz online */}
            <Modal
                isOpen={discoveryAddOpened}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 20,
                        background: '#fff'
                    },
                    content: {
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        border: 'none',
                        background: 'none',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '4px',
                        outline: 'none',
                        padding: '0'
                    }
                }}
            >
                <AddFromDiscovery openFunction={setDiscoveryAdd} />
            </Modal>
            {/* edit quiz menu */}
            <Modal
                isOpen={editQuizOpened}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 20,
                        background: '#00000060'
                    },
                    content: {
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        border: 'none',
                        background: 'none',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '4px',
                        outline: 'none',
                        padding: '0'
                    }
                }}
            >
                <EditQuiz ref={(current) => (editQuiz = current)} openFunction={setEditQuiz} />
            </Modal>
            {/* add question manually */}
            <Modal
                isOpen={addQuestionOpened}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 20,
                        background: '#fff'
                    },
                    content: {
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        border: 'none',
                        background: 'none',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '4px',
                        outline: 'none',
                        padding: '0'
                    }
                }}
            >
                <AddQuestion ref={(current) => (addQuestion = current)} openFunction={setAddQuestion} quiz={quiz} render={getQuiz} />
            </Modal>

            <Modal
                isOpen={importQuizOpened}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 20,
                        background: '#00000060'
                    },
                    content: {
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        border: 'none',
                        background: 'none',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '4px',
                        outline: 'none',
                        padding: '0'
                    }
                }}
            >
                <ImportQuiz openFunction={setImportQuiz} />
            </Modal>
            <Title />
            <div className="grid lg:grid-cols-[auto_1fr] max-sm:h-screen">
                {/* sidebar containing quiz info, editing quiz option */}
                <div ref={(current) => { sidebar = current }} className="overflow-hidden z-20 fixed inset-0 max-lg:w-0 lg:sticky w-[300px] bg-[#B1E5FF] top-0 lg:h-screen flex flex-col transition-all animate-openLeft">
                    {/* quiz info */}
                    <div className="w-[90%] h-36 rounded-xl self-center my-5 bg-black bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url(${quiz.image})` }}></div>
                    <div className="self-center font-bold text-lg mb-5 text-nowrap">{quiz.name}</div>

                    {/* option-buttons container add question, add question from discovery online, edit quiz info, import file, export file, exit question editor */}
                    <div className="options">
                        <button onClick={() => { setAddQuestion(true) }} className="bg-[#F8858B] my-2 min-w-[100px] w-[70%] p-3 rounded-r-full text-nowrap font-semibold hover:w-[85%] transition-all">Add question</button>
                        <button onClick={() => { setDiscoveryAdd(true) }} className="bg-[#F8858B] my-2 min-w-[100px] w-[70%] p-3 rounded-r-full text-nowrap font-semibold hover:w-[85%] transition-all">Add from discovery</button>
                        <button onClick={() => { setEditQuiz(true) }} className="bg-[#F8858B] my-2 min-w-[100px] w-[70%] p-3 rounded-r-full text-nowrap font-semibold hover:w-[85%] transition-all">Edit quiz</button>
                        <button onClick={() => { setImportQuiz(true) }} className="bg-[#F8858B] my-2 min-w-[100px] w-[70%] p-3 rounded-r-full text-nowrap font-semibold hover:w-[85%] transition-all">Import</button>
                        <button className="bg-[#F8858B] my-2 min-w-[100px] w-[70%] p-3 rounded-r-full text-nowrap font-semibold hover:w-[85%] transition-all">Export</button>
                        <NavLink to="/" end>
                            <button className="bg-[#F8858B] my-2 min-w-[100px] w-[70%] p-3 rounded-r-full text-nowrap font-semibold hover:w-[85%] transition-all">Exit</button>
                        </NavLink>
                    </div>
                </div>

                <div className="g:h-full">
                    {/* top bar containing search bar, filter bar, delete question that has been selected, save quiz */}
                    <div className="bg-[#A3D5FF] gap-4 flex items-center p-4 mb-5 sticky top-0 flex-wrap z-10">
                        {/* search bar */}
                        <input ref={searchBar} className="outline-none max-sm:basis-full px-4 py-2 ps-5 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-blue-500" placeholder="Search" />
                        {/* filter */}
                        <button onClick={() => { setSearch(searchBar.current.value) }} className="px-5 sm:px-10 py-2 rounded-full font-bold bg-red-400 text-white hover:bg-rose-500 hover:scale-105 transition-all">SEARCH</button>
                        {/* delete questions */}
                        <div onClick={multiDelete} className="group px-5 sm:px-10 py-2 rounded-full font-bold bg-red-400 text-white hover:bg-rose-500 hover:scale-105 transition-all">
                            <svg className="hover:scale-110 transition-all group" xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#fff"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
                        </div>
                        {/* save button, when on smaller screen will turn the word save into an icon */}
                        <button onClick={saveQuiz} className="px-5 sm:px-10 py-2 rounded-full font-bold bg-red-400 text-white hover:bg-rose-500 hover:scale-105 transition-all">
                            <span className="hidden md:block">SAVE</span>
                            <svg className="md:hidden" xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#fff"><path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z" /></svg>
                        </button>
                    </div>

                    {/* questions container */}
                    <div className="sm:pl-8 overflow-hidden max-sm:h-full animate-dropdown max-sm:w-full pb-20">
                        {quiz.questions.map(question => {
                            if (search === '' || question.question.toLowerCase().includes(search.toLowerCase())) {
                                if (question.type === "TA") {
                                    return <TextAnswerQuestion key={question.id} setSelectedQuestions={setSelectedQuestions} selectedQuestions={selectedQuestions} question={question} questionsList={quiz.questions} render={getQuiz} />
                                }
                                else {
                                    return <MultiChoiceQuestion key={question.id} setSelectedQuestions={setSelectedQuestions} selectedQuestions={selectedQuestions} question={question} questionsList={quiz.questions} render={getQuiz} />
                                }
                            }
                        })}
                    </div>
                </div>
                {/* open sidebar for medium, smaller screen. Does not appear on large screen */}
                <button onClick={openSideBar} className="fixed z-10 right-0 bottom-0 -translate-y-5 -translate-x-5 p-5 rounded-full bg-white shadow-lg hover:scale-110 transition-all lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160ZM240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640Z" /></svg>
                </button>
                {/* {editPopUp} */}
            </div>
        </>
    )
}
export default QuestionDisplay