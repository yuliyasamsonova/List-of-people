import React, {Component} from 'react';
import './App.css';
import UserInfo from'./UserInfo/UserInfo' ;
import users from "./users";
import UserButtonList from "./UserButtonList/UserButtonList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {}
        };
    }
    changeCurrentUser = (user)=> {
            this.setState({currentUser: user});
    }
    render()
    {
        return (
            <div className="App">
                <div>
                    <UserButtonList
                        users={users}
                        changeCurrentUser={this.changeCurrentUser}
                    />
                </div>
                <div className="info">
                    <UserInfo
                        name={this.state.currentUser.name}
                        surname={this.state.currentUser.surname}
                        birthday={this.state.currentUser.birthday}
                    />
                </div>
            </div>
        );
    }
}

export default App;
