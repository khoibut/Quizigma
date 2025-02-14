import { useState } from "react";
import { useNavigate } from "react-router";

function AddImage( {addButton, imageContainer} ) {
    const [image, setImage] = useState('')

    function displayImage(e) {
        const file = e.target.files[0];
        
        if (file) {
            const reader = new FileReader();
            
            reader.onloadend = () => {
                const base64Image = reader.result;
                setImage(base64Image);
            };
            
            reader.readAsDataURL(file); // This converts the file to Base64
        }
    }
    function addImage() {
        imageContainer(image)
        addButton(false)
    }

    return (
        <>
            <div className="h-full w-full bg-white dark:bg-[rgba(36,27,47,1)] light:bg-[rgba(250,252,253,1)] flex justify-center items-center">
                <div className="w-full xl:w-auto xl:h-full aspect-square border m-auto shadow-md dark:border-blue-950 bg-sky-200 dark:bg-[rgba(93,116,203,1)] light:bg-[rgba(203,234,236,1)] rounded-sm p-5 flex flex-col">
                    <div className="flex justify-between">
                        <button className="sm:px-20 sm:py-5 px-10 py-2 rounded-full bg-red-400 text-white hover:bg-rose-500 hover:scale-105 transition-all" >CROP</button>
                        <button onClick={addImage} className="sm:px-20 sm:py-5 px-10 py-2 rounded-full bg-red-400 text-white hover:bg-rose-500 hover:scale-105 transition-all" >ADD</button>
                    </div>
                    <label className="shadow-md flex justify-center flex-col items-center sm:text-2xl rounded-lg mt-10 border border-sky-400 dark:dark:border-blue-950 h-full bg-center bg-cover" style={(image != '' ? {backgroundImage:`url(${image})`} :{ backgroundImage: "none"})}>
                        {/* <img className="rounded-lg object-cover" src={image} alt="" /> */}
                        <div style={(image == '' ? {display: "block"} :{display: "none"})}>Drag and drop image here </div>
                        <div style={(image == '' ? {display: "block"} :{display: "none"})}>or click here to add from file</div>
                        <input onChange={(e) => (displayImage(e))} accept="image/*" className="hidden" type="file" />
                    </label>
                </div>
            </div>
        </>
    )
}

export default AddImage