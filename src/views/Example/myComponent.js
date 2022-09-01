import React from "react";
class MyComponent extends React.Component {
    state = {
        fname: '',
        lname: ''
    }
    handelOnChangeFName = (e) => {
        this.setState({
            fname: e.target.value
        })
    }
    handelOnChangeLName = (e) => {
        this.setState({
            lname: e.target.value
        })
    }

    handelSubmit = (e) =>{
        e.preventDefault();
        console.log('data:', this.state)
    }
    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.fname}
                        onChange={(e) => this.handelOnChangeFName(e)}
                    /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lname}
                        onChange={(e) => this.handelOnChangeLName(e)}
                    /><br />
                    <input type="submit" value="Submit"
                    onClick={(e)=> this.handelSubmit(e)} />
                </form>
            </>

        );
    }
}

export default MyComponent;
