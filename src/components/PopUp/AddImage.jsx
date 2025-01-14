import { useState } from "react";
import { useNavigate } from "react-router";

function AddImage( {addButton, imageContainer} ) {
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
                <div className="flex justify-between">
                    <button className="sm:px-20 sm:py-5 px-10 py-2 rounded-full bg-red-400 text-white hover:bg-rose-500 hover:scale-105 transition-all" >CROP</button>
                    <button onClick={addImage} className="sm:px-20 sm:py-5 px-10 py-2 rounded-full bg-red-400 text-white hover:bg-rose-500 hover:scale-105 transition-all" >ADD</button>
                </div>
                <label className="border-2 flex justify-center flex-col items-center sm:text-2xl rounded-lg mt-10 border-black h-full bg-center bg-cover" style={(image != '' ? {backgroundImage:`url(${image})`} :{ backgroundImage: "none"})}>
                    {/* <img className="rounded-lg object-cover" src={image} alt="" /> */}
                    <div style={(image == '' ? {display: "block"} :{display: "none"})}>Drag and drop image here </div>
                    <div style={(image == '' ? {display: "block"} :{display: "none"})}>or click here to add from file</div>
                    <input onChange={(e) => (displayImage(e))} accept=".png, .jpeg, .jpg, .webp, .jfif" className="hidden" type="file" />
                </label>
            </div>
        </>
    )
}

export default AddImage