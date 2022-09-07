import React from "react";
import { withRouter } from "react-router";
import logo from '../../assets/images/majestic.PNG';
import { connect } from "react-redux";

class Home extends React.Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo')// chuyển đến trang todo sau 3s
    //     }, 3000)
    // }

    // thực thi hàm render trước rồi mới đến componentDidMount
    // HOC: higher order component: để giúp component có thêm nhìu thuộc tính mới

    // actions là 1 obj {} gồm type (buộc có) và payload (ko có cũng đc)
    // type định nghĩa tên của action; payload dữ liệu truyền đi (vd: id)
    handelDeleteUser = (user) => {
        this.props.deleteUserRedux(user)
    }
    handelCreateUser = () => {
        this.props.createUserRedux()
    }

    render() {
        let listUsers = this.props.dataRedux;

        console.log("check props: ", this.props)
        console.log("check props: ", listUsers)
        return (
            <>
                <div>
                    Home
                </div>
                <div>
                    <img src={logo} style={{ width: '200px', height: '200px', marginTop: '20px' }} />
                </div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.id}: {item.name} <span onClick={() => this.handelDeleteUser(item)}>x</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <button onClick={() => this.handelCreateUser()}>Add user</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        createUserRedux: () => dispatch({ type: 'CREATE_USER' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));//kết nối trang Home với Redux