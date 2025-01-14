import { useState } from "react"
import Modal from "react-modal"
import AddImage from "../PopUp/AddImage"
import { NavLink, useNavigate } from "react-router"

function AddQuiz( {setIsOpen} ) {
    const [addImage, setAddImage] = useState(false)
    const [image, setImage] = useState('')
    let quiz
    const navigate = useNavigate()

    function createQuiz() {
        navigate("/questionlist")
    }

    return (
        <>
            <Modal
                isOpen={addImage}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: '#fff',
                        zIndex: 10
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
                <AddImage addButton={setAddImage} imageContainer={setImage} />
            </Modal>
            <div className="backdrop-blur-[2px] w-screen h-screen fixed z-10 flex">
                <div className="flex flex-col inset-0 m-auto w-full bg-blue-200 border-2 border-slate-500 rounded-lg md:p-10 lg:w-4/5">
                    <div className="self-center font-bold sm:text-2xl m-3">CREATE NEW QUIZIGMA</div>
                    <div className="gap-2 lg:grid lg:grid-cols-2">
                        <label className="flex justify-center justify-self-center w-2/3 items-center aspect-square bg-sky-200 shadow-md border border-blue-300 rounded-xl lg:w-4/5 bg-center bg-cover" style={(image != '' ? {backgroundImage:`url(${image})`} :{ backgroundImage: "none"})}>
                        <button className="hidden w-fit bg-red-400 rounded-full py-3 px-10 text-white sm:block hover:bg-rose-500 hover:scale-105 hover:opacity-100 transition-all" style={(image == '' ? {display: "block"} :{display: 'none'})} onClick={() => {setAddImage(true)}}>ADD IMAGE</button>
                        <svg className="hidden" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M480-480ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h320v80H200v560h560v-320h80v320q0 33-23.5 56.5T760-120H200Zm40-160h480L570-480 450-320l-90-120-120 160Zm440-320v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/></svg>
                        </label>
                        <div className="flex flex-col justify-self-center w-2/3 lg:w-full">
                            <label className="mt-3 font-semibold" for="quiz-name">Name</label>
                            <input ref={(current) => {quiz = current}} className="p-3 rounded-xl" type="text" />
                            <label className="mt-3 font-semibold" for="quiz-name">Description</label>
                            <textarea className="p-3 rounded-xl h-full"></textarea>
                        </div>

                        <div className="col-span-2 flex justify-end mt-5 justify-self-center w-2/3 lg:w-full" onClick={createQuiz} value="CREATE"><button className="w-full sm:w-fit bg-red-400 rounded-full py-2 px-16 text-white hover:bg-rose-500 hover:scale-105 transition-all">CREATE</button></div>
                        
                    </div>
                    <NavLink to='/discovery' end>
                        <div className="col-span-2 flex justify-end my-5 justify-self-center w-2/3 lg:w-full "><button onClick={() => {openFunction(false)}} className="bg-blue-500 hover:bg-violet-800 w-full sm:w-fit rounded-full py-2 px-16 text-white  hover:scale-105 transition-all">Exit</button></div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}
export default AddQuiz