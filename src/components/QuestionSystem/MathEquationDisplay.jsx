import { useState } from "react"
import { EditableMathField } from "react-mathquill"
import Modal from "react-modal"
function MathEquationDisplay({ isMathOpen, setIsMathOpen, insertMath }) {
    const [latex, setLatex] = useState('')
    let symbols = ['&forall;']

    function InputButton({ value }) {
        return <button onClick={() => { addToEquation(value) }} className="inline-flex h-min items-center hover:opacity-95 justify-center ring-none rounded-lg font-semibold py-2 px-4 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-violet-500 border-b-violet-600 ring-white text-white border-b-4 hover:text-gray-100 active:bg-violet-800 active:text-gray-300 focus-visible:outline-violet-500 text-sm sm:text-base">{value}</button>
    }


    const addEquation = () => {
        insertMath(latex)
        setLatex('')
        setIsMathOpen(false)
    }

    return (
        <>
            <Modal
                isOpen={isMathOpen}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: '#fff',
                        zIndex: 1000
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
                }}>
                <div className=" max-w-full overflow-hidden border-2 border-slate-300 bg-[#6bc1ae] mx-4 rounded-lg p-4 flex flex-col gap-4">
                    <div className="font-bold text-black -mb-2">Insert an euqation:</div>
                    <div>
                        <div className="text-black opacity-50 font-semibold text-sm ml-2">Preview:</div>
                        <div className="whitespace-nowrap min-w-full">
                            <EditableMathField
                                latex={latex}
                                onChange={(mathField) => {
                                    setLatex(mathField.latex())
                                }}
                                style={{
                                    backgroundColor: "white",
                                    padding: "1rem",
                                    display: "block",
                                    minWidth: "600px", // Ensures scrolling is possible
                                }}
                            />
                        </div>
                    </div>
                    <div className="bg-[#d1e984] py-4 max-sm:px-4 px-7 rounded-lg flex flex-wrap gap-2 h-[50%] overflow-auto content-start max-h-[400px] overflow-y-auto shadow-[0_8px_4px_rgba(0,0,0,0.1)]  [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-lg [&::-webkit-scrollbar-thumb]:bg-violet-400 [&::-webkit-scrollbar-thumb]:opacity-50 [&::-webkit-scrollbar-thumb]:rounded-lg">
                    </div>
                    <div className="flex gap-2 justify-end">
                        <button onClick={() => { setIsMathOpen(false) }} class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">Exit</button>
                        <button className="inline-flex items-center justify-center px-5 py-2 text-base font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500" onClick={addEquation} >Insert</button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default MathEquationDisplay