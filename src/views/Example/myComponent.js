import React from "react";
import ChildComponent from "./childComponent";
class MyComponent extends React.Component {
    state = {
        name: '',
        age: '',
        arrJob: [
            { id: 'id1', title: 'frontend', salary: '1000' },
            { id: 'id2', title: 'backend', salary: '1200' },
            { id: 'id3', title: 'tester', salary: '1300' },
        ]
    }
    handelOnChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handelOnChangeAge = (e) => {
        this.setState({
            age: e.target.value
        })
    }

    handelSubmit = (e) => {
        e.preventDefault();
        console.log('data:', this.state)
    }
    render() {
        console.log('check state:', this.state)
        return (
            <>
                <form>
                    <label htmlFor="name">Name:</label><br />
                    <input type="text" value={this.state.name}
                        onChange={(e) => this.handelOnChangeName(e)}
                    /><br />
                    <label htmlFor="age">Age:</label><br />
                    <input type="text" value={this.state.age}
                        onChange={(e) => this.handelOnChangeAge(e)}
                    /><br />
                    <input type="submit" value="Submit"
                        onClick={(e) => this.handelSubmit(e)} />
                </form>
                <ChildComponent
                    // bản chất của props là 1 biến (name)
                    name={this.state.name}
                    age={this.state.age}
                    arrJob={this.state.arrJob}
                />

            </>
        );
    }
}

export default MyComponent;
