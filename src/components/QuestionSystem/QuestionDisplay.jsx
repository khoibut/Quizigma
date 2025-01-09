import { useState } from "react"
import Title from "../LandingPage/Title.jsx"
import EditQuiz from "./EditQuiz.jsx"
import AddQuestion from "./AddQuestion.jsx"
import EditQuestion from "./EditQuesion.jsx"
import Modal from "react-modal"
import { NavLink } from "react-router" 
import AddFromDiscovery from "./AddFromDiscovery.jsx"


function MultiChoiceOption( {correct, option} ) {
    if(correct) {
        return (
            <>
                <div className="flex gap-10 border-b-2 py-3">
                    <div className="h-[100px] aspect-[4/3] bg-black rounded-xl">image here</div>
                    <div className="option-info">
                        <div className="font-semibold text-lg mb-2">{option}</div>
                        <div className="rounded-full bg-[#6EE163] text-white text-center py-1 px-4 font-bold">Correct</div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="flex gap-10 border-b-2 py-3">
                <div className="h-[100px] aspect-[4/3] bg-black rounded-xl">image here</div>
                <div className="option-info">
                    <div className="font-semibold text-lg mb-2">{option}</div>
                    <div className="rounded-full bg-[#E54C38] text-white text-center py-1 px-4 font-bold">Wrong</div>
                </div>
            </div>
        </>
    )
}
function MultiChoiceQuestion({question}) {
    const [active, setActive] = useState(true)
    const [editQuestionOpened, setEditQuestion] = useState(false)
    let option

    function open() {
        if(active) {
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
                        zIndex: 10,
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
                <EditQuestion openFunction={setEditQuestion} question={question} />
            </Modal>
            <div onClick={() => {open()}} className="flex mt-5 bg-[#6D96D9] items-center sm:rounded-l-full px-2 sm:px-10 py-2 gap-2 md:gap-10 min-h-fit h-[16vh] lg:h-[20vh]">
                <input className="min-w-5 min-h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="checkbox" onClick={(e) => {e.stopPropagation()}} />
                <div className="h-[100px] aspect-[4/3] bg-black rounded-xl self-center my-5">image here</div>
                <div className="question">
                    <div className="font-semibold text-xl">Question 1:</div>
                    <div className="question-title">{question.question}</div>
                </div>
                <div className="ml-auto gap-5 items-center lg:flex hidden">
                    <div className="px-4 py-2 rounded-full font-bold bg-red-400 text-white text-nowrap">Multiple choice</div>
                    <svg onClick={(e) => {setEditQuestion(true); e.stopPropagation()}} className="hover:scale-110 transition-all" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                    <svg onClick={(e) => {e.stopPropagation()}} className="hover:scale-110 transition-all" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                </div>
                <div className="ml-auto gap-5 items-center flex lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>
                </div>
            </div>
            <div ref={(current) => (option = current)} className="shadow-xl sm:ml-20 px-2 sm:px-8 rounded-b-lg h-0 overflow-auto duration-300 transition-all flex flex-col">
                <div className="option-list">
                    {question.options.map(option => {
                        return <MultiChoiceOption correct={option.correct} option={option.option}  />
                    })}
                </div>
            </div>
        </>
    )
}
function TextAnswerQuestion({question}) {
    const [active, setActive] = useState(true)
    const [editQuestionOpened, setEditQuestion] = useState(false)
    let option

    function open() {
        if(active) {
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
                        zIndex: 10,
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
                <EditQuestion openFunction={setEditQuestion} question={question} />
            </Modal>
            <div className="mt-5">
                <div onClick={() => {open()}} className="flex bg-[#6D96D9] items-center sm:rounded-l-full px-2 sm:px-10 py-2 gap-2 md:gap-10 min-h-fit h-[16vh] lg:h-[20vh]">
                    <input className="min-w-5 min-h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="checkbox" onClick={(e) => {e.stopPropagation()}} />
                    <div className="h-[100px] aspect-[4/3] bg-black rounded-xl self-center my-5">image here</div>
                    <div className="question">
                        <div className="font-semibold text-xl">Question 1:</div>
                        <div className="question-title">{question.question}</div>
                    </div>
                    <div className="ml-auto lg:flex hidden gap-5 items-center">
                        <div className="px-4 py-2 rounded-full font-bold bg-red-400 text-white text-nowrap">Type answer</div>
                        <svg onClick={(e) => {setEditQuestion(true); e.stopPropagation()}} className="hover:scale-110 transition-all" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                        <svg onClick={(e) => {e.stopPropagation()}} className="hover:scale-110 transition-all" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                    </div>
                    <div className="ml-auto gap-5 items-center flex lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>
                    </div>
                </div>
                <div ref={(current) => (option = current)} className="shadow-xl sm:ml-20 px-8 rounded-b-lg h-0 overflow-auto duration-300 transition-all flex flex-col">
                    <div className="bg-[#00000020] min-h-[180px] h-fit p-8 rounded-xl">{question.options[0].option}</div>
                </div>
            </div>
        </>
    )
}

function QuestionDisplay() {
    let editQuiz;
    const [editQuizOpened, setEditQuiz] = useState(false);
    let addQuiz;
    const [addQuestionOpened, setAddQuestion] = useState(false);
    const [discoveryAddOpened, setDiscoveryAdd] = useState(false)
    let sidebar
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [questions, setQuestions] = useState([
        {
        question: "Who is freddy nut bar" ,
        image: "",
        setId: 1,
        options: [
            {
                option: "FNAF",
                correct: true,
                image: ""
            },
            
            {
                option: "my mom",
                correct: false,
                image: ""
            },
            
            {
                option: "cock bu ah",
                correct: true,
                image: ""
            }
        ]
        },
        {
            question: "Are you gay",
            image: "",
            setId: 0,
            options: [
                {
                    option: "balls",
                    correct: true,
                    image: ""
                }
            ]
        }
    ])

    function openSideBar() {
        if(sidebarOpen)
            sidebar.style.width = "300px"
        else 
            sidebar.style.width = "0"

        setSidebarOpen(!sidebarOpen)
    }

    return (
        <>  
            <Modal
                isOpen={discoveryAddOpened}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 10,
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
            <Modal
                isOpen={editQuizOpened}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 10,
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
            <Modal
                isOpen={addQuestionOpened}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 10,
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
                <AddQuestion ref={(current) => (addQuestion = current)} openFunction={setAddQuestion} questions={questions} setQuestions={setQuestions} />
            </Modal>
            <Title />
            <div className="grid lg:grid-cols-[auto_1fr] min-h-screen">
                <div ref={(current) => {sidebar = current}} className="overflow-hidden z-10 fixed inset-0 max-lg:w-0 lg:sticky w-[300px] h-screen bg-[#B1E5FF] flex flex-col transition-all">
                    <div className="w-[90%] h-36 bg-black rounded-xl self-center my-5 ">image here</div>
                    <div className="self-center font-bold text-lg mb-5 text-nowrap">Hiter trivia</div>
                    
                    <div className="options">
                        <button onClick={() => {setAddQuestion(true)}} className="bg-[#F8858B] my-2 min-w-[100px] w-[70%] p-3 rounded-r-full text-nowrap font-semibold hover:w-[85%] transition-all">Add question</button>
                        <button onClick={() => {setDiscoveryAdd(true)}} className="bg-[#F8858B] my-2 min-w-[100px] w-[70%] p-3 rounded-r-full text-nowrap font-semibold hover:w-[85%] transition-all">Add from discovery</button>
                        <button onClick={() => {setEditQuiz(true)}} className="bg-[#F8858B] my-2 min-w-[100px] w-[70%] p-3 rounded-r-full text-nowrap font-semibold hover:w-[85%] transition-all">Edit quiz</button>
                        <button className="bg-[#F8858B] my-2 min-w-[100px] w-[70%] p-3 rounded-r-full text-nowrap font-semibold hover:w-[85%] transition-all">Import</button>
                        <button className="bg-[#F8858B] my-2 min-w-[100px] w-[70%] p-3 rounded-r-full text-nowrap font-semibold hover:w-[85%] transition-all">Export</button>
                        <NavLink to="/" end>
                            <button className="bg-[#F8858B] my-2 min-w-[100px] w-[70%] p-3 rounded-r-full text-nowrap font-semibold hover:w-[85%] transition-all">Exit</button>
                        </NavLink>
                    </div>
                </div>

                <div className="h-full mb-10">
                    <div className="bg-[#A3D5FF] flex justify-between py-4 px-6 mb-5 sticky top-0">
                        <div className="flex gap-3 items-center flex-wrap">
                            <input className="" placeholder="Search" />
                            <button className="bg-[#FF6663] p-4 rounded-lg">FILTER</button>
                            <svg className="hover:scale-110 transition-all" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                        </div> 
    
                        <button className="sm:px-10 sm:py-2 rounded-full font-bold md:bg-red-400 text-white md:hover:bg-rose-500 md:hover:scale-105 transition-all">
                            <span className="hidden md:block">SAVE</span>
                            <svg className="md:hidden" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000"><path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z"/></svg>
                        </button>
                    </div>

                    <div className="sm:pl-8">
                        {questions.map(question => {
                            if(question.setId == 0) {
                                return <TextAnswerQuestion question={question} />
                            }
                            else {
                                return <MultiChoiceQuestion question={question} />
                            }
                        })}
                    </div>
                </div>
                <button onClick={openSideBar} className="fixed right-0 bottom-0 -translate-y-5 -translate-x-5 p-5 rounded-full bg-white shadow-lg hover:scale-110 transition-all lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160ZM240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640Z"/></svg>
                </button>
            </div>
        </>
    )
}
export default QuestionDisplay