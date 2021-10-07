import React from "react";
import triangle from '../triangle.png';
import '../main.css';
import MainForm from "./MainForm";


const Board = (props) => {

    return (
        <div className="boardWrapper">
            <div className="boardContainer">
                <div>
                    <h2>
                        Measure the angles of the triangle using a protractor
                    </h2>
                </div>
                <img src={triangle} alt="triangle"/>
                <MainForm />
            </div>
            {props.children}
        </div>
    );
}

export default Board;
