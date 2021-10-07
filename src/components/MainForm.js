import React, {useState} from "react";
import AngleForm from "./AngleForm";
import '../main.css';

const MainForm = () => {

    const [ABC, setABC] = useState("");
    const [BAC, setBAC] = useState("");
    const [BCA, setBCA] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        (parseInt(ABC) + parseInt(BAC) + parseInt(BCA) !== 180) ? alert("Answer is wrong") : alert("Answer is correct")
    };
    const handleABCChange = result => {
        setABC(result.value);
    };
    const handleBACChange = result => {
        setBAC(result.value);
    };
    const handleBCAChange = result => {
        setBCA(result.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mainFormWrapper">
                    <div className="mainFormContainer">
                        <AngleForm label={"ABC"} handleMainChange={handleABCChange}/>
                        <AngleForm label={"BAC"} handleMainChange={handleBACChange}/>
                        <AngleForm label={"BCA"} handleMainChange={handleBCAChange}/>
                    </div>
                    <div style={{marginTop: "20px"}}>
                        <input className="submitButton" type="submit" value="Submit"/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MainForm;
