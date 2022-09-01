import React from "react";
class Demo extends React.Component {
    /*
      JSX => return 1 khối (trong 1 cặp đóng mở)
      */

    state = {
        name: 'Minh Long',
        age: 20
    }

    handelOnChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handelClick = () => {
        alert('hi')
    }
    //khi state thay đổi, hàm render sẽ re-render (render lại)
    render() {//là 1 hàm
        return (
            // fragment
            <>
                <div>
                    {/* dùng js trong HTML bằng việc bỏ vào dấu {}*/}
                    {console.log("tôi tên là:",)}
                    <input value={this.state.name} type='text' onChange={(e) => this.handelOnChangeName(e)} />
                    <br />
                    Xin chào tôi là {this.state['name']}
                </div>
                <div>
                    Tôi {this.state.age} tuổi
                </div>
                <div>
                    <button onClick={() => this.handelClick()}>Click</button>
                </div>
            </>

        );
    }
}

export default Demo;
