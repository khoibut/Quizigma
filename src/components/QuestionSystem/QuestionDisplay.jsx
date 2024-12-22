import { useState } from "react"
import Title from "../LandingPage/Title.jsx"
import EditQuiz from "./EditQuiz.jsx"
import AddQuestion from "./AddQuestion.jsx"
import EditQuestion from "./EditQuesion.jsx"
import Modal from "react-modal"
import { NavLink } from "react-router" 


function MultiChoiceOption( {correct} ) {
    if(correct) {
        return (
            <>
                <div class="flex gap-10 border-b-2 py-3">
                    <div class="h-[100px] aspect-[4/3] bg-black rounded-xl">image here</div>
                    <div class="option-info">
                        <div class="font-semibold text-lg mb-2">1. i dont know</div>
                        <div class="rounded-full bg-[#6EE163] text-white text-center py-1 px-4 font-bold">Correct</div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div class="flex gap-10 border-b-2 py-3">
                <div class="h-[100px] aspect-[4/3] bg-black rounded-xl">image here</div>
                <div class="option-info">
                    <div class="font-semibold text-lg mb-2">1. i dont know</div>
                    <div class="rounded-full bg-[#E54C38] text-white text-center py-1 px-4 font-bold">Wrong</div>
                </div>
            </div>
        </>
    )
}
function MultiChoiceQuestion() {
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
                <EditQuestion openFunction={setEditQuestion} />
            </Modal>
            <div class="group mt-5">
                <div onClick={() => {open()}} class="flex bg-[#6D96D9] items-center rounded-l-full px-10 py-2 gap-10">
                    <input class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="checkbox" onClick={(e) => {e.stopPropagation()}} />
                    <div class="h-[100px] aspect-[4/3] bg-black rounded-xl self-center my-5">image here</div>
                    <div class="question">
                        <div class="font-semibold text-xl">Question 1:</div>
                        <div class="question-title">Who save Hitler from drowning when he was a kid</div>
                    </div>
                    <div class="ml-auto flex gap-5 items-center">
                        <div class="px-10 py-2 rounded-full font-bold bg-red-400 text-white">Multiple choice</div>
                        <svg onClick={(e) => {setEditQuestion(true); e.stopPropagation()}} class="hover:scale-110 transition-all" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                        <svg onClick={(e) => {e.stopPropagation()}} class="hover:scale-110 transition-all" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                    </div>
                </div>
                <div ref={(current) => (option = current)} class="shadow-xl ml-20 px-8 rounded-b-lg h-0 overflow-auto duration-300 transition-all flex flex-col">
                    <div class="option-list">
                        <MultiChoiceOption correct={true} />
                        <MultiChoiceOption correct={true} />
                        <MultiChoiceOption correct={false} />
                    </div>
                </div>
            </div>
        </>
    )
}
function TextAnswerQuestion() {
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
                <EditQuestion openFunction={setEditQuestion} />
            </Modal>
            <div onClick={() => {open()}} class="group mt-5">
                <div class="flex bg-[#6D96D9] items-center rounded-l-full px-10 py-2 gap-10">
                    <input class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="checkbox" onClick={(e) => {e.stopPropagation()}} />
                    <div class="h-[100px] aspect-[4/3] bg-black rounded-xl self-center my-5">image here</div>
                    <div class="question">
                        <div class="font-semibold text-xl">Question 1:</div>
                        <div class="question-title">Who kill jeff</div>
                    </div>
                    <div class="ml-auto flex gap-5 items-center">
                        <div class="px-10 py-2 rounded-full font-bold bg-red-400 text-white">Type answer</div>
                        <svg onClick={(e) => {setEditQuestion(true); e.stopPropagation()}} class="hover:scale-110 transition-all" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                        <svg onClick={(e) => {e.stopPropagation()}} class="hover:scale-110 transition-all" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                    </div>
                </div>
                <div ref={(current) => (option = current)} class="shadow-xl ml-20 px-8 rounded-b-lg h-0 overflow-auto duration-300 transition-all flex flex-col">
                    <div class="bg-[#00000020] min-h-[180px] h-fit p-8 rounded-xl">The answer is my cock</div>
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

    return (
        <>  
            <Modal
                isOpen={editQuizOpened}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
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
                <AddQuestion ref={(current) => (addQuestion = current)} openFunction={setAddQuestion} />
            </Modal>
            <Title />
            <div class="flex">
                <div class="w-1/5 bg-[#B1E5FF] flex flex-col sticky inset-0 h-screen">
                    <div class="w-[90%] h-36 bg-black rounded-xl self-center my-5 ">image here</div>
                    <div class="self-center font-bold text-lg mb-5">Hiter trivia</div>
                    
                    <div class="options">
                        <button onClick={() => {setAddQuestion(true)}} class="bg-[#F8858B] my-2 w-[70%] p-3 rounded-r-full font-semibold hover:w-[85%] transition-all">Add question</button>
                        <button class="bg-[#F8858B] my-2 w-[70%] p-3 rounded-r-full font-semibold hover:w-[85%] transition-all">Add from discovery</button>
                        <button onClick={() => {setEditQuiz(true)}} class="bg-[#F8858B] my-2 w-[70%] p-3 rounded-r-full font-semibold hover:w-[85%] transition-all">Edit quiz</button>
                        <button class="bg-[#F8858B] my-2 w-[70%] p-3 rounded-r-full font-semibold hover:w-[85%] transition-all">Import</button>
                        <button class="bg-[#F8858B] my-2 w-[70%] p-3 rounded-r-full font-semibold hover:w-[85%] transition-all">Export</button>
                        <NavLink to="/" end>
                            <button class="bg-[#F8858B] my-2 w-[70%] p-3 rounded-r-full font-semibold hover:w-[85%] transition-all">Exit</button>
                        </NavLink>
                    </div>
                </div>
        
                <div class="w-4/5 mb-[10%]">
                    <div class="w-full bg-[#A3D5FF] flex justify-between py-4 px-6 mb-5">
                        <div class="flex gap-3 items-center">
                            <input placeholder="Search" />
                            <button class="bg-[#FF6663] p-4 rounded-lg">FILTER</button>
                            <svg class="hover:scale-110 transition-all" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                        </div> 
    
                        <button class="px-10 py-2 rounded-full font-bold bg-red-400 text-white hover:bg-rose-500 hover:scale-105 transition-all">SAVE</button>
                    </div>
        
                    <div class="pl-20">
                        <MultiChoiceQuestion />
                        <MultiChoiceQuestion />
                        <TextAnswerQuestion /> 
                        <TextAnswerQuestion />     
                    </div>
                </div>
            </div>	
        </>
    )
}
export default QuestionDisplay