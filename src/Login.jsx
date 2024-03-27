import { useState } from "react";

export function Login (){
    const [data, setData] = useState({
        username: "",
        password: "",
        checkbox: false
})

    function handleInputChange(event) {
        const name = event.target.name
       const value =  event.target.value
       const checked = event.target.checked
       const type = event.target.type

       setData(d => {
         return {
            ...d,
            [name] : type === "checkbox" ? checked : value,
        }

       })
    }

 

    return (
        <div>
            <h1>DEVELHOPE</h1>
            <input name="username" placeholder="Username" type="text" value={data.username} onChange = {handleInputChange}></input>
            <input name="password" type="password" placeholder="Password" value={data.password} onChange ={handleInputChange}/>
           <input name="checkbox" type="checkbox"  checked={data.checkbox} onChange ={handleInputChange}></input>
            <button disabled={!data.username || !data.password}> Login</button>
        </div>
    )
}