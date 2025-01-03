import React, { useState } from "react";

function TemplateCard1() {
    const [trigger, setTrigger] = useState(false);
    const [cardStyle, setCardStyle] = useState("");

    const handleClick = () => {
        if (!trigger) {
          setTrigger(true);
          setCardStyle("animate-rgbBorder border-[10px]");
        } else {
          setTrigger(false);
          setCardStyle("");
        }
    };

    return(
        <>
            <div onClick={handleClick} className={`rounded-3xl bg-red-500 max-h-[50vh] min-w-[35vh] transition ease-in-out duration-300 hover:-translate-y-[21vh] ${cardStyle}`}>
                {trigger}
            </div>
        </>
    )
}

export default TemplateCard1;