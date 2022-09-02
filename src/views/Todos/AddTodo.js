import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
    state = {
        title: ''
    }

    handelOnChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handelOnClickAdd = () =>{
        if (!this.state.title ){
            toast.error('Missing title!!!')
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        }

        this.props.addNewTodo(todo)

        this.setState({
            title: ''
        })
    }

    render() {
        let title = this.state.title;

        return (
            <div className="add-todo">
                <input type='text' value={title}
                    onChange={(e) => this.handelOnChangeTitle(e)}></input>
                <button type="button" className="add"                
                onClick={() => this.handelOnClickAdd()}
                >Add</button>
            </div>
        )
    }
}

export default AddTodo;