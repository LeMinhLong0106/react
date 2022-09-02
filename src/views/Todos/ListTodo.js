import React from "react";
import './ListTodo.scss';
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
    state = {
        listTotos: [
            { id: 'id1', title: 'title 1' },
            { id: 'id2', title: 'title 2' },
            { id: 'id3', title: 'title 3' },
        ],
        editTodo: {

        }
    }
    addNewTodo = (todo) => {
        this.setState({
            listTotos: [...this.state.listTotos, todo]
        })
        toast.success("Wow so easy!");
    }

    handelDeleteTodo = (todo) => {
        let currentTodo = this.state.listTotos

        currentTodo = currentTodo.filter(item => item.id !== todo.id)
        this.setState({ listTotos: currentTodo })
        toast.success('Delete success')
    }

    handelEditTodo = (todo) => {
        let editTodo = this.state.editTodo
        let listTotos = this.state.listTotos
        let isEmptyObj = Object.keys(editTodo).length === 0;

        // nhấn nút save
        if(isEmptyObj === false && editTodo.id === todo.id ){
            let listTotoCopy = [...listTotos];
            let objIndex = listTotoCopy.findIndex((item => item.id === todo.id)) 
            listTotoCopy[objIndex].title = editTodo.title
            this.setState({
                listTotos: listTotoCopy,
                editTodo: {}
            })
            toast.success('Update success')
            return;
        }
        // nhấn nút edit
        this.setState({
            editTodo: todo
        })
    }

    handelOnChangeEditTodo = (e) => {
        let editTodoCopy = {...this.state.editTodo}
        editTodoCopy.title = e.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        // let { listTotos } = this.state;
        let listTotos = this.state.listTotos;
        let editTodo = this.state.editTodo
        let isEmptyObj = Object.keys(editTodo).length === 0;

        return (
            <div className="list-todo-container">
                <AddTodo addNewTodo={this.addNewTodo} />

                <div className="list-todo-content">
                    {
                        listTotos && listTotos.length > 0 && listTotos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ? <span>{index + 1} - {item.title}</span>
                                        :
                                        <>
                                            {editTodo.id == item.id ? <span>{index + 1} - 
                                            <input value={editTodo.title} 
                                            onChange={(e) => this.handelOnChangeEditTodo(e) }
                                            /> </span>
                                                :
                                                <span>{index + 1} - {item.title}</span>
                                            }
                                        </>
                                    }
                                    <button className="edit"
                                        onClick={() => this.handelEditTodo(item)}
                                    >
                                        {isEmptyObj === false && editTodo.id == item.id ? 'Save' : 'Edit' }
                                        </button>
                                    <button className="delete"
                                        onClick={() => this.handelDeleteTodo(item)}
                                    >Delete</button>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        );
    }
}

export default ListTodo;
