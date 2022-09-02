import React from "react";
import ChildComponent from "./childComponent";
import FormComponent from "./formComponent";
class MyComponent extends React.Component {
    state = {
        arrJob: [
            { id: 'id1', title: 'frontend', salary: '1000' },
            { id: 'id2', title: 'backend', salary: '1200' },
            { id: 'id3', title: 'tester', salary: '1300' },
        ]
    }

    addNewJob = (job) => {
        // cách 1
        let curentJob = this.state.arrJob;
        curentJob.push(job)
        this.setState({ arrJob: curentJob })
        // cách 2
        // this.setState(
        //     { arrJob: [...this.state.arrJob, job] }// [] tạo ra 1 aray; ...toán tử copy; pust phần tử job vào array
        // )
    }

    deleteJob = (job) => {
        let curentJob = this.state.arrJob;
        curentJob = curentJob.filter(item => item.id !== job.id);
        this.setState({ arrJob: curentJob })
    }

    render() {
        console.log('check state:', this.state)
        return (
            <>
                <FormComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    // bản chất của props là 1 biến (name)
                    deleteJob={this.deleteJob}
                    arrJob={this.state.arrJob}
                />
            </>
        );
    }
}

export default MyComponent;
