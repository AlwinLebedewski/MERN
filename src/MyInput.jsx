import { useState } from "react";

const MyInput = ()=>{
    const [name, steName] = useState("Stanley")
    return(
        <div>
            <h1>{name}</h1>
            <input type="text"
            placeholder="wprowadż imie"
            value={name}
            onChange={(e)=>steName(e.target.value)}
            />
            <br/>
            <input type = "text"
            placeholder="dane do rodzica-App"
            
            />
        </div>
    )
}
export default MyInput;