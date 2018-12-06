import React from 'react';
import UserButton from "../UserButton/UserButton";

const UserButtonList = ({users,changeCurrentUser}) => {
    return (
        <div>
            {users.map((user) => {
                return (<UserButton
                    name={user.name}
                    surname={user.surname}
                    onButtonClick={() => {
                        changeCurrentUser (user)
                    }}
                />)
            })}

        </div>
    )
};
export default UserButtonList;