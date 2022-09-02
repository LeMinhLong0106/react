import React from "react";
class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }

    handelShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handelOnClickDelete = (job) => {
        // console.log('job:',job)
        this.props.deleteJob(job)
    }

    render() {
        // console.log('check props:', this.props)

        let { name, age, arrJob } = this.props; //this.props là 1 object
        let { showJobs } = this.state;
        return (
            <>
                <div>
                    {/* props truyền dl từ cha xuống con */}
                    tôi tên {name} - {age}
                </div>
                {/* điều kiện gọn */}
                {showJobs === false ?
                    <div><button onClick={() => this.handelShowHide()}>Show</button></div>
                    :
                    <>
                        <div className="arrJob-list">
                            {
                                arrJob.map((item) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} 
                                            <span onClick={()=> this.handelOnClickDelete(item)}> x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div><button onClick={() => this.handelShowHide()}>Hide</button></div>
                    </>
                }
            </>
        );
    }
}

export default ChildComponent;
