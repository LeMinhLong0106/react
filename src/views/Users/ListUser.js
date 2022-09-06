import React from "react";
import axios from "axios";
import './ListUser.scss'
import { withRouter } from "react-router-dom";

class ListUser extends React.Component {
    state = {
        listUser: [],
    };

    async componentDidMount() {
        // axios.get('https://reqres.in/api/users')
        // .then(res => {
        //     console.log('check res:', res.data.data)
        // })
        let res = await axios.get("https://reqres.in/api/users");
        this.setState({
            listUser: res && res.data && res.data.data ? res.data.data : [],
        });
    }

    handelViewDetail = (user) => {
        // console.log("ckeck: ", this.props)
        this.props.history.push(`/user/${user.id}`)
    }

    render() {
        let listUsers = this.state.listUser

        return (
            <div className="list-user-container">
                <div className="title">
                    All list user
                </div>
                <div className="list-user-content">
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div className="child" key={item.id} onClick={()=> this.handelViewDetail(item)}>
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(ListUser);
