import React from 'react';
import "./UserButton.css";
const UserButton = ({name,surname,onButtonClick}) => {
    return (
        <div>
            <div className="button" onClick={onButtonClick}>{`${name} ${surname}`}</div>
        </div>
    )
};
export default UserButton;