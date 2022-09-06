import React from "react";
import { withRouter } from "react-router";

class Home extends React.Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo')// chuyển đến trang todo sau 3s
    //     }, 3000)
    // }
    
    // thực thi hàm render trước rồi mới đến componentDidMount
    // HOC: higher order component: để giúp component có thêm nhìu thuộc tính mới
    render() {
        console.log("check props: ", this.props)
        return (
            <div>
                Home
            </div>
        )
    }
}

export default withRouter(Home);