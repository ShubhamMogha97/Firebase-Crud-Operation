import { useState } from "react";

const NewComponent=()=>{
    const [count, setCount] = useState(0)
    const handleItem=()=>{
        setCount(count+1)
    }
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={()=>handleItem}>Increment</button>
        </div>
    );
}

export default NewComponent;