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
                    {/* image */}
                    <div className="sm:h-[100px] aspect-[4/3] bg-black rounded-xl">image here</div> 
                    
                    {/* info container */}
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
                {/* image */}
                <div className="sm:h-[100px] aspect-[4/3] bg-black rounded-xl">image here</div> 
                
                {/* info container */}
                <div className="option-info">
                    <div className="font-semibold text-lg mb-2">{option}</div>
                    <div className="rounded-full bg-[#E54C38] text-white text-center py-1 px-4 font-bold">Wrong</div>
                </div>
            </div>
        </>
    )
}
function MultiChoiceQuestion({question}) {
    // check if option container is open
    const [active, setActive] = useState(false)
    const [editQuestionOpened, setEditQuestion] = useState(false)
    // option container element
    let option
    // question pop up component when editing the question
    let questionPopup

    // open option container under the question
    function open() {
        if(!active) {
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
                {/* check box to multi select */}
                <input className="min-w-5 min-h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="checkbox" onClick={(e) => {e.stopPropagation()}} />
                {/* image container */}
                <div className="sm:h-[100px] aspect-[4/3] bg-black rounded-xl self-center my-5">image here</div>
                {/* question info */}
                <div className="question">
                    <div className="font-semibold text-xl">Question 1:</div>
                    <div className="question-title">{question.question}</div>
                </div>  
                {/* question type, edit icon, remove icon */}
                <div className="ml-auto gap-5 items-center sm:flex hidden">
                    <div className="px-4 py-2 rounded-full font-bold bg-red-400 text-white text-nowrap">Multiple choice</div>
                    <svg onClick={(e) => {setEditQuestion(true); e.stopPropagation()}} className="hover:scale-110 transition-all" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                    <svg onClick={(e) => {e.stopPropagation()}} className="hover:scale-110 transition-all" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                </div>
                {/* editing question icon for when screen is on mobile/small, the element above this one will be hidden */}
                <div className="ml-auto gap-5 items-center flex sm:hidden">
                    <svg onClick={(e) => {e.stopPropagation(); questionPopup.style.transform  = "translateY(0)"}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>
                </div>
            </div>
            {/* options container */}
            <div ref={(current) => (option = current)} className="shadow-xl sm:ml-20 px-2 sm:px-8 rounded-b-lg h-0 overflow-auto duration-300 transition-all flex flex-col">
                <div className="option-list">
                    {question.options.map(option => {
                        return <MultiChoiceOption correct={option.correct} option={option.option}  />
                    })}
                </div>
            </div>
            {/* more editing question pop up for mobile/ small screen */}
            <div ref={(e) => {questionPopup = e}} className="sm:hidden z-20 translate-y-[100%] transition-all fixed w-full bg-[#556265] rounded-t-xl p-3 py-5 bottom-0 h-[50vh]">
                <svg className="mb-3" onClick={() => {questionPopup.style.transform = 'translateY(100%)'}} xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#fff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                <div className="px-4 py-2 rounded-full font-bold bg-red-400 text-white text-nowrap max-w-[500px] w-fit my-4">Multiple choice</div>
                <button onClick={() => {setEditQuestion(true); questionPopup.style.transform = 'translateY(100%)'}} className="hover:bg-[#fef2f29c] my-1 p-3 rounded-md bg-[#fef2f250] text-white font-medium w-full text-start ps-6">Edit</button>
                <button className="hover:bg-[#fef2f29c] my-1 p-3 rounded-md bg-[#fef2f250] text-white font-medium w-full text-start ps-6">Delete</button>
            </div>
        </>
    )
}
function TextAnswerQuestion({question}) {
    // check if answer key container is open
    const [active, setActive] = useState(false)
    const [editQuestionOpened, setEditQuestion] = useState(false)
    // answer key container element
    let option
    // question pop up component when editing the question
    let questionPopup

    // open answer key container below the question
    function open() {
        if(!active) {
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
                    {/* check box to multi select */}
                    <input className="min-w-5 min-h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="checkbox" onClick={(e) => {e.stopPropagation()}} />
                    {/* image container */}
                    <div className="sm:h-[100px] aspect-[4/3] bg-black rounded-xl self-center my-5">image here</div>
                    {/* question info */}
                    <div className="question">
                        <div className="font-semibold text-xl">Question 1:</div>
                        <div className="question-title">{question.question}</div>
                    </div>
                    {/* question type, edit icon, remove icon */}
                    <div className="ml-auto sm:flex hidden gap-5 items-center">
                        <div className="px-4 py-2 rounded-full font-bold bg-red-400 text-white text-nowrap">Type answer</div>
                        <svg onClick={(e) => {setEditQuestion(true); e.stopPropagation()}} className="hover:scale-110 transition-all" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                        <svg onClick={(e) => {e.stopPropagation()}} className="hover:scale-110 transition-all" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                    </div>
                    {/* editing question icon for when screen is on mobile/small, the element above this one will be hidden */}
                    <div className="ml-auto gap-5 items-center flex sm:hidden">
                        <svg onClick={(e) => {e.stopPropagation(); questionPopup.style.transform  = "translateY(0)"}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>
                    </div>
                </div>
                {/* answer key container */}
                <div ref={(current) => (option = current)} className="shadow-xl sm:ml-20 px-8 rounded-b-lg h-0 overflow-auto duration-300 transition-all flex flex-col">
                    <div className="bg-[#00000020] min-h-[180px] h-fit p-8 rounded-xl">{question.options[0].option}</div>
                </div>
            </div>
            {/* more editing question pop up for mobile/ small screen */}
            <div ref={(e) => {questionPopup = e}} className="sm:hidden z-20 translate-y-[100%] transition-all fixed w-full bg-[#556265] rounded-t-xl p-3 py-5 bottom-0 h-[50vh]">
                <svg className="mb-3" onClick={() => {questionPopup.style.transform = 'translateY(100%)'}} xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#fff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                <div className="px-4 py-2 rounded-full font-bold bg-red-400 text-white text-nowrap max-w-[500px] w-fit my-4">Type answer</div>
                <button onClick={() => {setEditQuestion(true); questionPopup.style.transform = 'translateY(100%)'}} className="hover:bg-[#fef2f29c] my-1 p-3 rounded-md bg-[#fef2f250] text-white font-medium w-full text-start ps-6">Edit</button>
                <button className="hover:bg-[#fef2f29c] my-1 p-3 rounded-md bg-[#fef2f250] text-white font-medium w-full text-start ps-6">Delete</button>
            </div>
        </>
    )
}
function EditQuestionPopup({question}) {
    let questionPopup
    return (
        <div ref={(e) => {questionPopup = e}} className="sm:hidden translate-y-[100%] transition-all fixed w-full bg-[#556265] rounded-lg p-4 bottom-0 h-[60vh]">
            <div onClick={() => {questionPopup.style.transform = 'translateY(100%)'}}>X</div>
        </div>
    )
}

function QuestionDisplay() {
    // let editPopUp = <EditQuestionPopup />;
    const [editQuizOpened, setEditQuiz] = useState(false);
    const [addQuestionOpened, setAddQuestion] = useState(false);
    const [discoveryAddOpened, setDiscoveryAdd] = useState(false)
    let sidebar
    const [sidebarOpen, setSidebarOpen] = useState(true)
    // questions array
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

    // open sidebar only for medium screen and below
    function openSideBar() {
        if(sidebarOpen)
            sidebar.style.width = "300px"
        else 
            sidebar.style.width = "0"

        setSidebarOpen(!sidebarOpen)
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
                {/* sidebar containing quiz info, editing quiz option */}
                <div ref={(current) => {sidebar = current}} className="overflow-hidden z-10 fixed inset-0 max-lg:w-0 lg:sticky w-[300px] h-screen bg-[#B1E5FF] flex flex-col transition-all">
                    {/* quiz info */}
                    <div className="w-[90%] h-36 bg-black rounded-xl self-center my-5 ">image here</div>
                    <div className="self-center font-bold text-lg mb-5 text-nowrap">Hiter trivia</div>
                    
                    {/* option-buttons container add question, add question from discovery online, edit quiz info, import file, export file, exit question editor */}
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
                    {/* top bar containing search bar, filter bar, delete question that has been selected, save quiz */}
                    <div className="bg-[#A3D5FF] gap-4 flex items-center p-4 mb-5 sticky top-0 flex-wrap">
                        {/* search bar */}
                        <input className="outline-none max-sm:basis-full px-4 py-2 ps-5 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-blue-500" placeholder="Search" />
                        {/* filter */}
                        <button className="px-5 sm:px-10 py-2 rounded-full font-bold bg-red-400 text-white hover:bg-rose-500 hover:scale-105 transition-all">FILTER</button>
                        {/* delete questions */}
                        <div className="group px-5 sm:px-10 py-2 rounded-full font-bold bg-red-400 text-white hover:bg-rose-500 hover:scale-105 transition-all">
                            <svg className="hover:scale-110 transition-all group" xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#fff"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                        </div>
                        {/* save button, when on smaller screen will turn the word save into an icon */}
                        <button className="px-5 sm:px-10 py-2 rounded-full font-bold bg-red-400 text-white hover:bg-rose-500 hover:scale-105 transition-all">
                            <span className="hidden md:block">SAVE</span>
                            <svg className="md:hidden" xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#fff"><path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z"/></svg>
                        </button>
                    </div>

                    {/* questions container */}
                    <div className="sm:pl-8">
                        {questions.map(question => {
                            if(question.setId == 0) {
                                return <TextAnswerQuestion question={question}  />
                            }
                            else {
                                return <MultiChoiceQuestion question={question}  />
                            }
                        })}
                    </div>
                </div>
                {/* open sidebar for medium, smaller screen. Does not appear on large screen */}
                <button onClick={openSideBar} className="fixed z-10 right-0 bottom-0 -translate-y-5 -translate-x-5 p-5 rounded-full bg-white shadow-lg hover:scale-110 transition-all lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160ZM240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640Z"/></svg>
                </button>
                {/* {editPopUp} */}
            </div>
        </>
    )
}
export default QuestionDisplay