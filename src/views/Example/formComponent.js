import React from "react";
class FormComponent extends React.Component {
    state = {
        title: '',
        salary: '',
    }

    handelTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handelSalary = (e) => {
        this.setState({
            salary: e.target.value
        })
    }

    handelSubmit = (e) => {
        e.preventDefault();
        // validate
        if (!this.state.title || !this.state.salary) {
            alert('Err!!!')
        }

        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })

        // delete value
        this.setState(
            {
                title: '',
                salary: ''
            }
        )
    }

    render() {
        return (
            <form>
                <label htmlFor="title">Title Jobs:</label><br />
                <input type="text" value={this.state.title}
                    onChange={(e) => this.handelTitle(e)}
                /><br />
                <label htmlFor="salary">Salary:</label><br />
                <input type="text" value={this.state.salary}
                    onChange={(e) => this.handelSalary(e)}
                /><br />
                <input type="submit" value="Submit"
                    onClick={(e) => this.handelSubmit(e)} />
            </form>
        )
    }
}

export default FormComponent;
