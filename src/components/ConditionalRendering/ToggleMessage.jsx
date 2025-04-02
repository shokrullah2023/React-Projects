import { useState} from "react"; 

export default function ToggleMessage(){
    const [visible, setIsVisible] = useState(false);

    return(
        <div>
            <button onClick={() => setIsVisible(!visible)}>
            {visible ? "Hide Message" : "Show Message"}
            </button>
            {visible && <p className="mt-3 text-lg">Hello! This is a toggled message.</p>}
            
        </div>
    )
}