import { useState } from "react";
import { useNavigate } from "react-router";

function Import( {addButton, imageContainer} ) {
    const [image, setImage] = useState('')

    function displayImage(e) {
        console.log(e.target.files);
        setImage(URL.createObjectURL(e.target.files[0]));
    }
    function addImage() {
        imageContainer(image)
        addButton(false)
    }

    return (
        <>  
            <div className="w-full xl:w-auto xl:h-full aspect-square border m-auto border-black rounded-sm p-5 flex flex-col">
                <div className="flex justify-end">
                    <button onClick={addImage} className="sm:px-20 sm:py-5 px-10 py-2 rounded-full bg-red-400 text-white hover:bg-rose-500 hover:scale-105 transition-all" >IMPORT</button>
                </div>
                <label className="border-2 flex justify-center flex-col items-center sm:text-2xl rounded-lg mt-10 border-black h-full bg-center bg-cover" style={(image != '' ? {backgroundImage:`url(${image})`} :{ backgroundImage: "none"})}>
                    {/* <img className="rounded-lg object-cover" src={image} alt="" /> */}
                    <div style={(image == '' ? {display: "block"} :{display: "none"})}>Drag and drop image here </div>
                    <div style={(image == '' ? {display: "block"} :{display: "none"})}>or click here to add from file</div>
                    <input onChange={(e) => (displayImage(e))} accept=".png, .jpeg, .jpg, .webp, .jfif" className="hidden" type="file" />
                </label>
                <div className="w-full text-lg flex mt-6 gap-6 pl-2 items-center">
                    <span className="min-w-fit">Import by link: </span>
                    <div className="relative w-full">
                        <input type="email" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-700 rounded-md pl-3 pr-16 py-2 transition duration-300 ease focus:outline-none focus:border-black hover:border-slate-800 shadow-sm focus:shadow" placeholder="Email Address" />
                        <button
                        className="absolute right-1 top-1 rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        >
                        Paste
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Import