import React from 'react'
import '../css/BackButton.css';
import { RiArrowLeftLine } from "react-icons/ri";


function BackButton() {
    return (
        <div className="btn-container">
            <button type="button" className="back-button">
                <RiArrowLeftLine className="back-arrow-icon" /> Back
            </button>
        </div>
    )
}

export default BackButton;