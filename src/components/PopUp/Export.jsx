import { useState } from "react";
import { useNavigate } from "react-router";

function Export( {addButton, imageContainer} ) {
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
                    <button onClick={addImage} className="sm:px-20 sm:py-5 px-10 py-2 rounded-full bg-red-400 text-white hover:bg-rose-500 hover:scale-105 transition-all" >EXPORT</button>
                </div>
                <div className="border border-black rounded-md py-2 px-4 mt-4">file</div>
                <select className="border border-black rounded-md py-2 px-4 mt-4">
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
                <select className="border border-black rounded-md py-2 px-4 mt-4">
                </select>
            </div>
        </>
    )
}

export default Export