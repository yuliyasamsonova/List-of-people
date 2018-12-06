import React from 'react';
const UserInfo = ({name,surname,birthday}) => {
    return (
        <div>
            <p>Имя: {name}</p>
            <p>Фамилия: {surname}</p>
            <p>Дата рождения: {birthday}</p>
        </div>
    )
};
export default UserInfo;