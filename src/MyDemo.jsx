import React, {use, useState} from "react";


function MyDemo(){

    const [name, setName] = useState("enter name above")
    const [answer, setAnswer] = useState("");
    const handleNameInput = () => (
        setName(document.getElementById("myName").value)
    )
    return(
        <div>
            <input id="myName" placeholder="Name.."></input>
            <button onClick={handleNameInput}>Submit name</button>
            <p>Name:{name}</p>
            <p>Answer: {answer} </p>
            <label>  
            <input name = "rb" type="radio" value ="Yes" checked = {answer == "Yes"}
            onChange={(e)=> setAnswer(e.target.value)}/> Yes 
            <input name = "rb" type="radio" value ="No" checked = {answer == "No"}
            onChange={(e)=> setAnswer(e.target.value)}/> No
            </label>
        </div>
    );
}
export default MyDemo
